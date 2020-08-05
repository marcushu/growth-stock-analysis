import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftPanel from './components/LeftPanel';
import Questionaire from './components/Questionaire';
import FiscalFitness from './components/FiscalFitness';
import Disqualify from './components/Disqualify';
import Scoreboard from './components/Scoreboard';
import SelectorBar from './components/SelectorBar';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import growthState from './appState/growthState.js';
import FFstate from './appState/FiscalFitnessState';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      growthQuestionState: growthState,
      FiscalfitnessState: new FFstate()
    }
  }

  updateGrowthState = (qrowthState) => {
    this.setState({ growthQuestionState: qrowthState });
  }

  updateFFitnessScore = (FFstate) => {
    this.setState({ FiscalfitnessState: FFstate });
  }

  render() {
    return (
      <Container fluid className="App">
        <Row className="pt-4">
          <Col style={{ backgroundColor: "rgb(86, 141, 212)", color: "aliceblue" }}>
            <h2>Growth Analysis</h2> the process
          </Col>
        </Row>
        <Row className="py-4" style={{ backgroundColor: "#FAFAFA" }}>
          <Col lg={3}>
            <br />
            <LeftPanel />
          </Col>
          <Col lg={7}>
            <Router>
              <SelectorBar />
              <br />
              <Switch>
                <Route path="/disqualify">
                  <Disqualify />
                </Route>
                <Route path="/questionaire">
                  <Questionaire
                    submitScore={this.updateGrowthState}
                    selectedValues={this.state.growthQuestionState} />
                </Route>
                <Route path="/fiscalFitness">
                  <FiscalFitness
                    submitScore={this.updateFFitnessScore}
                    fState={this.state.FiscalfitnessState} />
                </Route>
                <Route path="/">
                  <Redirect from="/" to="/disqualify" />
                </Route>
              </Switch>
            </Router>
          </Col>
          <Col lg={2}>
            <br />
            <div >
              <Scoreboard
                score={this.state.growthQuestionState.score[0].value + this.state.FiscalfitnessState.values.score} />
            </div>

          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;
