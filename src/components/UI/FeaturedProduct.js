import { Row } from "antd";
import ProductCard from "../Common/ProductCard";

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
        {products?.data?.map((product) => ( <ProductCard  product={product} key={product._id}/>))}
      </Row>
    </>
  );
};

export default AllNews;
