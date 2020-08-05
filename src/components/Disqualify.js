import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DividedByForm from './DividedByForm';

const Disqualify = () => {
  return (
    <div className="shadow p-3" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
      <Row>
        <Col className="text-center">
          <h3>Quick Pre-qualify</h3>
          <hr style={{ border: "3px solid rgb(86, 141, 212)" }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h5><span className="font-weight-bolder">Market cap</span></h5>
          <br />
          <h5><span className="font-weight-bolder">Trading volume</span></h5>
          <br />
          <h5><span className="font-weight-bolder">Trailing twelve month cash flow</span></h5>
          <br />
          <h5><span className="font-weight-bolder">Sales</span> </h5>
        </Col>
        <Col>
          <h5>&gt; 50 million</h5> <br />
          <h5> &gt; 50,000 shares</h5> <br />
          <h5>positive</h5> <br />
          <h5>greater than 40 mi over last four quarters</h5> <br />
        </Col>
      </Row>
      <Row>
        <Col>
          <h5><DividedByForm /></h5>
        </Col>
      </Row>
    </div>
  )

}

export default Disqualify