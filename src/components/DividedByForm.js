import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


export default function DividedByForm() {
  const [lVal, setLval] = useState('0');
  const [rVal, setRval] = useState('0');
  const [equals, setEquals] = useState(0);
  
  const safeDiv = (l, r) => l/r > 0 && l/r < Infinity ? l/r : 0 
 
    return (
      <Form>
        <Form.Row>
          <Form.Label column>
            <span className="font-weight-bolder">price/sales</span> 3 - 9
          </Form.Label>
          <Col xl className="pb-1">
            <Form.Control
              value={lVal}
              onChange={ e => {
                setLval(e.target.value);
                setEquals(safeDiv(e.target.value, rVal));
              }}
              style={{ width: "140px", marginRight: "20px", border: "0", backgroundColor: "#E3E3E3" }} />
          </Col>
          <Col xl>
            <Form.Control
              value={rVal}
              onChange={ e => {
                setRval(e.target.value);
                setEquals(safeDiv(lVal, e.target.value));
              }}
              style={{ width: "140px", marginRight: "20px", border: "0", backgroundColor: "#E3E3E3" }} />
          </Col>
          <Form.Label column>
            <div style={{ color: "rgb(86, 141, 212)" }}>
              {equals.toFixed(1)} 
            </div>            
          </Form.Label>
        </Form.Row>
      </Form>
    )
}
