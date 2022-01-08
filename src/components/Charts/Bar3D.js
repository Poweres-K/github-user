import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Bar3D = ({ chartData }) => {
  const chartConfigs = {
    type: "bar2d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        showValues: "1",
        //Set the chart caption
        xAxisName: "Repos",
        yAxisName: "Forks",
        xAxisNameFontSize: "20",
        caption: "Most Forked",
        captionFontColor: "#000000",
        alignCaptionWithCanvas: "0",
        palettecolors: "29c3be,5d62b5,b5b05d,f2726f,964B00",
        showPercentInToolTip: true,
        theme: "fusion",
        canvasPadding: "0",
        xAxisNamePadding: "0",
        yAxisNamePadding: "0",
        yAxisValuesPadding: "0",
        outCnvBaseFontSize: "12",
      },
      // Chart Data
      data: chartData,
    },
  };
  return <ReactFC {...chartConfigs} />;
};

export default Bar3D;
