import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

export default function FiscalFitnessRow(props) {
    let [lVal, setLval] = useState(props.lval);
    let [rVal, setRval] = useState(props.rval);

    return (
      <Row>
        <Col sm={4}><br />{props.title}</Col>
        <Col sm={4}>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label className="font-weight-light">{props.lLabel}</Form.Label>
              <Form.Control
                type="text"
                value={lVal}
                onChange={ e => {
                  setLval(e.target.value);
                  props.calcFunc({lval: e.target.value, rval: rVal, id: props.scoresId}); 
                }}
                style={{ width: "150px", marginRight: "20px", border: "0", backgroundColor: "#E3E3E3" }}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col sm={4}>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label className="font-weight-light">{props.rLabel}</Form.Label>
              <Form.Control
                type="text"
                value={rVal}
                onChange={(e) => {
                  setRval(e.target.value);
                  props.calcFunc({lval: lVal, rval: e.target.value, id: props.scoresId}); }}
                style={{ width: "150px", marginRight: "20px", border: "0", backgroundColor: "#E3E3E3" }}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    )
}

FiscalFitnessRow.propTypes = {
  scoresId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lLabel: PropTypes.string.isRequired,
  rLabel: PropTypes.string.isRequired,
  lval: PropTypes.number.isRequired,
  rval: PropTypes.number.isRequired,
  calcFunc: PropTypes.func.isRequired
}