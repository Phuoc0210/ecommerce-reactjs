import { Route, Routes } from 'react-router-dom';
import { publicRoute, privateRoute } from './index';

function AppRoutes() {
  return (
    <Routes>
      {publicRoute.map((route, index) => {
        const Page = route.component;
        let Layout = route.layout;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
      {privateRoute.map((route, index) => {
        const Page = route.component;
        let Layout = route.layout;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default AppRoutes;
