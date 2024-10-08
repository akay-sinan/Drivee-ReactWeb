import React from "react";
import ReactApexChart from "react-apexcharts";
import "../../Dashboard/dashboard.scss";

const ApexRadial = () => {
  const series = [50];
  const options = {
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "100%",
          margin: 5, // margin is in pixels
        },

        hollow: {
          size: "65%",
        },

        
        dataLabels: {
          show: true,
          name: {
            offsetY: 35,
            show: true,
            color: '#888',
            fontSize: '13px'
          },
          value: {
            offsetY: 0,
          
            color: '#111',
            fontSize: '16px',
            show: true,
            formatter: function (e) {
              return e + "%";
            },
          }
        }
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Kapatılan'],
    
    colors: ["#f46a6a"], 
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type:"horizantal",
        gradientToColors:["#556ee6"],
        shadeIntensity: 0.15,
        inverseColors: !1,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
   
    
  };
  return (
    <ReactApexChart
      options={options}
      series={series}
      type="radialBar"
      height="200"
      className="apex-charts"
    />
  );
};

export default ApexRadial;
