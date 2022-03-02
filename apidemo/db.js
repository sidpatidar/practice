const MongoClient=require("mongodb")
const url="mongodb://localhost:27017"
const client = new MongoClient(uri);
client.conect()
const dbo = client.db("dashboard");
const collection = dbo.collection("uplodes");


