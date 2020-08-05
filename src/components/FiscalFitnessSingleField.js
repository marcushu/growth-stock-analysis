import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import PropTypes from 'prop-types';

class FiscalFitnessSingleField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      val: this.props.val
    }

    FiscalFitnessSingleField.protoTypes = {
      title: PropTypes.string,
      scoresId: PropTypes.string,
      val: PropTypes.number,
      updateField: PropTypes.func
    }
  }

  changeMe = (e) => {
    this.setState({ val: e.target.value }, 
      this.props.updateField({id: this.props.scoresId, val: e.target.value}));
  }

  render() {
    return (
      <Row>
        <Col></Col>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label  className="font-weight-light">{this.props.title}</Form.Label>
              <Form.Control
                type="text"
                value={this.state.val}
                onChange={(e) => this.changeMe(e)}
                style={{ width: "150px", marginRight: "20px", border: "0", backgroundColor: "#E3E3E3"}}
              />
            </Form.Group>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    )
  }
};

export default FiscalFitnessSingleField;