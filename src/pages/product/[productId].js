// pages/ProductDetailsPage.js
import RootLayout from '@/components/Layout/RootLayout';
import { Row, Col, Typography, Rate, Descriptions } from 'antd';
import Image from 'next/image';

const { Title, Text } = Typography;


const ProductDetailsPage = ({data}) => {
  // const keyFeaturesData = Object.entries(data.keyFeatures).map(([key, value]) => ({
  //   key,
  //   value,
  // }));
  // console.log('14',keyFeaturesData);
 
  return (
   <>
     {data?.map((d)=> {
     return  <div style={{ padding: '20px' }} key={d._id}>
       <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Image src={d.image} alt={d.productName} width={400} height={400} />
        </Col>
        <Col xs={24} md={12}>
          <Title level={3}>{d.productName}</Title>
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
               <Text>{d.keyFeatures.brand}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Model: </Text>
               <Text>{d.keyFeatures.model}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Cpu Socket: </Text>
               <Text>{d.keyFeatures.cpuSocket}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Chipset: </Text>
               <Text>{d.keyFeatures.chipset}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Memory: </Text>
               <Text>{d.keyFeatures.memory}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Pcie Slots: </Text>
               <Text>{d.keyFeatures.pcieSlots}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Storage: </Text>
               <Text>{d.keyFeatures.storage}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Usb Ports: </Text>
               <Text>{d.keyFeatures.usbPorts}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>Networking: </Text>
               <Text>{d.keyFeatures.networking}</Text>
              </Descriptions.Item>

              <Descriptions.Item>
              <Text strong>RgbLighting: </Text>
               <Text>{d.keyFeatures.rgbLighting}</Text>
              </Descriptions.Item>
         
          </Descriptions>
          <br />
          <Text strong>Individual Rating: </Text>
          <Rate allowHalf defaultValue={d.individualRating} />
          <br />
          <Text strong>Average Rating: </Text>
          <Rate allowHalf disabled defaultValue={d.averageRating} />
          {/* <Text>({d.reviews} Reviews)</Text> */}
        </Col>
      </Row>    
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
  const res = await fetch("http://localhost:4000/products");
  const product = await res.json();
  console.log('83',product);
  const paths = product?.data?.map((product) => ({
    params: { productId: product._id }, // Assuming your product objects have a unique "_id"
  }));
  console.log("87", paths);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log("32", params);
  // Fetch products based on the dynamic category from the "productId" param
  const res = await fetch(
    `http://localhost:4000/product/details/${params.productId}`
  );
  const data = await res.json();
  console.log("36", data);
  return {
    props: {
      data: data?.data,
    },
  };
};