import PrivateRoute from './PrivateRoutes/PrivateRoutes';
import PublicRoutes from './PublicRoutes/PublicRoutes';

function AppRoutes() {
  return (
    <div className='App'>
      <PublicRoutes />
      <PrivateRoute />
    </div>
  );
}

export default AppRoutes;
