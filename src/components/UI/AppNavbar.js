import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Row, Col } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import Link from "next/link";

const { Header } = Layout;

const AppNavbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const items = [
    {
      key: '1',
      label: (
        <Link target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
         CPU / Processor
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
         Motherboard
        </Link>
      ),      
    },

    {
      key: '3',
      label: (
        <Link target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          RAM
        </Link>
      ),
      
    },
    {
      key: '4',
      label: (
        <Link target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Power Supply Unit
        </Link>
      ),
      
    },
    {
      key: '5',
      label: (
        <Link target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          Storage Device
        </Link>
      ),
      
    },
    {
      key: '6',
      label: (
        <Link target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
         Monitor
        </Link>
      ),
      
    },
 
    {
      key: '7',
      label: (
        <Link target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
         Mouse
        </Link>
      ),
      
    },
    {
      key: '8',
      label: (
        <Link target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
         Keyboard
        </Link>
      ),
      
    },
   
  ];

  return (
    <Layout className="layout">
      <Header style={{ padding: 0 }}>
        <Row justify="space-between" align="middle">
          <Col xs={20} sm={20} md={4}>
            <div
              className="logo"
              style={{ color: "white", paddingLeft: "20px",fontSize:'1.3rem' }}
            >
             PC Workshop
            </div>
          </Col>

          <Col xs={0} sm={0} md={8} >
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
             <Link href="/">
             <Menu.Item key="1" icon={<HomeOutlined />}>
                Home
              </Menu.Item>
             </Link>
              <Menu.Item key="2" icon={<UserOutlined />}>
              <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
              </Menu.Item>
              <Menu.Item key="3" icon={<SettingOutlined />}>
               Feedback
              </Menu.Item>
             
            </Menu>
          </Col>

          <Col xs={0} sm={0} md={4}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="4">
                <Button  style={{ marginRight: "10px" }}>
                  Sign in
                </Button>
                <Button  type="primary">PC Builder</Button>
              </Menu.Item>
            </Menu>
          </Col>

          <Col xs={2} sm={2} md={0}>
            <Button type="primary" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
          </Col>
        </Row>
        <Drawer
          title="Menu"
          placement="right"
          onClick={onClose}
          onClose={onClose}
          visible={visible}
        >
          <Menu mode="vertical" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              Profile
            </Menu.Item>
            <Menu.Item key="3" icon={<SettingOutlined />}>
              Settings
            </Menu.Item>
            <Menu.Item key="4">
              <Button type="primary" style={{ marginRight: "10px" }}>
                Sign in
              </Button>
              <Button>Sign up</Button>
            </Menu.Item>
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default AppNavbar;