import { publicRoute } from '..';
import { Routes, Route } from 'react-router-dom';

function PublicRoutes() {
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
    </Routes>
  );
}

export default PublicRoutes;
