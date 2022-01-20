import React from 'react'
import "./style.css"
import { ReactComponent as Wave } from '../../assets/Wave.svg'
import { VictoryBar ,VictoryChart,VictoryAxis,VictoryPie, VictoryLabel  } from 'victory';

export default function MainContent() {
  const data = [
    {quarter: "Mar 1 - 7", earnings: "0"},
    {quarter: "Mar 8 - 14", earnings: "50,000"},
    {quarter: "Mar 15 - 21", earnings: "100,000"},
    {quarter: "Mar 22 - 28", earnings: "150,000"},
    {quarter: "Final wk", earnings: "200,000"}
  ];

  return (
    <div className='mainContainer'>
      <div className='greetings'><Wave /> Hey Anddy!</div>
      <div className="earning">
        You earned NGN 3 ,000,000 this month.
      </div>
      
      <div className="chart">
        <VictoryChart domainPadding={30} animate={{duration: 500}}>
          <VictoryAxis 
            style={{
              tickLabels: {fontSize: 12, padding: 5},
              axis: {stroke: "transparent"}
            }}
          />
          <VictoryAxis
          dependentAxis
          style={{
            tickLabels: {fontSize: 12, padding: 5},
            axis: {stroke: "transparent"}
          }}
          />
          <VictoryBar  
            data={data}
            // data accessor for x values
            x="quarter"
            // data accessor for y values
            y="earnings"

            cornerRadius={{top:"15"}}
            style={{data:{fill:"#ECCCFF",width:"50"}}}
          />
        </VictoryChart>
      </div>

      <div className="lastRow">
          <div className="circleChart">
            <div className="pie">
              <div className="percent">
                66%
              </div>
              <VictoryPie 
                data={[
                  {x: "A", y: 66},
                  {x: "B", y: 34}
                ]}
                innerRadius={100} labelRadius={100}
                style={{ labels: { fontSize: 0}}}
                colorScale={["#A6D997", "#DFEEDB" ]}
                labelComponent={<span/>}
              />
            </div>
            <div className="numbers">
              <div className="oneBox">
                <div className="oneNumber">
                  <div className="smallBox"></div>
                  1
                </div>
                <div className="successful">
                  Unsuccessful
                </div>
              </div>

              <div className="oneBox">
                <div className="oneNumber">
                  <div className="smallBox greeBox"></div>
                  150
                </div>
                <div className="successful">
                  Successful
                </div>
              </div>
            </div>
          </div>
          <div className="errorsChart">
              <div className="smallChart">
              <VictoryChart 
              domainPadding={10} animate={{duration: 500}}
              height={220}
              >
                <VictoryAxis 
                  style={{
                    tickLabels: {fontSize: 20, padding: 5,fill:"#BDBDBD"},
                    axis: {stroke: "transparent"}
                  }}
                />
                <VictoryAxis
                dependentAxis
                style={{
                  tickLabels: {fill:"transparent"},
                  axis: {stroke: "transparent"}
                }}
                />
                <VictoryBar
                  data={[
                    {x: "a", y: 1, label: "1"},
                    {x: "x", y: 5, label: "5"},
                    {x: "o", y: 3, label: "3"},
                    {x: "n", y: 10, label: "10"},
                  ]}
                  labelComponent={
                    <VictoryLabel  verticalAnchor="middle"
                      style={{fill:"#828282",fontSize:20}}
                    />
                  }
                  
                  cornerRadius={{top:"12"}}
                  style={{data:{fill:({datum}) =>
                    datum.x === "a"?"#FFBB4F"
                    :datum.x === "x"?"#FFDA93"
                    :datum.x === "o"?"#FF7576"
                    :datum.x === "n"?"#80E0E5"
                    :"#000"
                  ,width:"100"}}}
                />
              </VictoryChart>
                
              </div>
              <div className="errorsTitle">
                Total number of errors:
                <div className="errorsNumber">
                  19
                </div>
              </div>

              <div className="errorsList">
                <div className="oneError">
                  <div className="icon firstColor">a</div>
                  <div className="desc">Customer errors</div>
                </div>
                <div className="oneError">
                  <div className="icon secColor">x</div>
                  <div className="desc">Fraud blocks</div>
                </div>
                <div className="oneError">
                  <div className="icon thirdColor">o</div>
                  <div className="desc">Bank errors</div>
                </div>
                <div className="oneError">
                  <div className="icon forthColor">n</div>
                  <div className="desc">System errors</div>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}
