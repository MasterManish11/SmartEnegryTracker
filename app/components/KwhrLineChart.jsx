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
// "use client";
// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
// } from "chart.js";
// Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title);
// const KwhrLineChart = ({ data }) => {
//   const [lineGraphData, setLineGraphData] = useState({
//     labels: [],
//     datasets: [
//       {
//         label: "Time vs Kwhr",
//         data: [],
//         backgroundColor: [],
//       },
//     ],
//   });

//   useEffect(() => {
//     if (data.length > 0) {
//       const labels = data.map((d) => d.TIME);
//       const kwhrData = data.map((d) => d.kwhr);

//       setLineGraphData({
//         labels,
//         datasets: [
//           {
//             label: "Time vs Energy",
//             data: kwhrData,
//             backgroundColor: "rgba(75,192,192,0.2)",
//             borderColor: "rgba(75,192,192,1)",
//             borderWidth: 1,
//             pointRadius: 3,
//             pointBackgroundColor: "red",
//             // color:'white'
//           },
//         ],
//       });
//     }
//   }, [data]);

//   const options = {
//     scales: {
//       x: {
//         type: "category",
//         labels: lineGraphData.labels,
//         title: {
//           display: true,
//           text: "Time", // X-axis label
//           color: "white",
//         },
//         ticks: {
//           color: "white", // Change the color of x-axis ticks
//         },
//       },
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: "kwhr", // Y-axis label
//           color: "white",
//         },
//         ticks: {
//           color: "white", // Change the color of x-axis ticks
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         labels: {
//           color: "white", // Set the desired color for the dataset label text
//         },
//       },
//       tooltip: {
//         callbacks: {
//           label: (context) => {
//             const dataIndex = context.dataIndex;
//             const date = lineGraphData.labels[dataIndex];
//             const Energy = lineGraphData.datasets[0].data[dataIndex];
//             return `Date: ${date}, Energy: ${Energy}`;
//           },
//         },
//       },
//     },
//     interaction: {
//       intersect: false,
//     },
//   };

//   return (
//     <div className="md:w-[50%] md:mx-auto w-full">
//       <h1 className="text-white">Time vs Energy</h1>
//       <Line data={lineGraphData} options={options} />
//     </div>
//   );
// };

// export default KwhrLineChart;
