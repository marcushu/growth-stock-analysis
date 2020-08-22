import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FiscalFitnessRow from './FiscalFitnessRow';
import FiscalFitnessSingleField from './FiscalFitnessSingleField';


export default function FiscalFitness(props) {
  let extState = props.fState;
  let values = extState.values;

  const divide = valuesObject => {
    extState.divide(valuesObject);

    props.submitScore(extState);
  }

  const yearOverYear = valuesObject => {
    extState.yearOverYear(valuesObject);

    props.submitScore(extState);
  }

  const percent = valuesObject => {
    extState.percent(valuesObject);

    props.submitScore(extState);
  }

  const updateField = valuesObject => {
    extState.setval(valuesObject);

    props.submitScore(extState);
  }


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
            lval={values.salesGrowthL}
            rval={values.salesGrowthR}
            calcFunc={yearOverYear} />

          <FiscalFitnessRow
            scoresId="TTMgrossMargin"
            title="TTM Gross Margin"
            lLabel="TTM Gross Profit"
            rLabel="Sales"
            lval={values.TTMgrossMarginL}
            rval={values.TTMgrossMarginR}
            calcFunc={percent} />

          <FiscalFitnessRow
            scoresId="YAgrossMargin"
            title="Year ago Gross Margin"
            lLabel="Year ago gross profit"
            rLabel="Year ago Sales"
            lval={values.YAgrossMarginL}
            rval={values.YAgrossMarginR}
            calcFunc={percent} />

          <FiscalFitnessRow
            scoresId="NIgrowth"
            title="Net income growth"
            lLabel="TTM Net Income"
            rLabel="Year Ago NI"
            lval={values.NIgrowthL}
            rval={values.NIgrowthR}
            calcFunc={yearOverYear} />

          <FiscalFitnessSingleField
            title="TTM EBITA"
            scoresId="ttmEBITA"
            val={values.ttmEBITA}
            updateField={updateField} />

          <h5>Balance Sheet</h5>
          <hr style={{ border: "3px solid rgb(86, 141, 212)" }} />
          <FiscalFitnessRow
            scoresId="assetGrowth"
            title="Asset Growth"
            lLabel="Total Assets"
            rLabel="Year ago Total Assets"
            lval={values.assetGrowthL}
            rval={values.assetGrowthR}
            calcFunc={yearOverYear} />

          <FiscalFitnessRow
            scoresId="TLgrowth"
            title="Total Liabilities Growth"
            lLabel="Latest TL"
            rLabel="Year ago TL"
            lval={values.TLgrowthL}
            rval={values.TLgrowthR}
            calcFunc={yearOverYear} />

          <FiscalFitnessRow
            scoresId="currentRatio"
            title="Current Ratio"
            lLabel="Latest Current Assets"
            rLabel="Current Liabilities"
            lval={values.currentRatioL}
            rval={values.currentRatioR}
            calcFunc={divide} />

          <FiscalFitnessRow
            scoresId="YAcurrentRatio"
            title="Current Ration(Year Ago)"
            lLabel="YA Current Assets"
            rLabel="YA Current Liabilities"
            lval={values.YAcurrentRatioL}
            rval={values.YAcurrentRatioR}
            calcFunc={divide} />

          <FiscalFitnessRow
            scoresId="TLtoEBITDA"
            title="Total Liabilities to EBITDA"
            lLabel="Total Liabilities"
            rLabel="Year Ago"
            lval={values.TLtoEBITDAL}
            rval={values.TLtoEBITDAR}
            calcFunc={divide} />

          <FiscalFitnessSingleField
            title="TTM Operating Cash Flow"
            scoresId="TTMcf"
            val={values.TTMcf}
            updateField={updateField} />

          <FiscalFitnessSingleField
            title="Shares Out"
            scoresId="SharesOut"
            val={values.SharesOut}
            updateField={updateField} />

          <FiscalFitnessSingleField
            title="LY Shares Out"
            scoresId="LYsharesOut"
            val={values.LYsharesOut}
            updateField={updateField} />

        </Col>
      </Row>
    </div>
  )
}

FiscalFitness.propTypes = {
  fState: PropTypes.object.isRequired,
  submitScore: PropTypes.func.isRequired
}
