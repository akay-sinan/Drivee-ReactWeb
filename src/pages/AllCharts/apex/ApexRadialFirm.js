import React from "react";
import ReactApexChart from "react-apexcharts";
import "../../Dashboard/dashboard.scss";

const ApexRadial = () => {
  const series = [73];
  const options = {
    plotOptions: {
      radialBar: {
        startAngle: -90, 
        endAngle: 90,
        dataLabels: {
          name: {
            fontSize: "13px",
            color: void 0,
            offsetY: 60,
          },
          value: {
            offsetY: 22,
            fontSize: "16px",
            color: void 0,
            formatter: function (e) {
              return e + "%";
            },
          },
          
        },
      },
    },
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
    stroke: {
      lineCap: 'round'
    },
    labels: ["Firma Ortalama"],
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
