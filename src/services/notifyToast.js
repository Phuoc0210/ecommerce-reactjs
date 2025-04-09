import { toast } from 'react-toastify';

const notify = (type, message, position = 'top-right') => {
  const toastOptions = {
    position: position,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  };

  switch (type) {
    case 'info':
      toast.info(message, toastOptions);
      break;
    case 'success':
      toast.success(message, toastOptions);
      break;
    case 'error':
      toast.error(message, toastOptions);
      break;
    case 'warning':
      toast.warning(message, toastOptions);
      break;
    default:
      toast.error('Something went wrong', toastOptions);
  }
};

export default notify;
