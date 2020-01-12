const baseUrl =
  process.env.UPLOAD_BASE_URL ||
  "https://govtechcollectidphotosfunctionapp.azurewebsites.net"

const functionKey = process.env.FUNCTION_KEY || ""

export class PhotoUploader {
  static upload = ({ photoType, dataUri, sessionId }) => {
    const headers = new Headers({
      "x-functions-key": functionKey,
    })
    const domain = window.location.hostname
    const url = `${baseUrl}/api/UploadPhoto?photoType=${photoType}&domain=${domain}&sessionid=${sessionId}`
    return fetch(url, {
      method: "POST",
      body: dataUri,
      headers,
    })
  }
}
