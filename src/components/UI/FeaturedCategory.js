import React from 'react';
import { Card, Col, Row } from 'antd';
import { useRouter } from 'next/router';
import cpuImage from '../../assets/images/cpu.png';
import ramImage from '../../assets/images/images.jpg';
import psuImage from '../../assets/images/psuImage.jpg';
import monitorImage from '../../assets/images/monitorImage.png';
import sdImage from '../../assets/images/sdImage.png';
import keyboardImage from '../../assets/images/keyboardImage.png';
import motherboardImage from '../../assets/images/motherboardImage.png';
import mouseImage from '../../assets/images/mouseImage.png';
import Image from 'next/image';

const FeaturedCategory = ({ categories }) => {
  const { push } = useRouter();

  
  const getCategoryInfo = (category) => {
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

  return (
    <>
    <h1
      style={{
        textAlign: 'center',
        fontSize: '30px',
        margin: '30px 0px',
      }}
    >
      Featured Category
    </h1>
    <Row justify="center">
      {categories?.categoryProductCount?.map((item, index) => {
        const { image, label } = getCategoryInfo(item?.category);
        return (
          <Col xs={20} sm={20} md={8} lg={6} xl={5} className="card" key={index}>
            <Card
              style={{
                width: 300,
                fontWeight: 'bold',
              }}
              onClick={() => push(`/${item.category}`)}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Image src={image} alt="" width={48} height={48} />
                <div style={{ textAlign: 'center' }}>
                  {label} <span>({item?.count})</span>
                </div>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  </>
  );
};

export default FeaturedCategory;
