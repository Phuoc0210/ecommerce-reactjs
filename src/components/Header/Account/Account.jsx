import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import styles from './styles.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import authApi from '@/services/authAPI';
import notify from '@/services/notifyToast';
function Account({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await authApi.logout();
      if (response.data.success) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        notify('success', response.data.message, 'bottom-right');
        navigate('/login');
      } else {
        notify('error', response.data.message, 'bottom-right');
      }
    } catch (error) {
      notify('error', error.message, 'bottom-right');
    }
  };
  return (
    <div
      className={styles.account}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={styles.accountIcon}>
        <AiOutlineUser />
        <span>Account</span>
      </div>

      {isOpen && (
        <ul className={styles.dropdown}>
          {isLoggedIn ? (
            <>
              <li>
                <Link to='#'>Account</Link>
              </li>
              <li>
                <Link to='#' onClick={handleLogout}>
                  Log Out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to='/login'>Sign in</Link>
              </li>
              <li>
                <Link to='/register'>Sign up</Link>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
}

export default Account;
