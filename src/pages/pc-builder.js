import React from 'react';
import { Button, Card, Col, Row } from 'antd';
import { useRouter } from 'next/router';
import RootLayout from '@/components/Layout/RootLayout';
import SelectedProduct from '@/components/UI/SelectedProduct';
import CompleteBuild from '@/components/UI/CompleteButton';



const PcBuilderPage = ({categories}) => {

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
    { 
  categories?.categoryProductCount?.map((item,index) => (
    <Row justify="center" gutter={[16, 16]}>
      
        <Col span={22}>
          <Card className="product-card"  key={index}>
            <Row justify="center">
              <Col span={24}>
             <h3>{item?.category} ({item?.count})</h3>
             <SelectedProduct category={item.category}/>
              </Col>
              <Col span={24} className="price-btn">
                <Button type="primary" onClick={()=> router.push(`/tool/${item.category}`)}>Select</Button>
              </Col>
            </Row>
          </Card>
        </Col>
    
    </Row>
    
      ))}
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
    console.log("32", params);
    // Fetch products based on the dynamic category from the "productId" param
    const res = await fetch(
      'http://localhost:4000/category'
    );
    const categories = await res.json();
   
    return {
      props: {categories},
    };
  };
  