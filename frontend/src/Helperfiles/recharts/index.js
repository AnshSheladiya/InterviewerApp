import "react-chat-elements/dist/main.css"

import DashedLineChart from './LineCharts/DashedLineChart/DashedLineChart';
import SimpleLineChart from './LineCharts/SimpleLineChart/SimpleLineChart';
import TinyLineChart from './LineCharts/TinyLineChart/TinyLineChart';
import VerticalLineChart from './LineCharts/VerticalLineChart/VerticalLineChart';
import AllData from './data'
import LineChartConnectNulls from "./LineCharts/LineChartConnectNulls/LineChartConnectNulls";
import LineChartWithReferenceLines from "./LineCharts/LineChartWithReferenceLines/LineChartWithReferenceLines";
import CustomizedDotLineChart from "./LineCharts/CustomizedDotLineChart/CustomizedDotLineChart";
import CustomizedLabelLineChart from "./LineCharts/CustomizedLabelLineChart/CustomizedLabelLineChart";
import SynchronizedLineChart from "./LineCharts/SynchronizedLineChart/SynchronizedLineChart";
import LineChartNegativeValuesWithReferenceLines from "./LineCharts/LineChartNegativeValuesWithReferenceLines/LineChartNegativeValuesWithReferenceLines";
import CenterScreen from "../styled-components/CenterScreen";
import TitleComponent from "../styled-components/TitleComponent";
import BoxComponent from "../styled-components/BoxComponent";

function ChartIndex() {
  return (
    <CenterScreen>
      <TitleComponent>Line Charts</TitleComponent>
      <BoxComponent className="flex gap-y-20">
      <SimpleLineChart data={AllData.data} />
       <TinyLineChart data={AllData.data}/>
       <DashedLineChart data={AllData.data}/>
       <VerticalLineChart data={AllData.data}/>̣
       <LineChartConnectNulls data={AllData.LineChartConnectNullsData}/>̣
       <LineChartWithReferenceLines data={AllData.data}/>̣
       <CustomizedDotLineChart data={AllData.data}/>
       <CustomizedLabelLineChart data={AllData.data}/>
       <SynchronizedLineChart data={AllData.data}/>
      <LineChartNegativeValuesWithReferenceLines/>
      </BoxComponent>

    </CenterScreen>
  );
}

export default ChartIndex;