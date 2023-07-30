import React, { Children } from "react";
import { Button, Card, Col, Row, Space } from "antd";
import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import { Rate } from 'antd';
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addCpu, addKeyboard, addMonitor, addMotherboard, addMouse, addPsu, addRam, addSdCard } from "@/redux/features/PcBuildSlice";
import { useRouter } from "next/router";


const PcBuilderCategory = ({ products }) => {
  
  const {push} = useRouter();
  
  const dispatch = useDispatch();

    const addToBuilder = (product) => {
      console.log(product,'19');
      console.log(product?.category,'16');
        switch (product.category) {
            case "cpu":
                dispatch(addCpu(product));
                push("/pc-builder");
                break;
            case "motherboard":
                dispatch(addMotherboard(product));
                push("/pc-builder");
                break;
            case "ram":
                dispatch(addRam(product));
                push("/pc-builder");
                break;
            case "psu":
                dispatch(addPsu(product));
                push("/pc-builder");
                break;
            case "sd":
                dispatch(addSdCard(product));
                push("/pc-builder");
                break;
            case "monitor":
                dispatch(addMonitor(product));
                push("/pc-builder");
                break;
            case "keyboard":
                dispatch(addKeyboard(product));
                push("/pc-builder");
                break;
            case "mouse":
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
  
  <Card className="product-card" key={product._id}>
<Row gutter={16} align="middle">
  <Col lg={4} xs={24}>
    <Image
      src={product.image}
      alt={product.product_name}
      width={200}
      height={200}
    />
  </Col>
  <Col lg={14} xs={24}>
    <h2>{product.product_name}</h2>
    <h3>{product.category}</h3>
    <p>{product.status}</p>
    <Rate allowHalf disabled defaultValue={product.average_rating} />
  </Col>
  <Col lg={6} xs={24} className="price-btn">
    <h2>{product.price}</h2>
    <Button type="primary" onClick={()=> addToBuilder(product)}>Add To Builder</Button>
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
    `http://localhost:4000/products?category=${params.category}`
  );
  const data = await res.json();

  return {
    props: {
      products: data?.data,
    },
  };
};
