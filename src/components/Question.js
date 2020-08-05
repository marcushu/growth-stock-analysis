import React from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


class Question extends React.Component {
  constructor(props) {
    super(props);

    let scoreSeed = this.props.selected === "false" ?
      this.props.falseValue :
      this.props.trueValue;

    this.state = {
      currentScore: scoreSeed,
    }

    Question.propTypes = {
      description: PropTypes.string,
      selected: PropTypes.string,
      trueValue: PropTypes.number,
      falseValue: PropTypes.number,
      changeHandler: PropTypes.func
    }
  }

  updateValue = e => {
    this.setState({ selected: e.target.value })

    if (e.target.value === 'true') {
      this.props.changeHandler({
        newVal: this.props.trueValue,
        oldVal: this.state.currentScore,
        description: this.props.description,
        selected: e.target.value
      });
      this.setState({ currentScore: this.props.trueValue });

    } else {
      this.props.changeHandler({
        newVal: this.props.falseValue,
        oldVal: this.state.currentScore,
        description: this.props.description,
        selected: e.target.value
      });
      this.setState({ currentScore: this.props.falseValue });

    }
  }

  render() {
    return (
      <>
        <Row>
          <Col xs={9}>
            {this.props.description}
          </Col>
          <Col>
            <Form >
              <span key={`inline-${'radio'}`} className="mb-3">
                <Form.Check
                  inline
                  type="radio"
                  label="Yes"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  onChange={this.updateValue}
                  value={"true"} // this can only be number || string
                  checked={this.props.selected === "true"}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="No"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  onChange={this.updateValue}
                  value={"false"}
                  checked={this.props.selected === "false"}
                />
              </span >
            </Form>
          </Col>
        </Row>
      </>
    )
  }

}

export default Question

