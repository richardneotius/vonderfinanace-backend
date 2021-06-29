import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

export const scheduledTest = functions.pubsub.schedule("every 1 minutes")
    .onRun((context) => {
      const date: Date = new Date();
      console.log("Date = " + date.toUTCString());
    });
