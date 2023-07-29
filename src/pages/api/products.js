// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://pc-workshop:YPJMghHoLqeATUNB@cluster0.du7xt.mongodb.net/PcWorkshopDB?retryWrites=true&w=majority";


// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function dbConnect(req, res) {
//   const category = req.query.category;

//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     const productCollection = client.db("PcWorkshopDB").collection("products");

//     if (req.method === "GET") {
//       let product;
//      if(category){
//        product = await productCollection.find({category}).toArray();
//      }else{
//       product = await productCollection.find({}).toArray();
//      }

//       res.send({ message: "success", status: 200, Total: product.length, product });
//     }

//     if (req.method === "POST") {
//       const product = req.body;
//       const result = await productCollection.insertOne(product);
//       res.json(result);
//     }
//   } finally {
//     // Ensures that the client will close when you finish/error
//     // await client.close();
//   }
//   return productCollection;
// }

// export default dbConnect;

// // pages/api/products.js

// // import { connectToDatabase } from "../../../db";

// // export default async function handler(req, res) {
// //   const category = req.query.category;
// //   if (req.method === "GET") {
// //     try {
// //       const { db } = await connectToDatabase();
// //       const productCollection = db.collection("products");
// //       let products;
// //       if (category) {
// //         products = await productCollection.find({ category }).toArray();
// //       } else {
// //         products = await productCollection.find({}).toArray();
// //       }
// //       res.status(200).json({ message: "success", status: 200, Total: products.length, products });
// //     } catch (error) {
// //       res.status(500).json({ message: "Error fetching products" });
// //     }
// //   } else {
// //     res.status(405).json({ message: "Method Not Allowed" });
// //   }
// // }
