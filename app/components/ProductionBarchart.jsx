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
const ProductionBarchart = ({ data }) => {

  const chartComponentRef = useRef(null);

  const options = {
    chart: {
      backgroundColor: "#162637",
      type: "column",
    },
    title: {
      text: "Date vs Production",
      style: {
        color: "white",
        fontSize: "16px",
        fontWeight: "semibold",
      },
    },
    xAxis: {
      categories: data && data.map((data) => data.date).slice(0, -1),
      //   categories: ['Machine 1', 'Machine 2', 'Machine 3', 'Machine 4', 'Machine 5'],
      title: {
        text: "Date",
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
        data: data && data.map((data) => data.production).slice(0, -1),
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} ref={chartComponentRef} />
    </div>
  );
};

export default ProductionBarchart;


// "use client";
// import React, { useEffect, useState } from "react";
// import { Bar, Pie } from "react-chartjs-2";
// import { Chart as chartjs } from "chart.js/auto";
// const ProductionBarchart = ({ data }) => {
//   const [graphdata, setGraphData] = useState([]);
//   const [effChartData, setEffChartData] = useState([]);

//   useEffect(() => {
//     if (data.length > 0) {
//       const labelsWithoutLast = data.map((data) => data.date).slice(0, -1);
//       const dataWithoutLast = data.map((data) => data.production).slice(0, -1);
//       setGraphData({
//         labels: labelsWithoutLast,
//         datasets: [
//           {
//             label: "Date vs Production",
//             data: dataWithoutLast,
//             backgroundColor: dataWithoutLast.map((value) =>
//               value > 1000 ? "#67E8F9" : "#3D9394"
//             ),
//           },
//         ],
//       });
//       const eff = data.map((data) => data.efficiency);
//       const avgEfficiency = eff[eff.length - 1];

//       setEffChartData({
//         labels: ["Efficiency", "Remaining"],
//         datasets: [
//           {
//             data: [avgEfficiency, 100 - avgEfficiency],
//             backgroundColor: ["#36A2EB", "#FFCE56"],
//             hoverBackgroundColor: ["#36A2EB", "#FFCE56"],
//           },
//         ],
//       });
//     }
//   }, [data]);

//   const options = {
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: "Date", // X-axis label
//           color:"white"
//         },
//         ticks: {
//           color: 'white', // Change the color of x-axis ticks
//         },
        
//       },
//       y: {
//         title: {
//           display: true,
//           text: "Production", // Y-axis label
//           color:"white"
//         },
//         ticks: {
//           color: 'white', // Change the color of x-axis ticks
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
//     },
//   };
//   const pieChartOptions = {
//     plugins: {
//       legend: {
//         display: true,
//         labels: {
//           color: "white", // Set the desired color for the dataset label text
//         },
//       },
//     },
//   };


//   return (
//     <div>
//       {graphdata.labels?.length > 0 ? (
//         <div className="w-full grid sm:grid-cols-3 sm:gap-4 grid-cols-1">
//           <div className="sm:col-span-2 sm:w-[80%]">
//           <h2 className="text-center font-semibold text-white">Date vs Production</h2>
//             <Bar data={graphdata} options={options} />
//           </div>
//           <div className="flex flex-col items-center">
//             <div className="sm:w-3/4 w-1/4">
//               <h2 className="text-center font-semibold text-white">Machine Efficiency</h2>
//               <Pie data={effChartData} options={pieChartOptions} className="sm:w-1/2 w-1/4" />
//             </div>
//           </div>
//         </div>
//       ) : (
//         <>
//           <h1>graphdata</h1>
//         </>
//       )}
//     </div>
//   );
// };

// export default ProductionBarchart;
