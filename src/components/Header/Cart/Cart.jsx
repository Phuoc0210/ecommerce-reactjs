import { useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import styles from './styles.module.scss';

function Cart() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className={styles.cart} onClick={() => setCartCount(cartCount + 1)}>
      <IoCartOutline className={styles.cartIcon} />
      <span className={styles.cartText}>Cart</span>
      {cartCount > 0 && <span className={styles.cartCount}>{cartCount}</span>}
    </div>
  );
}

export default Cart;
