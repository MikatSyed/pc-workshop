import React from 'react';
import { Card, Col, Row } from 'antd';
import { useRouter } from 'next/router';


const FeaturedCategory = ({categories}) => {
 const {push} = useRouter();
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
    categories?.categoryProductCount?.map((item,index)=> 
    <Col xs={20} sm={20} md={8} lg={6} xl={5}  className="card" >
    <Card key={index} style={{
      width: 300,
      fontWeight:'bold'
    }} onClick={()=> push(`/${item.category}`)}>
      <h3>{item?.category} ({item?.count})</h3>
      </Card> 
      </Col>
    )
  }

      </Row>

    </>
 )

};
export default FeaturedCategory

