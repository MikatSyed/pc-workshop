
import { GoogleOutlined, GithubOutlined,FacebookOutlined } from "@ant-design/icons";
import Head from "next/head";
import { signIn } from "next-auth/react";
import React from "react";
import { Card, Button, Row, Col } from "antd";


const LoginPage = () => {
  const buttonStyle = {
    width: "100%",
    height: 50,
    marginBottom: 16,
  };

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div >  
        <div
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg")`, // Replace with the path to your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 20px", // Add padding to adjust content within the container
      }}
    >
      <Row justify="center" align="middle" style={{ width: "80%", minWidth: 300 }}>
        <Col xs={24} sm={16} md={12} lg={8}>
          <Card>
            <Button
              icon={<GoogleOutlined />}
              
              style={buttonStyle}
              onClick={() => signIn("google",{callbackUrl:"/"})}
            >
              Login with Google
            </Button>
            <Button
              icon={<GithubOutlined />}
              style={buttonStyle}
              onClick={() => signIn("github",{callbackUrl:"/"})}
            >
              Login with Github
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
      
       
      </div>
    </div>
  );
};

export default LoginPage;
