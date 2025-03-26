import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import Logo from '@img/logo.png';
import { policies, securities } from './footerConstants';
import SocialMedia from '../Header/SocialMedia/SocialMedia';
function Footer() {
  const {
    wrapperFooter,
    infoFooter,
    intro,
    social,
    policy,
    logo,
    img_logo,
    policyMenu,
    policyItem,
    policyTitle,
    securityItem,
    securityMenu,
    subscribeContainer,
    wrapperYoutube,
  } = styles;
  const videoLink = 'https://www.youtube.com/embed/cQA4ezThqN4';
  return (
    <footer className={wrapperFooter}>
      <Container fluid='xl' className={infoFooter}>
        <Row>
          <Col lg='4' md='5' className={intro}>
            <div className={`${logo} d-none d-md-block`}>
              <img className={img_logo} src={Logo} alt='My Logo' />
            </div>
            <div className='d-none d-md-block'>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </div>
            <div>
              <span>
                <strong>Email:</strong>
              </span>
              <span>abc@petshop.com.vn </span>
            </div>
            <div>
              <strong>Phone number: </strong>
              <span>0987654321 </span>
            </div>
            <div>
              <strong>Address: </strong>
              <span>123 Main Street, Los Angeles, CA 90012, USA </span>
            </div>
          </Col>
          <Col lg='4' md='7' className={policy}>
            <Row>
              <Col>
                <div className={policyTitle}>Policy</div>
                <ul className={policyMenu}>
                  {policies.map((policy, index) => {
                    return (
                      <li key={index} className={policyItem}>
                        <a href={policy.href}>{policy.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </Col>
              <Col>
                <div className={policyTitle}>Security</div>
                <ul className={securityMenu}>
                  {securities.map((security, index) => {
                    return (
                      <li key={index} className={securityItem}>
                        <a href={security.href}>{security.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg='4' className={social}>
            <div className={policyTitle}>Subscribe for notifications</div>
            <div className={subscribeContainer}>
              <input type='text' placeholder='Email của bạn' />
              <button>Subscribe</button>
            </div>
            <div className={wrapperYoutube}>
              <iframe
                src={videoLink}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                referrerPolicy='no-referrer'
              ></iframe>
            </div>
            <SocialMedia />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
