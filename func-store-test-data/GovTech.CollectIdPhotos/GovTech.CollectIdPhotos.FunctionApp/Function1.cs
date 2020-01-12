using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using dotenv.net;
using SixLabors.ImageSharp;
using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Blob;
using System.Text.RegularExpressions;
using Microsoft.Extensions.Configuration;

namespace GovTech.CollectIdPhotos.FunctionApp
{
    public static class Function1
    {
        [FunctionName("UploadPhoto")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log, ExecutionContext context)
        {
            var config = new ConfigurationBuilder()
        .SetBasePath(context.FunctionAppDirectory)
        .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
        .AddEnvironmentVariables()
        .Build();


            log.LogInformation("C# HTTP trigger function processed a request.");
            //DotEnv.Config();

            log.LogInformation("DotEnv configured");

            var photoType = req.Query["photoType"];

            var requestBody = await new StreamReader(req.Body).ReadToEndAsync();

            var errorMessage = await UploadImage(photoType, requestBody, config);

            return string.IsNullOrEmpty(errorMessage)
                ? (ActionResult)new OkObjectResult(string.Empty)
                : new BadRequestObjectResult(errorMessage);
        }

        private static async Task<string> UploadImage(string photoType, string dataUri, IConfigurationRoot config)
        {
            try
            {
                var regex = new Regex("data:image([^,;]*(;base64)?),(.*)");
                var match = regex.Match(dataUri);
                if (!match.Success)
                {
                    return "Data uri doesn't match.";
                }

                if (match.Groups.Count < 4)
                {
                    return "Data uri should have match more groups.";
                }

                var data = match.Groups[3].Value;

                var imageBytes = Convert.FromBase64String(data);

                using (var ms1 = new MemoryStream(imageBytes))
                {
                    var img = Image.Load(ms1);

                    var storageConnectionString = config["STORAGE_CONNSTRING"];
                    if (CloudStorageAccount.TryParse(storageConnectionString, out var storageAccount))
                    {
                        var cloudBlobClient = storageAccount.CreateCloudBlobClient();
                        var container = cloudBlobClient.GetContainerReference("images");


                        // Get a reference to the blob address, then upload the file to the blob.
                        // Use the value of localFileName for the blob name.
                        var blobName = $"{photoType}_{DateTime.UtcNow.ToString("yyyyMMdd_HHmm_ss")}_{Guid.NewGuid()}.jpg";
                        var cloudBlockBlob = container.GetBlockBlobReference(blobName);
                        Console.WriteLine($"Writing to {blobName}");
                        using (var ms = new MemoryStream())
                        {
                            img.SaveAsJpeg(ms);
                            ms.Seek(0, SeekOrigin.Begin);
                            await cloudBlockBlob.UploadFromStreamAsync(ms);
                        }
                    }
                }

                return string.Empty;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
