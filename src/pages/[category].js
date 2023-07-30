import React from "react";
import {  Row } from "antd";
import RootLayout from "@/components/Layout/RootLayout";

import ProductCard from "@/components/Common/ProductCard";

const Category = ({ products }) => {
 
  return (
    <>
      <Row justify="center">
        {products.length &&
          products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
      </Row>
    </>
  );
};

export default Category;

Category.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  // Fetch all products (without any category filter)
  const res = await fetch("https://pc-workshop-backend.vercel.app/products");
  const products = await res.json();
  console.log("59", products);
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
    `https://pc-workshop-backend.vercel.app/products?category=${params.category}`
  );
  const data = await res.json();
  console.log("36", data);
  return {
    props: {
      products: data?.data,
    },
  };
};
