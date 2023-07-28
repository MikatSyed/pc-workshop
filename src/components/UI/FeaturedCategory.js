import React from 'react';
import { Card } from 'antd';
import Link from 'next/link';
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
<Card title="Featured Category">   
  {
    items.map((item)=> <Card.Grid key={item.key} style={gridStyle} onClick={()=> router.push(`/${item.value}`)}>{item.label}</Card.Grid> )
  }
</Card>
    </>
 )

};
export default App