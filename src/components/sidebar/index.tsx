import { useLocation, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import type { EnhancedRouteObject } from "../../routes";

const { Sider } = Layout;

interface Props {
  routes: EnhancedRouteObject[];
}

export default function Sidebar(props: Props) {
  const { routes } = props;
  const { pathname } = useLocation();

  const selectedKeys = routes
    .filter((route) => pathname.startsWith(route.path!))
    .map((item) => item.path!);

  return (
    <Sider theme="dark">
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={selectedKeys}
        items={routes.map((item) => ({
          key: item.path!,
          label: <Link to={item.path!}>{item.label!}</Link>,
        }))}
      />
    </Sider>
  );
}
