import React from 'react';
import { Card, Col, Row } from 'antd';
import { useRouter } from 'next/router';
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
const App = () => {
    const router = useRouter();
 return(
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          margin: "30px 0px",
        }}
      >
        Featured Category
      </h1>
      <Row justify="center">        
  {
    items.map((item)=> 
    <Col xs={20} sm={20} md={8} lg={6} xl={5}  className="card" key={item.key}>
    <Card key={item.key} style={{
      width: 300,
      fontWeight:'bold'
    }} onClick={()=> router.push(`/${item.value}`)}>{item.label}</Card> 
      </Col>
    )
  }

      

      </Row>

    </>
 )

};
export default App