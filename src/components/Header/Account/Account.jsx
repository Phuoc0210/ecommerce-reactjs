import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

function Account({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);

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
                <Link to='/'>Log Out</Link>
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
