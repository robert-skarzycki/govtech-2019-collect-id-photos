## Description

In November 2019, I've enrolled to GovTech 2019 contest organized by Ministry of Digitalization of Poland. I've chosen a "challange" to prepare a mobile app to help people to upload proper photo when applying for identity card. By "proper photo" I mean one that statisfies all legal requirements, e.g. face is not vailed nor eyes hidden by glasses. This mobile app should analyze camera in real time to provide feedback to person taking a selfie photo that given setup doesn't meet particular requirement.

In general I've found that I could try to collect test photos (valid and invalid) by "crowdsourcing" among friends. So, my plan was as designed in three steps:

1. Prepare webapp to collect these test photos from friends.
2. Train machine learning model with these test photos.
3. Prepare mobile app running on trained model - the actual "outcome" required by challenge.

I haven't reached last two steps, beacuse first step takes me too much time and I haven't collected enough amount of test photos. :) However, it was interesting challenge, so I'd like to share what I've done.

## Repository content

It consists of two applications:

- `webapp-collect-test-data` - web app for collecting test data,
- `func-store-test-data` - Azure function for uploading photos to Azure Blob storage.

### Web app for collecting test data

I've just bootstrapped a web app with Gatsby CLI and [Julia starter](https://www.gatsbyjs.org/starters/niklasmtj/gatsby-starter-julia/) - same one that (my blog)[https://robert.skarzycki.pl/] runs with. It was a good decision beacuse I was able to simply start with responsive web app with nice look and just add subsequent pages using technologies I know, i.e. TypeScript and React.

The app is just a wizard that guides a user step by step and asks for doing a selfie photo with specific conditions. First one is valid photo, then each should break specific requirement like wearing glasses.

Every time photo is taken and approved by user, it is sent to the "backend" (as base64 string), wich is actually an Azure function, described in next chapter.

### Azure function to store uploaded photos in Azure Blob storage

This is just an Azure function with HTTP trigger that receives image as base64 string. It runs on .NET Core and use Azure Blob SDK to just upload a photo there. It ensures that file name of the uploaded file follows structure that would help to recognize that particular photo comes from specific step of webapp wizard. This was first time I was using Azure Blob SDK in C# and it's very simple for such a begginer.

## Deployment

Originally I was just deploying web app to the surge.sh, but this is just a SPA app, so could be hosted with many different options - only it requires HTTPS due to required access to camera. Function app was just an Azure function that require connection string to Azure blob.
