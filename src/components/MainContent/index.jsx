import React, { useState } from 'react';
import './style.css';
import {
  VictoryBar, VictoryChart, VictoryAxis, VictoryPie, VictoryLabel, Bar,
} from 'victory';
import { useSelector, useDispatch } from 'react-redux';
import 'antd/dist/antd.css';
import {
  Modal, Slider, InputNumber, Row, Col,
} from 'antd';
import { ReactComponent as Wave } from '../../assets/Wave.svg';
import { changeValue } from '../../features/bigChart/bigChartSlice';
import { changeSuccessful, changeUnsuccessful } from '../../features/successful/successfulSlice';

export default function MainContent() {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState(0);
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  const bigChart = useSelector((state) => state.bigChart);
  const user = useSelector((state) => state.user);
  const lang = useSelector((state) => state.languages);
  const language = lang[lang.selected];
  const successful = useSelector((state) => state.successful);

  return (
    <div className="mainContainer">
      <div className="greetings">
        <Wave />
        {' '}
        {language.greetings}
        {' '}
        {user.name.split(' ')[0]}
        !
      </div>
      <div className="earning">
        {language.earningPart1}
        {' '}
        3 ,000,000
        {' '}
        {language.earningPart2}

      </div>
      <Modal
        title="Basic Modal"
        visible={openModal}
        onOk={(e) => {
          setOpenModal(false);
          dispatch(changeValue({ id, earnings: value }));
        }}
        onCancel={(e) => setOpenModal(false)}
      >
        <Row>
          <Col span={18}>
            <Slider
              min={100}
              max={1000000}
              value={value}
              onChange={(e) => setValue(e)}
            />
          </Col>
          <Col span={6}>
            <InputNumber
              min={100}
              max={1000000}
              style={{ margin: '0 16px' }}
              value={value}
              onChange={(e) => setValue(e)}
            />
          </Col>
        </Row>
      </Modal>
      <div className="chart">
        <VictoryChart domainPadding={30} animate={{ duration: 500 }}>
          <VictoryAxis
            style={{
              tickLabels: { fontSize: 12, padding: 5 },
              axis: { stroke: 'transparent' },
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              tickLabels: { fontSize: 12, padding: 5 },
              axis: { stroke: 'transparent' },
            }}
          />
          <VictoryBar
            data={bigChart.data}
            // data accessor for x values
            x="quarter"
            // data accessor for y values
            y="earnings"
            cornerRadius={{ top: '15' }}
            style={{ data: { fill: '#ECCCFF', width: '50' } }}
            events={[
              {
                target: 'data',
                eventHandlers: {
                  onClick: () => [{
                    target: 'data',
                    mutation: (props) => {
                      const x = props;
                      // console.log(x.datum.id);
                      setValue(x.datum.earnings);
                      setId(x.datum.id);
                      setOpenModal(true);
                      return null;
                    },
                  }],
                },
              },
            ]}
            // dataComponent={(
            //   <Bar

            //     events={{
            //       onClick: (e) => {
            //         setOpenModal(true);
            //         console.log(e);
            //       },
            //     }}
            //   />
            // )}
          />
        </VictoryChart>
      </div>

      <div className="lastRow">
        <div className="circleChart">
          <div className="pie">
            <div className="percent">
              {Math.floor(successful.successful / (successful.successful + successful.unsuccessful) * 100)}
              %
            </div>
            <VictoryPie
              data={[
                { x: 'A', y: successful.successful },
                { x: 'B', y: successful.unsuccessful },
              ]}
              innerRadius={100}
              labelRadius={100}
              style={{ labels: { fontSize: 0 } }}
              colorScale={['#A6D997', '#DFEEDB']}
              labelComponent={<span />}
            />
          </div>
          <div className="numbers">
            <div className="oneBox">
              <div className="oneNumber">
                <div className="smallBox" />
                <InputNumber
                  min={0}
                  max={1000}
                  value={successful.unsuccessful}
                  onChange={(e) => dispatch(changeUnsuccessful(e))}
                />
              </div>
              <div className="successful">
                Unsuccessful
              </div>
            </div>

            <div className="oneBox">
              <div className="oneNumber">
                <div className="smallBox greeBox" />
                <InputNumber
                  min={0}
                  max={1000}
                  value={successful.successful}
                  onChange={(e) => dispatch(changeSuccessful(e))}
                />
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
              domainPadding={10}
              animate={{ duration: 500 }}
              height={220}
            >
              <VictoryAxis
                style={{
                  tickLabels: { fontSize: 20, padding: 5, fill: '#BDBDBD' },
                  axis: { stroke: 'transparent' },
                }}
              />
              <VictoryAxis
                dependentAxis
                style={{
                  tickLabels: { fill: 'transparent' },
                  axis: { stroke: 'transparent' },
                }}
              />
              <VictoryBar
                data={[
                  { x: 'a', y: 1, label: '1' },
                  { x: 'x', y: 5, label: '5' },
                  { x: 'o', y: 3, label: '3' },
                  { x: 'n', y: 10, label: '10' },
                ]}
                labelComponent={(
                  <VictoryLabel
                    verticalAnchor="middle"
                    style={{ fill: '#828282', fontSize: 20 }}
                  />
                  )}

                cornerRadius={{ top: '12' }}
                style={{
                  data: {
                    fill: ({ datum }) => (
                      datum.x === 'a' ? '#FFBB4F'
                        : datum.x === 'x' ? '#FFDA93'
                          : datum.x === 'o' ? '#FF7576'
                            : datum.x === 'n' ? '#80E0E5'
                              : '#000'),
                    width: '100',
                  },
                }}
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
  );
}
