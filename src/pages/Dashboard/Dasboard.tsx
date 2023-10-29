import SideBar from "./SideBar";

import { useState } from "react";
import { Layout } from "antd";

import HeadBar from "./HeadBar";
import Container from "./Container";
import BreadCrumb from "../../components/BreadCrumb";

const Dasboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="content">
      <SideBar collapsed={collapsed} />
      <Layout>
        <HeadBar collapsed={collapsed} setCollapsed={setCollapsed} />
        {/* <BreadCrumb /> */}
        <Container />
      </Layout>
    </Layout>
  );
};

export default Dasboard;
