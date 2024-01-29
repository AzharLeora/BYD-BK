import { dataBase } from "../Database/mongoDb";
import { collectionData } from "../query-functions/mongoDBFunctions";
const express = require("express");
const app = express.Router();

app.post("/userData", async (request: any, response: any) => {
  try {
    const userId = "65b74afb22f93f9a0d881b5f";
    const userData: any = await collectionData(userId);
    const groomName: string = await userData.groomName;
    if (userData !== null) {
      response.send(userData);
    }
  } catch (err) {
    console.log(err);
  }
});

export default app;
