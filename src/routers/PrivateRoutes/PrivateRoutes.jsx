import { privateRoute } from '..';
import { Routes, Route } from 'react-router-dom';

function PrivateRoute() {
  return (
    <Routes>
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

export default PrivateRoute;
