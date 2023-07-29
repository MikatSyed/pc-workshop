import { Card, Col, Row,Avatar, Rate } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import Link from "next/link";
import Image from "next/image";



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
        {products?.data?.map((product) => (
       <>
        <Col xs={20} sm={20} md={8} lg={6} xl={5} className="card" key={product._id}>
        <Card
    style={{
      width: 300,
    }}
    cover={
      <Image
        alt={product.productName}
        src={product.image}
        height={150}
        width={150}
      />
    }
    actions={[
        <span className="text">{product.category}</span>,
        <span className={product.status === 'In Stock'? 'green':'red'}>{product.status}</span>,
        <span className="text">${product.price}</span>,
     
    ]}
  >
    <Meta
      title={product.productName}
      description={ <Rate allowHalf disabled defaultValue={product.averageRating} />}
      
    />
    
  </Card>
      </Col>
     
       </>
        ))}
      </Row>
    </>
  );
};

export default AllNews;
