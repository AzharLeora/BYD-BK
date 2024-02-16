import { dataBase } from "../Database/mongoDb";
import { collectionData } from "../query-functions/mongoDBFunctions";
const express = require("express");
const userDataRouter = express.Router();

userDataRouter.post("/userData", async (request: any, response: any) => {
  try {
    const userId = "65b74afb22f93f9a0d881b5f";
    const userData: any = await collectionData(userId);
    const groomName: string = await userData.groomName;
    if (userData !== null) {
      response.send(userData);
    }
    else {
      response.status(404).send("User data not found");
    }
  } catch (err) {
    console.log(err);
  }
});

export default userDataRouter;
