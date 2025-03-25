import { Col, Container, Row } from 'react-bootstrap';
import Logo from '@img/logo.png';
import LogoMb from '@img/logomb.png';
import styles from './styles.module.scss';
import Search from './Search/Search';
import { IoMenu } from 'react-icons/io5';
import Cart from './Cart/Cart';
import { IoMdClose } from 'react-icons/io';
import Benefits from './Benefit/Benefits';
import Account from './Account/Account';
import { useEffect, useState } from 'react';
import HeaderNavbar from './NavBar/NavBar';

function Header() {
  const {
    img_logo,
    header,
    logo,
    benefit,
    cart,
    user,
    search,
    miniHeader,
    menu,
  } = styles;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <Container fluid='xl' className='d-none d-lg-block'>
        <Row className={header}>
          <Col lg='2' className={logo}>
            <img className={img_logo} src={Logo} alt='My Logo' />
          </Col>
          <Col
            className={`${search} d-none d-lg-flex`}
            style={{ flex: '1', display: 'flex', alignItems: 'center' }}
          >
            <Search />
          </Col>
          <Col lg='4' className={`${benefit} d-none d-xl-flex`}>
            <Benefits />
          </Col>
          <Col lg='1' className={user}>
            <Account isLoggedIn={true} />
          </Col>
          <Col lg='1' className={cart}>
            <Cart />
          </Col>
        </Row>
      </Container>
      <Container fluid='md' className={`d-block d-lg-none`}>
        <Row className={miniHeader}>
          <Col className={menu} xs='1'>
            {!isOpen ? (
              <IoMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(true);
                }}
              />
            ) : (
              <IoMdClose
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              />
            )}
          </Col>

          <Col className={logo}>
            <img className={img_logo} src={LogoMb} alt='My Logo' />
          </Col>
          <Col xs='1'>
            <Cart />
          </Col>
        </Row>
        <Row>
          <Search />
        </Row>
      </Container>

      <HeaderNavbar isOpen={isOpen} />
    </header>
  );
}

export default Header;
