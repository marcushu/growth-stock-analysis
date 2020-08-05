import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class DividedByForm extends React.Component {
  constructor() {
    super();

    this.state = {
      lVal: '0',
      rVal: '0',
      equals: 0
    }
  }

  changeMe = (e, val) => {
    this.setState({ [val]: e.target.value }, () => {
      let result = this.state.lVal / this.state.rVal;

      this.setState({ equals: result > 0 && result < Infinity ? result : 0 })
    });
  }

  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Label column>
            <span className="font-weight-bolder">price/sales</span> 3 - 9
          </Form.Label>
          <Col xl className="pb-1">
            <Form.Control
              value={this.state.lVal}
              onChange={(e) => this.changeMe(e, "lVal")}
              style={{ width: "140px", marginRight: "20px", border: "0", backgroundColor: "#E3E3E3" }} />
          </Col>
          <Col xl>
            <Form.Control
              value={this.state.rVal}
              onChange={(e) => this.changeMe(e, "rVal")}
              style={{ width: "140px", marginRight: "20px", border: "0", backgroundColor: "#E3E3E3" }} />
          </Col>
          <Form.Label column>
            <div style={{ color: "rgb(86, 141, 212)" }}>
              {this.state.equals.toFixed(1)}
            </div>            
          </Form.Label>
        </Form.Row>
      </Form>
    )
  }

}

export default DividedByForm


