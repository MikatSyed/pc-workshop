import { Row } from "antd";
import ProductCard from "../Common/ProductCard";

const AllFeaturedProduct = ({ products }) => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          margin:"30px 0"
         
        }}
      >
        Featured Product
      </h1>
      <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
        <Row justify="start" style={{padding:'0 10px'}}>
          {products?.data?.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </Row>
      </div>
    </>
  );
};

export default AllFeaturedProduct;
