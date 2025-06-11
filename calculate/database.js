const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://AmanTiwari:U1ug6iM1lg5t8uWs@cluster0.wzrpbn7.mongodb.net/mongodb+srv://AmanTiwari:<db_password>@cluster0.wzrpbn7.mongodb.net/";

const client = new MongoClient(url);

const dbName = "Helloworld";

async function main() {
  await client.connect();

  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const colllection = db.collection("user");

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
