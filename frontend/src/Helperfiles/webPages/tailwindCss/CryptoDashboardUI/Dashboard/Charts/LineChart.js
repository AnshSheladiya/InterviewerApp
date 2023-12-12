// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/bump
import { ResponsiveAreaBump } from "@nivo/bump";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const AreaBumpChart = ({ data }) => (
  <div
    style={{ width: "auto", height: "400px" }}
    className="ml-[16.66%] flex flex-col bg-[#201D47]">
    <ResponsiveAreaBump
      data={data}
      margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
      spacing={8}
      colors="#16B4EB"
      blendMode="multiply"
      fillOpacity={1}
      inactiveFillOpacity={1}

      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "CoffeeScript",
          },
          id: "dots",
        },
        {
          match: {
            id: "TypeScript",
          },
          id: "lines",
        },
      ]}
      startLabel="id"
      startLabelTextColor={{
        from: "color",
        modifiers: [["darker", 1]],
      }}
      endLabel="id"
      endLabelTextColor={{
        from: "color",
        modifiers: [["darker", "0.9"]],
      }}
      enableGridX={false}
      axisTop={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: 32,
      }}
    />
  </div>
);

export default AreaBumpChart;
