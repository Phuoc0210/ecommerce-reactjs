import { Col, Container, Row } from 'react-bootstrap';
import styles from './styles.module.scss';
import { GrNext } from 'react-icons/gr';
import { FaPlay } from 'react-icons/fa';
function Banner() {
  const {
    container,
    content,
    action,
    description,
    primaryTitle,
    subTitle,
    paragraph,
    btn,
    btnView,
    btnExplore,
  } = styles;
  return (
    <div className={container}>
      <Container>
        <Row className={content}>
          <Col>
            <div className={primaryTitle}>One More Friend</div>
            <div className={subTitle}>Thousands More Fun</div>
            <p className={paragraph}>
              <span className={`d-none d-lg-block`}>
                Having a pet means you have more joy, a new friend, a happy
                person who will always be with you to have fun.
              </span>
              <span>We have 200+ different pets that can meet your needs!</span>
            </p>
            <div className={action}>
              <button className={`${btn} ${btnView}`}>
                View Intro <FaPlay />
              </button>
              <button className={`${btn} ${btnExplore}`}>
                Explore Now <GrNext />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
