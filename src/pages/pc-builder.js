import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import { useRouter } from 'next/router';
import RootLayout from '@/components/Layout/RootLayout';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
const items = [
    {
      key: '1',
      label: "CPU",
      value: "cpu"
    },
    {
      key: '2',
      label: "Motherboard",
      value: "motherboard"
    ,      
    },

    {
      key: '3',
      label:"RAM",
      value:"ram"     
    },
    {
      key: '4',
      label:"Power Supply Unit",
      value:"power-supply-unit"     
    },
    {
      key: '5',
      label:"Storage Device",
      value:"storage-device"     
    },
    {
      key: '6',
      label:"Monitor",
      value:"monitor"     
    },
    {
      key: '7',
      label:"Keyboard",
      value:"keyboard"     
    },
    {
      key: '8',
      label:"Mouse",
      value:"mouse"     
    }
  
   
  ];
const PcBuilderPage = () => {
    const router = useRouter();
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

    <Row justify="center" gutter={[16, 16]}>
      {items.map((item) => (
        <Col key={item.key} span={22}>
          <Card className="product-card">
            <Row justify="center">
              <Col span={24}>
                {item.label}
              </Col>
              <Col span={24} className="price-btn">
                <Button type="primary" onClick={()=> router.push(`/tool/${item.value}`)}>Select</Button>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
 )

};
export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };