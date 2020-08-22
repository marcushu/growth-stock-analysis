import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BigButton from './BigButton';
import { Link } from 'react-router-dom';
import thumbsUp from '../assets/icons8-thumbs-up-64.png';
import checklist from '../assets/icons8-pass-fail-64.png';
import calculator from '../assets/icons8-calculator-64.png';

export default function SelectorBar() {
  let [disqualifySelected, setDisqualifySelected] = useState(true);
  let [questionaireSelected, setQuestionaireSelected] = useState(false);
  let [FfitnessSelected, setFfitnessSelected] = useState(false);

    return (
      <Row className="m-1 p-3 shadow" style={{ backgroundColor: "white" }}>
        <Col className="d-flex justify-content-around">
          <Link to="/disqualify">
            <BigButton
              caption="Quick Pre-qualify"
              image={thumbsUp}
              altTxt={"Quick Pre-qualify"}
              selectedState={disqualifySelected}
              //selectedHandler={this.updateButton} />
              selectedHandler={() => { 
                setDisqualifySelected(disqualifySelected = true);
                setQuestionaireSelected(questionaireSelected = false);
                setFfitnessSelected(FfitnessSelected = false);
                }} />
          </Link>
          <Link to="/questionaire">
            <BigButton
              caption="Performance"
              image={checklist}
              altTxt={"Performance"}
              selectedState={questionaireSelected}
              selectedHandler={() => {
                setDisqualifySelected(disqualifySelected = false);
                setQuestionaireSelected(questionaireSelected = true);
                setFfitnessSelected(FfitnessSelected = false);
              }}
            />
          </Link>
          <Link to="/fiscalFitness">
            <BigButton
              caption="Fiscal Fitness"
              image={calculator}
              altTxt={"Fiscal Fitness"}
              selectedState={FfitnessSelected}
              selectedHandler={() => {
                setDisqualifySelected(disqualifySelected = false);
                setQuestionaireSelected(questionaireSelected = false);
                setFfitnessSelected(FfitnessSelected = true);
              }} />
          </Link>
        </Col>
      </Row>
    )
}