import { useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import styles from './styles.module.scss';

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
                <a href='#'>Account</a>
              </li>
              <li>
                <a href='#'>Log Out</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href='#'>Sign in</a>
              </li>
              <li>
                <a href='#'>Sign up</a>
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
}

export default Account;
