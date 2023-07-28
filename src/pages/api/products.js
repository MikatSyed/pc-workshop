const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://pc-workshop:YPJMghHoLqeATUNB@cluster0.du7xt.mongodb.net/PcWorkshopDB?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  const category = req.query.category;
  
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const productCollection = client.db("PcWorkshopDB").collection("products");

    if (req.method === "GET") {
      let product;
     if(category){
       product = await productCollection.find({category}).toArray();
     }else{
      product = await productCollection.find({}).toArray();
     }
     
      res.send({ message: "success", status: 200, Total: product.length, product });
    }

    if (req.method === "POST") {
      const product = req.body;
      const result = await productCollection.insertOne(product);
      res.json(result);
    }
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;