import { Layout, Menu } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const { Sider } = Layout;

interface Props {
  collapsed: boolean | undefined;
}
const SideBar = ({ collapsed }: Props) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical">
        {/* <FaBars style={{color:"#fff"}} /> */}
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[window.location.pathname]}
        items={[
          {
            key: "/",
            icon: <UserOutlined />,
            label: <NavLink to="/">Inventory</NavLink>,
          },
          {
            key: "/report",
            icon: <VideoCameraOutlined />,
            label: <NavLink to="report">Report</NavLink>,
          },
        ]}
      />
    </Sider>
  );
};

export default SideBar;
