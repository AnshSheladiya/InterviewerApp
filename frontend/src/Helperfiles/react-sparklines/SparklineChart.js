import React from "react";
import {
  Sparklines,
  SparklinesBars,
  SparklinesCurve,
  SparklinesLine,
  SparklinesNormalBand,
  SparklinesReferenceLine,
  SparklinesSpots,
} from "react-sparklines";
import CenterScreen from "../styled-components/CenterScreen";
import TitleComponent from "../styled-components/TitleComponent";

const SparklineChart = () => {
  // Sample data for the Sparkline chart
  const sampleData = [5, 10, 8, 15, 12, 10, 6, 8, 11, 14, 9, 7];

  // Custom style for the chart container
  const chartStyle = {
    width: "300px", // Adjust the width as needed
    height: "60px", // Adjust the height as needed
  };

  return (
    <CenterScreen>
      <TitleComponent>Sparkline Charts</TitleComponent>
      <div style={chartStyle}>
        <h1>Simple</h1>
        <Sparklines data={sampleData}>
          <SparklinesLine />
        </Sparklines>

        <h1>Simple Curve</h1>
        <Sparklines data={sampleData}>
          <SparklinesCurve />
        </Sparklines>

        <h1>Customizable</h1>
        <Sparklines data={sampleData}>
          <SparklinesLine color="#940B92" />
        </Sparklines>

        <h1>Spots</h1>
        <Sparklines data={sampleData} margin={6}>
          <SparklinesLine
            style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }}
          />
          <SparklinesSpots
            size={4}
            style={{ stroke: "#336aff", strokeWidth: 3, fill: "white" }}
          />
        </Sparklines>

        <h1>Bars</h1>
        <Sparklines data={sampleData}>
          <SparklinesBars style={{ fill: "#41c3f9" }} />
        </Sparklines>
        <Sparklines data={sampleData}>
          <SparklinesBars
            style={{ stroke: "white", fill: "#41c3f9", fillOpacity: ".25" }}
          />
          <SparklinesLine style={{ stroke: "#41c3f9", fill: "none" }} />
        </Sparklines>

        <h1>Reference Line</h1>
        <Sparklines data={sampleData}>
          <SparklinesLine />
          <SparklinesReferenceLine type="max" />
        </Sparklines>
        <Sparklines data={sampleData}>
          <SparklinesLine />
          <SparklinesReferenceLine type="min" />
        </Sparklines>

        <Sparklines data={sampleData}>
          <SparklinesLine />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>

        <Sparklines data={sampleData}>
          <SparklinesLine />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>

        <Sparklines data={sampleData}>
          <SparklinesLine />
          <SparklinesReferenceLine type="median" />
        </Sparklines>

        <Sparklines data={sampleData}>
          <SparklinesBars style={{ fill: "slategray", fillOpacity: ".5" }} />
          <SparklinesReferenceLine />
        </Sparklines>

        <h1>Normal Band</h1>

        <Sparklines data={sampleData}>
          <SparklinesLine style={{ fill: "none" }} />
          <SparklinesNormalBand />
        </Sparklines>

        <Sparklines data={sampleData}>
          <SparklinesLine style={{ fill: "none" }} />
          <SparklinesNormalBand />
          <SparklinesReferenceLine type="mean" />
        </Sparklines>

        <h1>Real world examples</h1>
        <Sparklines data={sampleData}>
          <SparklinesLine
            style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }}
          />
        </Sparklines>

        <Sparklines data={sampleData} width={200}>
          <SparklinesLine style={{ stroke: "#2991c8", fill: "none" }} />
          <SparklinesSpots />
          <SparklinesNormalBand style={{ fill: "#2991c8", fillOpacity: 0.1 }} />
        </Sparklines>

        <Sparklines data={sampleData}>
          <SparklinesLine style={{ stroke: "black", fill: "none" }} />
          <SparklinesSpots style={{ fill: "orange" }} />
        </Sparklines>

        <Sparklines data={sampleData}>
          <SparklinesBars
            style={{ stroke: "white", strokeWidth: "1", fill: "#40c0f5" }}
          />
        </Sparklines>

        <Sparklines data={sampleData} height={80}>
          <SparklinesLine
            style={{ stroke: "#8ed53f", strokeWidth: "1", fill: "none" }}
          />
        </Sparklines>

        <Sparklines data={sampleData} height={80}>
          <SparklinesLine
            style={{ stroke: "#d1192e", strokeWidth: "1", fill: "none" }}
          />
        </Sparklines>

        <Sparklines data={sampleData} height={40}>
          <SparklinesLine
            style={{ stroke: "#559500", fill: "#8fc638", fillOpacity: "1" }}
          />
        </Sparklines>

        <Sparklines
          data={sampleData}
          style={{ background: "#272727" }}
          margin={10}
          height={40}
        >
          <SparklinesLine
            style={{ stroke: "none", fill: "#d2673a", fillOpacity: ".5" }}
          />
        </Sparklines>

        <Sparklines
          data={sampleData}
          style={{ background: "#00bdcc" }}
          margin={10}
          height={40}
        >
          <SparklinesLine style={{ stroke: "white", fill: "none" }} />
          <SparklinesReferenceLine
            style={{
              stroke: "white",
              strokeOpacity: 0.75,
              strokeDasharray: "2, 2",
            }}
          />
        </Sparklines>
      </div>
    </CenterScreen>
  );
};

export default SparklineChart;
