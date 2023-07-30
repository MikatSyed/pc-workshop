import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import { useRouter } from 'next/router';
import RootLayout from '@/components/Layout/RootLayout';
import SelectedProduct from '@/components/UI/SelectedProduct';
import CompleteBuild from '@/components/UI/CompleteButton';
import cpuImage from '../assets/images/cpu.png';
import ramImage from '../assets/images/images.jpg';
import psuImage from '../assets/images/psuImage.jpg';
import monitorImage from '../assets/images/monitorImage.png';
import sdImage from '../assets/images/sdImage.png';
import keyboardImage from '../assets/images/keyboardImage.png';
import motherboardImage from '../assets/images/motherboardImage.png';
import mouseImage from '../assets/images/mouseImage.png';
import Image from 'next/image';


const PcBuilderPage = ({categories}) => {

    const router = useRouter();
    const getProductsInfo = (category) => {
      if (category.toLowerCase() === 'cpu') {
        return {
          image: cpuImage,
          label: category,
        };
      } else if (category.toLowerCase() === 'ram') {
        return {
          image: ramImage,
          label: category,
        };
      } else if (category.toLowerCase() === 'psu') {
        return {
          image: psuImage, // You can set a different image for PSU if needed
          label: 'Power Supply Unit',
        };
      } else if (category.toLowerCase() === 'monitor') {
        return {
          image: monitorImage, // You can set a different image for PSU if needed
          label: category,
        };
      } else if (category.toLowerCase() === 'sd') {
        return {
          image: sdImage, // You can set a different image for PSU if needed
          label: 'Storage Device',
        };
      } else if (category.toLowerCase() === 'keyboard') {
        return {
          image: keyboardImage, // You can set a different image for PSU if needed
          label: category,
        };
      } else if (category.toLowerCase() === 'motherboard') {
        return {
          image: motherboardImage, // You can set a different image for PSU if needed
          label: category,
        };
      } else if (category.toLowerCase() === 'mouse') {
        return {
          image: mouseImage, // You can set a different image for PSU if needed
          label: category,
        };
      }
      // For other categories, return the category name as both image and label
      return {
        image: ramImage, // You can set a different default image if needed
        label: category,
      };
    };
 return(
    <div style={{ marginTop: '30px' }} >
    <h1
      style={{
        textAlign: "center",
        fontSize: "30px",
        margin: "30px 0px",
      }}
    >
      PC Builder - Build Your Own Computer - PC Workshop
    </h1>

       
      {categories?.categoryProductCount?.map((item, index) => {
        const { image, label } = getProductsInfo(item?.category);
        return (
          <Row justify="center" gutter={[16, 16]} key={index}>
            <Col span={22}>
              <Card className="product-card">
                <Row justify="center" align="middle">
                  <Col span={24}>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                      <Image src={image} alt="" width={48} height={48} />
                      <h3 style={{ marginLeft: '10px', color: 'blue', fontSize: '18px', fontWeight: 'bold' }}>{label} ({item?.count})</h3>
                    </div>
                    <SelectedProduct category={item.category} />
                  </Col>
                  <Col span={24} className="price-btn">
                    <Button type="primary" onClick={() => router.push(`/tool/${item.category}`)}>
                      Select
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        );
      })}
    
     <CompleteBuild/>
  </div>
 )

};
export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };

export const getServerSideProps = async (context) => {
    const { params } = context;
  
    // Fetch products based on the dynamic category from the "productId" param
    const res = await fetch(
      'http://localhost:4000/category'
    );
    const categories = await res.json();
   
    return {
      props: {categories},
    };
  };
  