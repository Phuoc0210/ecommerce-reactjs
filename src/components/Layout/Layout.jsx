import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
function MainLayout({ children }) {
  return (
    <>
      <Header className='d-none' />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
