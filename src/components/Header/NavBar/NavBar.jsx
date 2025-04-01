import { Link } from 'react-router-dom';
import { dataMenu } from '../constants';
import styles from './styles.module.scss';

function HeaderNavbar({ isOpen, setIsOpen }) {
  const {
    navbar,
    navbar_item,
    navbar_link,
    navbar_menu,
    navbar_show,
    navbar_hide,
  } = styles;
  console.log(isOpen);

  return (
    <nav className={`${navbar} ${isOpen ? navbar_show : ''}`}>
      <ul className={navbar_menu}>
        {dataMenu.map((item, index) => (
          <li
            key={index}
            className={navbar_item}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <Link to={item.href} className={navbar_link}>
              {item.content}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNavbar;
