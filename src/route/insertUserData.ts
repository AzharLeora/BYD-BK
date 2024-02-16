import { dataBase } from "../Database/mongoDb";
import {
  collectionData,
  insertEventData,
} from "../query-functions/mongoDBFunctions";
const express = require("express");
const app = express.Router();
const { v4: uuidv4 }: any = require("uuid");
const insertedDate: any = new Date();
const uuid: any = uuidv4();
app.post("/insertUserData", async (request: any, response: any) => {
  try {
    const {
      groomName,
      brideName,
      date,
      time,
      location,
      subDomainName,
      headerImage,
      footerImage,
      bodyImage,
    } = request.body;
    const insert = await insertEventData(
      uuid,
      groomName,
      brideName,
      date,
      time,
      location,
      subDomainName,
      headerImage,
      footerImage,
      bodyImage,
      insertedDate
    );

    if (insert !== null) {
      response.send("success");
    }
  } catch (err) {
    console.log(err);
  }
});

export default app;
