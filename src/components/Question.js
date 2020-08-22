import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


export default function Question(props) {
  let scoreSeed = props.selected === "false" ?
    props.falseValue :
    props.trueValue;

  let [currentScore, setCurrentScore] = useState(scoreSeed);

  let updateValue = e => {
    if (e.target.value === 'true') {
      props.changeHandler({
        newVal: props.trueValue,
        oldVal: currentScore,
        description: props.description,
        selected: e.target.value
      });
      setCurrentScore(currentScore = props.trueValue);

    } else {
      props.changeHandler({
        newVal: props.falseValue,
        oldVal: currentScore,
        description: props.description,
        selected: e.target.value
      });
      setCurrentScore(currentScore = props.falseValue);
    }
  }

  return (
    <>
      <Row>
        <Col xs={9}>
          {props.description}
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
                onChange={updateValue}
                value={"true"} // this can only be number || string
                checked={props.selected === "true"}
              />
              <Form.Check
                inline
                type="radio"
                label="No"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
                onChange={updateValue}
                value={"false"}
                checked={props.selected === "false"}
              />
            </span >
          </Form>
        </Col>
      </Row>
    </>
  )
}

Question.propTypes = {
  description: PropTypes.string,
  selected: PropTypes.string,
  trueValue: PropTypes.number,
  falseValue: PropTypes.number,
  changeHandler: PropTypes.func
}

