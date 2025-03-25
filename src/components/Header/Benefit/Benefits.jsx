import { Col, Row } from 'react-bootstrap';
import { benefits } from '../constants';
import styles from './styles.module.scss';

function Benefits() {
  const { smallTitle, bigTitle, wrapperBenefits, innerBenefit } = styles;
  return (
    <Row className={wrapperBenefits}>
      {benefits.map((benefit, index) => {
        return (
          <Col xs='4' key={index} className={innerBenefit}>
            <div className={bigTitle}>{benefit.bigTitle}</div>
            <div className={smallTitle}>
              <span>{benefit.smallTitle.line1}</span>
              <span>{benefit.smallTitle.line2}</span>
              <span>{benefit.smallTitle.line3}</span>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Benefits;
