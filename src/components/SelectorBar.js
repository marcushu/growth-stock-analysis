import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BigButton from './BigButton';
import { Link } from 'react-router-dom';
import thumbsUp from '../assets/icons8-thumbs-up-64.png';
import checklist from '../assets/icons8-pass-fail-64.png';
import calculator from '../assets/icons8-calculator-64.png';

class SelectorBar extends React.Component {
  constructor() {
    super();

    this.state = {
      disqualifySelected: true,
      questionaireSelected: false,
      FfitnessSelected: false
    }
  }

  updateButton = (caption) => {
    this.setState(
      {
        disqualifySelected: false,
        questionaireSelected: false,
        FfitnessSelected: false
      }, () => {
        switch (caption) {
          case "Fiscal Fitness":
            this.setState({ FfitnessSelected: true });
            break;
          case "Performance":
            this.setState({ questionaireSelected: true });
            break;
          default:
            this.setState({ disqualifySelected: true });
            break;
        }
      });

  }

  render() {
    return (
      <Row className="m-1 p-3 shadow" style={{ backgroundColor: "white" }}>
        <Col className="d-flex justify-content-around">
          <Link to="/disqualify">
            <BigButton
              caption="Quick Pre-qualify"
              image={thumbsUp}
              altTxt={"Quick Pre-qualify"}
              selectedState={this.state.disqualifySelected}
              selectedHandler={this.updateButton} />
          </Link>
          <Link to="/questionaire">
            <BigButton
              caption="Performance"
              image={checklist}
              altTxt={"Performance"}
              selectedState={this.state.questionaireSelected}
              selectedHandler={this.updateButton}
            />
          </Link>
          <Link to="/fiscalFitness">
            <BigButton
              caption="Fiscal Fitness"
              image={calculator}
              altTxt={"Fiscal Fitness"}
              selectedState={this.state.FfitnessSelected}
              selectedHandler={this.updateButton} />
          </Link>
        </Col>
      </Row>
    )
  }
}

export default SelectorBar