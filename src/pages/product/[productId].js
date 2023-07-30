
import ReviewCard from '@/components/Common/ReviewCard';
import RootLayout from '@/components/Layout/RootLayout';
import { Row, Col, Typography, Rate, Descriptions } from 'antd';
import Image from 'next/image';

const { Title, Text } = Typography;


const ProductDetailsPage = ({data}) => {
 
  
 
  return (
   <>
     { data?.map((d)=> {
     return  <div style={{ padding: '20px' }} key={d._id}>
       <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Image src={d.image} alt={d.product_name} width={400} height={400} />
        </Col>
        <Col xs={24} md={12}>
        <Title level={3}>{d.product_name}</Title>
        <br/>

        <Text strong>Individual Rating: </Text>
          <Rate allowHalf defaultValue={d.individual_rating} />
          <br />
          <Text strong>Average Rating: </Text>
          <Rate allowHalf disabled defaultValue={d.average_rating} />
          <br/>
         
          <Text strong>Category: </Text>
          <Text>{d.category}</Text>
          <br />
          <Text strong>Status: </Text>
          <Text>{d.status}</Text>
          <br />
          <Text strong>Price: </Text>
          <Text>${d.price}</Text>
          <br />
          <Text strong>Description: </Text>
          <Text>{d.description}</Text>
          <br />
          <br />
          <Title level={4}>Key Features</Title>
          <Descriptions column={2} bordered>     
              <Descriptions.Item>
              <Text strong>Brand: </Text>
               <Text>{d.key_features.brand}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Model: </Text>
               <Text>{d.key_features.model}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Specification: </Text>
               <Text>{d.key_features.specification}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Type: </Text>
               <Text>{d.key_features.type}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Resolution: </Text>
               <Text>{d.key_features.resolution}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Voltage: </Text>
               <Text>{d.key_features.voltage}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Port: </Text>
               <Text>{d.key_features.port}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Capacity: </Text>
               <Text>{d.key_features.capacity}</Text>
              </Descriptions.Item>

             

            
         
          </Descriptions>
          <br />
         
          
        </Col>
      </Row> 
      <h1
      style={{
        textAlign: 'center',
        fontSize: '30px',
        margin: '30px 0px',
      }}
    >
      Reviews
    </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
     
      {d?.reviews?.map((review, index) => (
        <ReviewCard key={index} {...review}  />
      ))}
    </div>   
    </div>}
   )}
  

   </>
  );
};

export default ProductDetailsPage;

ProductDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  // Fetch all products (without any category filter)
  const res = await fetch("https://pc-workshop-backend.vercel.app/products");
  const product = await res.json();
  
  const paths = product?.data?.map((product) => ({
    params: { productId: product._id }, // Assuming your product objects have a unique "_id"
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  // Fetch products based on the dynamic category from the "productId" param
  const res = await fetch(
    `https://pc-workshop-backend.vercel.app/product/details/${params.productId}`
  );
  const data = await res.json();
  
  return {
    props: {
      data: data?.data,
    },
  };
};