import React from 'react';
import { Carousel, Col, Typography } from 'antd';
import Image from 'next/image';
import img1 from '../../assets/images/pc-1.jpg';
import img2 from '../../assets/images/pc-2.jpg';

const { Title, Paragraph } = Typography;

const AppHeader = () => {
  const sliderData = [
    {
      image: img1,
      title: 'Build Your Dream PC',
      description: 'Create a powerful and custom-built PC to suit your needs.',
    },
    {
      image: img2,
      title: 'Upgrade Your Rig',
      description: 'Upgrade your current PC with the latest hardware and accessories.',
    },
    // Add more slider data here
  ];

  return (
    <Carousel autoplay>
      {sliderData.map((item, index) => (
        <div key={index} style={{ position: 'relative' }}>
          <Col xs={24} sm={24} md={24}>
            <div className='carousel'>
              <Image src={item.image} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                color: 'white',
              }}
            >
              <Title level={2} style={{ color: 'white', fontWeight: 'bold' }}>
                {item.title}
              </Title>
              <Paragraph style={{ color: 'white', fontSize: '16px' }}>
                {item.description}
              </Paragraph>
            </div>
          </Col>
        </div>
      ))}
    </Carousel>
  );
};

export default AppHeader;
