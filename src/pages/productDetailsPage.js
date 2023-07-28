// pages/ProductDetailsPage.js
import { Row, Col, Typography, Rate, Descriptions } from 'antd';
import Image from 'next/image';

const { Title, Text } = Typography;

const product = {
  productName: 'Example Product',
  category: 'Electronics',
  status: 'In Stock',
  price: 99.99,
  description: 'This is an example product description.',
  keyFeatures: {
    Brand: 'Example Brand',
    Model: 'Example Model',
    Specification: 'Example Specification',
    Port: 'Example Port',
    Type: 'Example Type',
    Resolution: 'Example Resolution',
    Voltage: 'Example Voltage',
  },
  individualRating: 4.5,
  averageRating: 4.2,
  reviews: 50,
  image: 'https://www.startech.com.bd/image/cache/catalog/processor/amd/Athlon/athlon-228x228.jpg',
};

const ProductDetailsPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Image src={product.image} alt={product.productName} width={400} height={400} />
        </Col>
        <Col xs={24} md={12}>
          <Title level={3}>{product.productName}</Title>
          <Text strong>Category: </Text>
          <Text>{product.category}</Text>
          <br />
          <Text strong>Status: </Text>
          <Text>{product.status}</Text>
          <br />
          <Text strong>Price: </Text>
          <Text>${product.price}</Text>
          <br />
          <Text strong>Description: </Text>
          <Text>{product.description}</Text>
          <br />
          <br />
          <Title level={4}>Key Features</Title>
          <Descriptions column={1} bordered>
            {Object.entries(product.keyFeatures).map(([key, value]) => (
              <Descriptions.Item key={key} label={key}>
                {value}
              </Descriptions.Item>
            ))}
          </Descriptions>
          <br />
          <Text strong>Individual Rating: </Text>
          <Rate allowHalf defaultValue={product.individualRating} />
          <br />
          <Text strong>Average Rating: </Text>
          <Rate allowHalf disabled defaultValue={product.averageRating} />
          <Text>({product.reviews} Reviews)</Text>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailsPage;
