import React from "react";
import { Button, Card, Col, Row, Space } from "antd";
import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import { Rate } from 'antd';
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addCpu, addMonitor, addMotherboard, addPsu, addRam, addSdCard } from "@/redux/features/PcBuildSlice";
import { useRouter } from "next/router";


const PcBuilderCategory = ({ products }) => {
  const {push} = useRouter();
  console.log(products[0]?.category,'12');
  const dispatch = useDispatch();

    const addToBuilder = () => {
      console.log(products[0]?.category,'16');
        switch (products[0]?.category) {
            case "cpu":
                dispatch(addCpu(products));
                push("/pc-builder");
                break;
            case "motherboard":
                dispatch(addMotherboard(products));
                push("/pc-builder");
                break;
            case "rAM":
                dispatch(addRam(products));
                push("/pc-builder");
                break;
            case "Power Supply Unit":
                dispatch(addPsu(products));
                push("/pc-builder");
                break;
            case "Storage Device":
                dispatch(addSdCard(products));
                push("/pc-builder");
                break;
            case "Monitor":
                dispatch(addMonitor(products));
                push("/pc-builder");
                break;
        }
    };

  return (
  <>
  
 {
  products.length && <> 
  
  {  products.map((product)=> 
  
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
    <Button type="primary" onClick={()=> addToBuilder()}>Add To Builder</Button>
  </Col>
</Row>
</Card>


)}
  </>
 }
  </>
  );
};

export default PcBuilderCategory;

PcBuilderCategory.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};



// export const getServerSideProps = async (context) => {
//   const { params } = context;
//   console.log("32", params);
//   // Fetch products based on the dynamic category from the "productId" param
//   const res = await fetch(
//     `http://localhost:4000/products?category=${params.category}`
//   );
//   const data = await res.json();
//   console.log("36", data);
//   return {
//     props: {
//       products: data?.data,
//     },
//   };
// };
