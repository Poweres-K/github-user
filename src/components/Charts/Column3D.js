import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Column3D = ({ chartData }) => {
  const chartConfigs = {
    type: "column2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        showValues: "1",
        //Set the chart caption
        xAxisName: "Repos",
        yAxisName: "Stars",
        xAxisNameFontSize: "20",
        caption: "Most popular",
        captionFontColor: "#000000",
        palettecolors: "29c3be,5d62b5,b5b05d,f2726f,964B00",
        showPercentInToolTip: true,
        theme: "fusion",
      },
      // Chart Data
      data: chartData,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Column3D;
