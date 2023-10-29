import { Layout, Button, theme, MenuProps, Flex } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import { Navigate } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;
interface Props {
  collapsed: boolean | undefined;
  setCollapsed: any;
}

const HeadBar = ({ collapsed, setCollapsed }: Props) => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logout = () => {
    navigate("/login");
  };
  const items: MenuProps["items"] = [
    {
      label: <a onClick={logout}>Log Out</a>,
      key: "0",
    },
  ];

  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Flex justify="space-between">
        <div>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <span>Inventory Management</span>
        </div>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MoreOutlined />
            </Space>
          </a>
        </Dropdown>
      </Flex>
    </Header>
  );
};

export default HeadBar;
