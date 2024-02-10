'use client'
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
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
const PieChart = ({ data }) => {
  const chartComponentRef = useRef(null);

    
  const options = {
    chart: {
      backgroundColor: '#162637',
    //   width: 300, // Set fixed width
      height: 192,
      type: 'pie',
    },
    title: {
      text: 'Efficiency',
      style: {
        color: 'white',
        fontSize : "16px",
        fontWeight:"semibold"
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          distance: 1, // Display data labels inside the slices
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    // tooltip: {
    //   pointFormat: '<b>{point.y}%</b>', // Display only the value
    // },
    tooltip: {
      pointFormatter: function() {
        if (this.key === 'Remaining') {
          return `${this.y.toFixed(2)}`;
        } else {
          return `${this.y}`;
        }
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
    series: [{
      // name: 'Data',
      colorByPoint: true,
      data: data,
    }],
  };

  return (
    <div>
        <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} />
    </div>
  );
};

export default PieChart;
