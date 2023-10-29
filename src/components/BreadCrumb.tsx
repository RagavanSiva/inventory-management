import { Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  console.log("location", location);
  const crumbs = location.pathname.split("/").map((item) => ({
    title: <Link to={item}>{item}</Link>,
  }));
  return <Breadcrumb items={crumbs} />;
};

export default BreadCrumb;
