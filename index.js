const express = require("express");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = 5000 || process.env.PORT;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://redux-hunk:v4IoHa2ePUsmBqr1@cluster0.axrxhk2.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

console.log("hate you");

async function run() {
  try {
    await client.connect();
    const productCollection = client.db("redux-hunk").collection("product");

    app.get("/products", async (req, res) => {
      const result = await productCollection.find().toArray();
      res.send(result);
    });

    app.post("/product" , async(req,res) =>{
      const data = req.body
      const result = await productCollection.insertOne(data)
      res.send(result)
    })

    app.delete("/product/:id" , async(req,res) =>{
      const id = req.params.id
      const filter = { _id : ObjectId(id)}
      const result = await productCollection.deleteOne(filter)
      res.send(result)
    })

  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
