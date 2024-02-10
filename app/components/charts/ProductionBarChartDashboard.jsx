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
      enabled: false
    },
    // other Highcharts options...
  });
}
const ProductionBarChartDashboard = ({ data }) => {

  const chartComponentRef = useRef(null);

  const options = {
    chart: {
      backgroundColor: "#162637",
      type: "column",
    },
    title: {
      text: "Machine Vs Production",
      style: {
        color: "white",
        fontSize: "16px",
        fontWeight: "semibold",
      },
    },
    xAxis: {
      categories: data && data.map((d) => d.Machine_no),
      //   categories: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Machine 5'],
      title: {
        text: "Machines",
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
        text: "Production",
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
        name: "Production ",
        data: data && data.map((item) => parseFloat(item.Production)),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} />
    </div>
  );
};

export default ProductionBarChartDashboard;
