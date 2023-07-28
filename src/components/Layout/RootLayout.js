
import { Layout } from "antd";
const { Content } = Layout;

import AppNavbar from "../UI/AppNavbar";
import AppFooter from "../UI/AppFooter";



const RootLayout = ({ children }) => {
  return (
    <Layout>
     <AppNavbar/>
      <Content
        style={{
        
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

    <AppFooter/>
    </Layout>
  );
};
export default RootLayout;
