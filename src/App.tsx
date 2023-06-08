import { useRoutes } from "react-router-dom";
import { Layout } from "antd";
import styles from "./App.module.css";
import routes from "./routes";
import Sidebar from "./components/sidebar";

const { Content } = Layout;

function App() {
  return (
    <Layout className={styles.container}>
      <Sidebar routes={routes.slice(0, -1)} />
      <Layout style={{ overflow: "hidden" }}>
        <Content className={styles.main}>
          <div className={styles.card}>{useRoutes(routes)}</div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
