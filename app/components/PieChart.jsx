import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = ({ data }) => {
    Highcharts.setOptions({
        credits: {
          enabled: false
        },
        // other Highcharts options...
      });
  const options = {
    chart: {
      backgroundColor: '#162637',
    //   width: 300, // Set fixed width
    //   height: 300,
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
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        },
      },
    },
    series: [{
      name: 'Data',
      colorByPoint: true,
      data: data,
    }],
  };

  return (
    <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
