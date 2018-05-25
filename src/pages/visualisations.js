import React from "react";
import { VictoryPie, VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
import { Grid } from "semantic-ui-react";

const data2012 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

const data2013 = [
  {quarter: 1, earnings: 15000},
  {quarter: 2, earnings: 12500},
  {quarter: 3, earnings: 19500},
  {quarter: 4, earnings: 13000}
];

const data2014 = [
  {quarter: 1, earnings: 11500},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 20000},
  {quarter: 4, earnings: 15500}
];

const data2015 = [
  {quarter: 1, earnings: 18000},
  {quarter: 2, earnings: 13250},
  {quarter: 3, earnings: 15000},
  {quarter: 4, earnings: 12000}
];


const sampleData=[
  { x: "Cats", y: 35 },
  { x: "Dogs", y: 40 },
  { x: "Birds", y: 55 }
];


// Colors
const colors = [
  "#4c4c99",
  "#49968a",
  "#40c621",
  "#bc1ca9",
  "#bdbdbd",
  "#d9d9d9",
  "#f0f0f0"
];

const Visualisations = () => (
    <div>
      <h2>Visualisations</h2>
      <p>Data visualisation is an important way of conveying certain messages.</p>
      <p>Whilst some of the more colourful charts can be beneficial, simplicity of message usually brings about the best result</p>
      <p>I've chose <a href="http://formidable.com/open-source/victory/docs/">Victory Charts</a> for the below visualisatons:</p>
    <Grid columns={2} doubling>
      <Grid.Column>
      <div>
      <svg width={300} height={300}>
        <circle cx={150} cy={150} r={50} fill="#c43a31"/>
        <VictoryPie
              colorScale={colors}
          standalone={false}
          width={300} height={300}
          innerRadius={75}
          data={sampleData}
        />
      </svg>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div>
        <VictoryChart
          domainPadding={10}
          theme={VictoryTheme.material}
          width={300} height={300}
        >
            <VictoryAxis
              tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
            />
            <VictoryAxis
              dependentAxis
              tickFormat={(x) => (`$${x / 1000}k`)}
            />
            <VictoryStack
              colorScale={colors}
              width={300} height={300}
            >
              <VictoryBar
                data={data2012}
                x={"quarter"}
                y={"earnings"}
              />
              <VictoryBar
                data={data2013}
                x={"quarter"}
                y={"earnings"}
              />
              <VictoryBar
                data={data2014}
                x={"quarter"}
                y={"earnings"}
              />
              <VictoryBar
                data={data2015}
                x={"quarter"}
                y={"earnings"}
              />
            </VictoryStack>
          </VictoryChart>
        </div>
        </Grid.Column>
        </Grid>
    <div style={{"height": "150px"}}>
    </div>
    </div>
  );

export default Visualisations;