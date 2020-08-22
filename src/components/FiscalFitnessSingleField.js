import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export default function FiscalFitnessSingleField(props) {
  let [val, setVal] = useState(props.val);

  return (
    <Row>
      <Col></Col>
      <Col>
        <Form>
          <Form.Group>
            <Form.Label className="font-weight-light">{props.title}</Form.Label>
            <Form.Control
              type="text"
              value={val}
              onChange={e => {
                setVal(e.target.value);
                props.updateField({ id: props.scoresId, val: e.target.value });
              }}
              style={{ width: "150px", marginRight: "20px", border: "0", backgroundColor: "#E3E3E3" }}
            />
          </Form.Group>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  )
};

FiscalFitnessSingleField.protoTypes = {
  title: PropTypes.string.isRequired,
  scoresId: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired,
  updateField: PropTypes.func.isRequired
}