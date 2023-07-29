import React from "react";
import { Button, Card, Col, Row, Space } from "antd";
import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import { Rate } from 'antd';
import Link from "next/link";

const Category = ({ products }) => {
  products.map((product)=> {
    console.log(product.productName);
  })

  return (
  <>
  
{  products.map((product)=> 
  <Link href={`/product/${product._id}`}>
    <Card className="product-card" key={product._id}>
  <Row gutter={16} align="middle">
    <Col lg={4} xs={24}>
      <Image
        src={product.image}
        alt={product.productName}
        width={200}
        height={200}
      />
    </Col>
    <Col lg={14} xs={24}>
      <h2>{product.productName}</h2>
      <h3>{product.category}</h3>
      <p>{product.status}</p>
      <Rate allowHalf disabled defaultValue={product.averageRating} />
    </Col>
    <Col lg={6} xs={24} className="price-btn">
      <h2>${product.price}</h2>
      <Button type="primary">Add To Builder</Button>
    </Col>
  </Row>
</Card>
  </Link>

)}
       

  </>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  // Fetch all products (without any category filter)
  const res = await fetch("http://localhost:4000/products");
  const products = await res.json();
  console.log('59',products);
  const paths = products?.data?.map((product) => ({
    params: { category: product.category }, // Assuming your product objects have a unique "_id"
  }));
  console.log("63", paths);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log("32", params);
  // Fetch products based on the dynamic category from the "productId" param
  const res = await fetch(
    `http://localhost:4000/products?category=${params.category}`
  );
  const data = await res.json();
  console.log("36", data);
  return {
    props: {
      products: data?.data,
    },
  };
};
