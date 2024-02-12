'use client'
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";
import { useRef } from 'react'
if (typeof Highcharts === 'object') {
  HighchartsExporting(Highcharts)
  Highcharts.setOptions({
    credits: {
      enabled: false,
    },
    // other Highcharts options...
  });
}
const KwhrLineChart = ({ data }) => {
  const chartComponentRef = useRef(null);
  const options = {
    chart: {
      backgroundColor: "#162637",
      type: "line",
    },
    title: {
      text: "Time vs Energy",
      style: {
        color: "white",
        fontSize: "16px",
        fontWeight: "semibold",
      },
    },
    xAxis: {
      categories: data.map((d) => d.TIME),
      title: {
        text: "Time",
        style: {
          color: "white",
          fontSize: "16px",
          fontWeight: "semibold",
        },
      },
      labels: {
        style: {
          color: "white", // Color for x-axis labels
        },
      },
      gridLineWidth: 0,
    },
    yAxis: {
      title: {
        text: "Kwhr",
        style: {
          color: "white",
          fontSize: "16px",
          fontWeight: "semibold",
        },
      },
      labels: {
        style: {
          color: "white", // Color for x-axis labels
        },
      },
    },
    gridLineWidth: 0,
    legend: {
      itemStyle: {
        color: "White", // Set the desired color for the legend item (replace 'red' with your preferred color)
      },
    },
    exporting: {
      enabled: true,
      buttons: {
        contextButton: {
          menuItems: [
            'viewFullscreen',
            "downloadPNG",
            "downloadJPEG",
            "downloadPDF",
            "downloadSVG",
            // "separator",
            // "downloadCSV",
            // "downloadXLS",
          ],
        },
      },
    },
    navigation: {
        buttonOptions: {
          enabled: true,
        },
      },
    series: [
      {
        name: "Kwhr ",
        data: data.map((item) => parseFloat(item.kwhr)),
      },
    ],
  };

  

  // md:w-[50%] md:mx-auto w-full

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} />
    </div>
  );
};

export default KwhrLineChart;
