import React from 'react';
import Question from './Question.js';
import PropTypes from 'prop-types';


class Questionaire extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalScore: this.props.selectedValues.score[0].value,
      selectedValues: this.props.selectedValues
    }

    Questionaire.propTypes = {
      submitScore: PropTypes.func,
      selectedValues: PropTypes.object
    }
  }

  addScore = compoonentScore => {
    let result = this.state.totalScore - compoonentScore.oldVal + compoonentScore.newVal;

    this.setState({ totalScore: result });

    for (const prop in this.state.selectedValues) {
      this.state.selectedValues[prop].forEach(el => {
        if (el.description === compoonentScore.description)
          el.selected = compoonentScore.selected;
      });
    }

    this.props.selectedValues.score[0].value = result;

    this.props.submitScore(this.state.selectedValues);
  }

  render() {
    return (
      <div className="shadow p-3" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <h5>Analysts' Ratings & Forecasts</h5>
        <hr style={{ border: "3px solid rgb(86, 141, 212)" }} />
        {this.state.selectedValues.analysts.map((vals, index) => {
          return (
            <div key={index}>
              <Question
                description={vals.description}
                trueValue={vals.trueValue}
                falseValue={vals.falseValue}
                changeHandler={this.addScore}
                selected={vals.selected} />
              <br />
            </div>
          )
        })}

        <h5>Valuation</h5>
        <hr style={{ border: "3px solid rgb(86, 141, 212)" }} />
        {this.state.selectedValues.valuation.map((vals, index) => {
          return (
            <div key={index}>
              <Question
                description={vals.description}
                trueValue={vals.trueValue}
                falseValue={vals.falseValue}
                changeHandler={this.addScore}
                selected={vals.selected} />
              <br />
            </div>
          )
        })}

        <h5>Target Price</h5>
        <hr style={{ border: "3px solid rgb(86, 141, 212)" }} />
        {this.state.selectedValues.targetPrice.map((vals, index) => {
          return (
            <div key={index}>
              <Question
                description={vals.description}
                trueValue={vals.trueValue}
                falseValue={vals.falseValue}
                changeHandler={this.addScore}
                selected={vals.selected} />
              <br />
            </div>
          )
        })}


        <h5>Industry Analysis</h5>
        <hr style={{ border: "3px solid rgb(86, 141, 212)" }} />
        {this.state.selectedValues.industrAnysis.map((vals, index) => {
          return (
            <div key={index}>
              <Question
                description={vals.description}
                trueValue={vals.trueValue}
                falseValue={vals.falseValue}
                changeHandler={this.addScore}
                selected={vals.selected} />
              <br />
            </div>
          )
        })}

        <h5>Management Quality</h5>
        <hr style={{ border: "3px solid rgb(86, 141, 212)" }} />
        {this.state.selectedValues.management.map((vals, index) => {
          return (
            <div key={index}>
              <Question
                description={vals.description}
                trueValue={vals.trueValue}
                falseValue={vals.falseValue}
                changeHandler={this.addScore}
                selected={vals.selected} />
              <br />
            </div>
          )
        })}

        <h5>Profitability</h5>
        <hr style={{ border: "3px solid rgb(86, 141, 212)" }} />
        {this.state.selectedValues.profitability.map((vals, index) => {
          return (
            <div key={index}>
              <Question
                description={vals.description}
                trueValue={vals.trueValue}
                falseValue={vals.falseValue}
                changeHandler={this.addScore}
                selected={vals.selected} />
              <br />
            </div>
          )
        })}

        <h5>Ownership</h5>
        <hr style={{ border: "3px solid rgb(86, 141, 212)" }} />
        {this.state.selectedValues.ownership.map((vals, index) => {
          return (
            <div key={index}>
              <Question
                description={vals.description}
                trueValue={vals.trueValue}
                falseValue={vals.falseValue}
                changeHandler={this.addScore}
                selected={vals.selected} />
              <br />
            </div>
          )
        })}

        <h5>Price Chart</h5>
        <hr style={{ border: "3px solid rgb(86, 141, 212)" }} />
        {this.state.selectedValues.priceChart.map((vals, index) => {
          return (
            <div key={index}>
              <Question
                description={vals.description}
                trueValue={vals.trueValue}
                falseValue={vals.falseValue}
                changeHandler={this.addScore}
                selected={vals.selected} />
              <br />
            </div>
          )
        })}

        <h5>Business Plan</h5>
        <hr style={{ border: "3px solid rgb(86, 141, 212)" }} />
        {this.state.selectedValues.businessPlan.map((vals, index) => {
          return (
            <div key={index}>
              <Question
                description={vals.description}
                trueValue={vals.trueValue}
                falseValue={vals.falseValue}
                changeHandler={this.addScore}
                selected={vals.selected} />
              <br />
            </div>
          )
        })}
      </div>
    )
  }

}

export default Questionaire;