// // pages/api/product/[id].js
// import { ObjectId } from 'mongodb';
// import { connectToDatabase } from '../../../../db';


// // export default async function handler(req, res) {
// //   const { id } = req.query;
// //   console.log('8',id);
// // 
// //   if (req.method === 'GET') {
// //     try {
// //       const { db } = await connectToDatabase();
// //       const productCollection = db.collection('products');
     
// //       const product = await productCollection.findOne({ _id: ObjectId(id) }).toArray();
// //       console.log('16',product);

// //       if (product) {
// //         res.status(200).json(product);
// //       } else {
// //         res.status(404).json({ message: 'Product not found' });
// //       }
// //     } catch (error) {
// //       res.status(500).json({ message: 'Error fetching product' });
// //     }
// //   } else {
// //     res.status(405).json({ message: 'Method Not Allowed' });
// //   }
// // }


// export default async function handler(req, res) {
//   const { id } = req.query;
//   console.log(id);
//   if (req.method === 'GET') {
//     try {
//       const { db } = await connectToDatabase();
//       const productCollection = db.collection('products');
//       const product = await productCollection.findOne({ _id: ObjectId(id) }).toArray();
//       res.status(200).json(product);
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching products',error });
//     }
//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }
// }
