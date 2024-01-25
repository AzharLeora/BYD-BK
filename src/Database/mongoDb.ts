const MongoClient : any = require( "mongodb" ).MongoClient;
const uri : any = "mongodb+srv://navinvae:navin8888@cluster0.9d1xpp8.mongodb.net/?retryWrites=true&w=majority";
const client : any = new MongoClient( uri );

  async function dataBase ( collectionName : any ) {
    let dbClient : any = await client.connect();
    let mydb : any = dbClient.db("");
       return mydb.collection( collectionName )
  }

module.exports = {dataBase}