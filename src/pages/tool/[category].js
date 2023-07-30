import React from "react";
import { Button, Card, Col, Row } from "antd";
import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import { Rate } from 'antd';

import { useDispatch } from "react-redux";
import { addCpu, addKeyboard, addMonitor, addMotherboard, addMouse, addPsu, addRam, addSdCard } from "@/redux/features/PcBuildSlice";
import { useRouter } from "next/router";


const PcBuilderCategory = ({ products }) => {
  
  const {push} = useRouter();
  
  const dispatch = useDispatch();

    const addToBuilder = (product) => {
    
        switch (product.category) {
            case "Cpu":
                dispatch(addCpu(product));
                push("/pc-builder");
                break;
            case "Motherboard":
                dispatch(addMotherboard(product));
                push("/pc-builder");
                break;
            case "Ram":
                dispatch(addRam(product));
                push("/pc-builder");
                break;
            case "Psu":
                dispatch(addPsu(product));
                push("/pc-builder");
                break;
            case "Sd":
                dispatch(addSdCard(product));
                push("/pc-builder");
                break;
            case "Monitor":
                dispatch(addMonitor(product));
                push("/pc-builder");
                break;
            case "Keyboard":
                dispatch(addKeyboard(product));
                push("/pc-builder");
                break;
            case "Mouse":
                dispatch(addMouse(product));
                push("/pc-builder");
                break;
        }
    };

  return (
  <>
  
 {
  products.length && <> 
  
  {  products.map((product)=> 
  
  <Card className="product-card" key={product._id} style={{ width: "80%", margin: "20px auto", marginTop: "50px" }}>
  <Row gutter={16} align="middle">
    <Col lg={4} xs={8}>
      <Image
        src={product.image}
        alt={product.product_name}
        width={150}
        height={150}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </Col>
    <Col lg={14} xs={16}>
      <h2>{product.product_name}</h2>
      <h3>{product.category}</h3>
      <p>{product.status}</p>
      <Rate allowHalf disabled defaultValue={product.average_rating} />
    </Col>
    <Col lg={6} xs={24} className="price-btn">
      <h2>{product.price}</h2>
      <Button type="primary" onClick={() => addToBuilder(product)}>
        Add To Builder
      </Button>
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



export const getServerSideProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://pc-workshop-backend.vercel.app//products?category=${params.category}`
  );
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
  };
};
