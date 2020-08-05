import React from 'react';
import GaugeChart from 'react-gauge-chart';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Scoreboard(props) {
  let pcnt = ((props.score + 10) * 100 / 33) / 100;

  return (
    <>
      <Row>
        <Col>
          <Card className="pt-4">
            <GaugeChart id="gauge-chart3"
              nrOfLevels={3}
              arcPadding={0}
              cornerRadius={0}
              colors={['#d487a3', 'rgb(86, 141, 212)', 'rgb(86, 141, 212)']}
              hideText={true}
              arcWidth={0.7}
              Angle={-25}
              percent={pcnt}
            />
            <div className="text-center">
              <h5>Total Score</h5>
              <h3 style={{color: "rgb(86, 141, 212)"}}>{props.score}</h3>
            </div>
          </Card>
          <br/><br/>
          <div className="text-center">
            Look for a score above 0. <br/> A score between 4 and 9 indicates a solid company poised for long tearm growth.
          </div>
        
        </Col>
        </Row>
    </>
  )
}

export default Scoreboard;