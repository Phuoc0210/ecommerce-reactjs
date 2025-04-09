import { ToastContainer } from 'react-toastify';

import AppRoutes from './routers/AppRoutes';

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer className='custom-toast' />
    </>
  );
}

export default App;
