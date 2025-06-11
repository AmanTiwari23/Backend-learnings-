const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://AmanTiwari:U1ug6iM1lg5t8uWs@cluster0.wzrpbn7.mongodb.net/mongodb+srv://AmanTiwari:<db_password>@cluster0.wzrpbn7.mongodb.net/";

const client = new MongoClient(url);

const dbName = "Helloworld";

async function main() {
  await client.connect();

  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");

  const data = {
    firstname:"anuj",
    lastname:'tiwari'
  };

//   const innsertResult = await collection.insertOne(data);
//   console.log("Inserted documents => ",innsertResult);


  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  const result = await collection.countDocuments({lastname:"Tiwari"});
  console.log(result);

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
