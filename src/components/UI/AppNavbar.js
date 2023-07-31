import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Row, Col } from "antd";
import {
  HomeOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
const { Header } = Layout;
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const AppNavbar = () => {
 
  const { data: session } = useSession();
 
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const navItems = [
    {
      key: "1",
      label: (
        <Link
         
          rel="noopener noreferrer"
          href="/Cpu"
        >
          CPU / Processor
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          
          rel="noopener noreferrer"
          href="/Motherboard"
        >
          Motherboard
        </Link>
      ),
    },

    {
      key: "3",
      label: (
        <Link
         
          rel="noopener noreferrer"
          href="/Ram"
        >
          Ram
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link
         
          rel="noopener noreferrer"
          href="/Psu"
        >
          Power Supply Unit
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link
         
          rel="noopener noreferrer"
          href="/Sd"
        >
          Storage Device
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link
         
          rel="noopener noreferrer"
          href="/Monitor"
        >
          Monitor
        </Link>
      ),
    },

    {
      key: "7",
      label: (
        <Link
         
          rel="noopener noreferrer"
          href="/Mouse"
        >
          Mouse
        </Link>
      ),
    },
    {
      key: "8",
      label: (
        <Link
        
          rel="noopener noreferrer"
          href="/Keyboard"
        >
          Keyboard
        </Link>
      ),
    },
  ];

  const items = [
    getItem(<Link href="/">Home</Link>,null, <MailOutlined />),
    getItem('Components', 'sub2', <AppstoreOutlined />, [
      getItem(<Link href="/Cpu">Cpu</Link>),
      getItem(<Link href="/Motherboard">Motherboard</Link>),
      getItem(<Link href="/Ram">Ram</Link>),
      getItem(<Link href="/Psu">Power Supply Unit</Link>),
      getItem(<Link href="/Sd">Storage Device</Link>),
      getItem(<Link href="/Monitor">Monitor</Link>),
      getItem(<Link href="/Keyboard">Keyboard</Link>),
      getItem(<Link href="/Mouse">Mouse</Link>),
     
    ]),

  ];
  

  return (
    <Layout className="layout">
      <Header style={{ padding: 0 }}>
        <Row justify="space-between" align="middle">
          <Col xs={20} sm={20} md={6}>
            <div
              className="logo"
              style={{
                color: "white",
                paddingLeft: "20px",
                fontSize: "1.3rem",
              }}
            >
              PC Workshop
            </div>
          </Col>

          <Col xs={0} sm={0} md={9}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Link href="/">
                <Menu.Item key="1" icon={<HomeOutlined />}>
                  Home
                </Menu.Item>
              </Link>
              <Menu.Item key="2" icon={<AppstoreOutlined />}>
              <Dropdown overlay={
                  <Menu>
                    {navItems.map(item => (
                      <Menu.Item key={item.key}>{item.label}</Menu.Item>
                    ))}
                  </Menu>
                }>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Components
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </Menu.Item>
              <Menu.Item key="3" >
              <Link href="/pc-builder">
                  <Button type="primary" >PC Builder</Button>
                </Link>
                </Menu.Item>
                <Menu.Item key="4">
                {session?.user?.email ? (
                  <>
                    <Button
                      type="primary"  danger 
                      style={{ marginRight: "10px" }}
                      onClick={() => signOut()}
                    >
                      Sign out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login">
                      <Button style={{ marginRight: "10px" }}>Sign in</Button>
                    </Link>
                  </>
                )}
              </Menu.Item>
            </Menu>
          </Col>

        

          <Col xs={4} sm={4} md={0}>
            <Button type="primary" onClick={showDrawer} >
              <MenuOutlined />
            </Button>
          </Col>

        </Row>
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
            <Menu
     
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
      onClick={onClose}
    >
      </Menu>
      <Row  gutter={[8, 8]} style={{marginLeft:'20px'}}>
            <Col>
             <Link href="/pc-builder">
             <Button  type="primary" ghost   onClick={onClose}>
               Add To Builder
              </Button>
             </Link>
            </Col>
            <Col>
            {session?.user?.email ? (
                <>
                  <Button
                  
                    onClick={() => signOut()}
                    type="primary" danger ghost
                  >
                    Sign out
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button  type="primary"  ghost>Sign in</Button>
                  </Link>
                </>
              )}
            </Col>
          </Row>
   
        </Drawer>
      </Header>
    </Layout>
  );
};

export default AppNavbar;

