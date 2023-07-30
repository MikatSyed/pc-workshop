import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';
import img1 from "../../assets/images/pc-1.jpg"
import img2 from "../../assets/images/pc-2.jpg"


const AppHeader = () => (
  <Carousel autoplay>
    <div>
    <Image style={{height: '500px',width:'100%'}}
          src={img1}
          alt="image 1"
          
        />
    </div>
    <div>
    <Image  style={{height: '500px',width:'100%'}}
          src={img2} 
          alt="image 2"
        />
    </div>
  
  </Carousel>
);
export default AppHeader;