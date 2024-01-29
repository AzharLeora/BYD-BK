// import { ObjectId } from "mongodb";
import { dataBase } from "../Database/mongoDb";
const { ObjectId } = require("mongodb");

async function collectionData(findId: string) {
  let collections = await dataBase("userDetails");
  let query = await collections.findOne({ _id: new ObjectId(`${findId}`) });
  return query;
}
async function insertEventData(
  uuid: String,
  groomName: String,
  brideName: String,
  date: String,
  time: String,
  location: String,
  subDomainName: String,
  headerImage: String,
  footerImage: String,
  bodyImage: String,
  insertedDate: string
): Promise<void> {
  let collections = await dataBase("userDetails");
  const data = await collections.insertOne({
    userId: uuid,
    groomName: groomName,
    brideName: brideName,
    date: date,
    time: time,
    location: location,
    subDomainName: subDomainName,
    headerImage: headerImage,
    footerImage: footerImage,
    bodyImage: bodyImage,
    insertedDate,
  });
  return data;
}

export { collectionData, insertEventData };
