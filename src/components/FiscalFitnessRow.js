import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class FiscalFitnessRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lVal: this.props.lval,
      rVal: this.props.rval
    }

    FiscalFitnessRow.propTypes = {
      scoresId: PropTypes.string,
      title: PropTypes.string,
      lLabel: PropTypes.string,
      rLabel: PropTypes.string,
      lval: PropTypes.number,
      rval: PropTypes.number,
      calcFunc: PropTypes.func
    }
  }

  changeMe = (e, val) => {
    this.setState({ [val]: e.target.value }, () => {
      this.props.calcFunc({
        lval: this.state.lVal,
        rval: this.state.rVal,
        id: this.props.scoresId
      });
    });
  }

  render() {
    return (
      <Row>
        <Col sm={4}><br />{this.props.title}</Col>
        <Col sm={4}>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label className="font-weight-light">{this.props.lLabel}</Form.Label>
              <Form.Control
                type="text"
                value={this.state.lVal}
                onChange={(e) => this.changeMe(e, "lVal")}
                style={{ width: "150px", marginRight: "20px", border: "0", backgroundColor: "#E3E3E3" }}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col sm={4}>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label className="font-weight-light">{this.props.rLabel}</Form.Label>
              <Form.Control
                type="text"
                value={this.state.rVal}
                onChange={(e) => this.changeMe(e, "rVal")}
                style={{ width: "150px", marginRight: "20px", border: "0", backgroundColor: "#E3E3E3" }}
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    )
  }
}

export default FiscalFitnessRow;