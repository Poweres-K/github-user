import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Pie3D = ({ chartData }) => {
  const chartConfigs = {
    type: "pie2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Language",
        showPercentValues: false,
        showPercentInToolTip: true,
        theme: "fusion",
        showLegend: "0",
      },
      // Chart Data
      data: chartData,
    },
  };

  return <ReactFC {...chartConfigs} />;
};

export default Pie3D;
