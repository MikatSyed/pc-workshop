import { Card, Col, Row,Avatar, Rate } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Link from "next/link";
import Image from "next/image";
import ProductCard from "../Common/ProductCard";



const { Meta } = Card;
const AllNews = ({ products }) => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          margin: "30px 0px",
        }}
      >
        Featured Product
      </h1>
      <Row justify="center">
        {products?.data?.map((product) => ( <ProductCard  product={product}/>))}
      </Row>
    </>
  );
};

export default AllNews;
