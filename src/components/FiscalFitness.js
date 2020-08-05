import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FiscalFitnessRow from './FiscalFitnessRow';
import FiscalFitnessSingleField from './FiscalFitnessSingleField';

class FiscalFitness extends React.Component {
  constructor(props) {
    super(props);

    this.extState = this.props.fState;

    this.values = this.extState.values;

    FiscalFitness.propTypes = {
      fState: PropTypes.object,
      submitScore: PropTypes.func
    }

  }

  divide = valuesObject => {
    this.extState.divide(valuesObject);

    this.props.submitScore(this.extState);
  }

  yearOverYear = valuesObject => {
    this.extState.yearOverYear(valuesObject);

    this.props.submitScore(this.extState);
  }

  percent = valuesObject => {
    this.extState.percent(valuesObject);

    this.props.submitScore(this.extState);
  }

  updateField = valuesObject => {
    this.extState.setval(valuesObject);
    
    this.props.submitScore(this.extState);
  }

  render() {
    return (
      <div className="shadow p-4 m-1" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <Row>
          <Col>

            <h5>Income Statement</h5>
            <hr style={{ border: "3px solid rgb(86, 141, 212)" }} />
            <FiscalFitnessRow
              scoresId="salesGrowth"
              title="Sales Growth"
              lLabel="TTM Sales"
              rLabel="Year ago TTM Sales"
              lval={this.values.salesGrowthL}
              rval={this.values.salesGrowthR}
              calcFunc={this.yearOverYear} />

            <FiscalFitnessRow
              scoresId="TTMgrossMargin"
              title="TTM Gross Margin"
              lLabel="TTM Gross Profit"
              rLabel="Sales"
              lval={this.values.TTMgrossMarginL}
              rval={this.values.TTMgrossMarginR}
              calcFunc={this.percent} />

            <FiscalFitnessRow
              scoresId="YAgrossMargin"
              title="Year ago Gross Margin"
              lLabel="Year ago gross profit"
              rLabel="Year ago Sales"
              lval={this.values.YAgrossMarginL}
              rval={this.values.YAgrossMarginR}
              calcFunc={this.percent} />

            <FiscalFitnessRow
              scoresId="NIgrowth"
              title="Net income growth"
              lLabel="TTM Net Income"
              rLabel="Year Ago NI"
              lval={this.values.NIgrowthL}
              rval={this.values.NIgrowthR}
              calcFunc={this.yearOverYear} />


            <FiscalFitnessSingleField
              title="TTM EBITA"
              scoresId="ttmEBITA"
              val={this.values.ttmEBITA}
              updateField={this.updateField} />

            <h5>Balance Sheet</h5>
            <hr style={{ border: "3px solid rgb(86, 141, 212)" }} />
            <FiscalFitnessRow
              scoresId="assetGrowth"
              title="Asset Growth"
              lLabel="Total Assets"
              rLabel="Year ago Total Assets"
              lval={this.values.assetGrowthL}
              rval={this.values.assetGrowthR}
              calcFunc={this.yearOverYear} />

            <FiscalFitnessRow
              scoresId="TLgrowth"
              title="Total Liabilities Growth"
              lLabel="Latest TL"
              rLabel="Year ago TL"
              lval={this.values.TLgrowthL}
              rval={this.values.TLgrowthR}
              calcFunc={this.yearOverYear} />

            <FiscalFitnessRow
              scoresId="currentRatio"
              title="Current Ratio"
              lLabel="Latest Current Assets"
              rLabel="Current Liabilities"
              lval={this.values.currentRatioL}
              rval={this.values.currentRatioR}
              calcFunc={this.divide} />

            <FiscalFitnessRow
              scoresId="YAcurrentRatio"
              title="Current Ration(Year Ago)"
              lLabel="YA Current Assets"
              rLabel="YA Current Liabilities"
              lval={this.values.YAcurrentRatioL}
              rval={this.values.YAcurrentRatioR}
              calcFunc={this.divide} />

            <FiscalFitnessRow
              scoresId="TLtoEBITDA"
              title="Total Liabilities to EBITDA"
              lLabel="Total Liabilities"
              rLabel="Year Ago"
              lval={this.values.TLtoEBITDAL}
              rval={this.values.TLtoEBITDAR}
              calcFunc={this.divide} />

            <FiscalFitnessSingleField
              title="TTM Operating Cash Flow"
              scoresId="TTMcf"
              val={this.values.TTMcf}
              updateField={this.updateField} />

            <FiscalFitnessSingleField
              title="Shares Out"
              scoresId="SharesOut"
              val={this.values.SharesOut}
              updateField={this.updateField} />

            <FiscalFitnessSingleField
              title="LY Shares Out"
              scoresId="LYsharesOut"
              val={this.values.LYsharesOut}
              updateField={this.updateField} />

          </Col>
        </Row>
      </div>
    )
  }
}

export default FiscalFitness;