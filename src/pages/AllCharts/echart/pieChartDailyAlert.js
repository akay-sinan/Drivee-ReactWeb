import React from "react";
import ReactEcharts from "echarts-for-react";

const pieChartDailyAlert = () => {
  const options = {
    toolbox: {
      show: true,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    legend: {
      orient: "horizontal",
      left: "center",
      data: ["Cihaz Sökme", "Acil Yardım", "Kaza", "Concierge"],
      textStyle: {
        color: ["#74788d"],
      },
    },
    label: {
      alignTo: 'edge',
      formatter: '{name|{b}}\n{time|{c}}',
      minMargin: 5,
      edgeDistance: 10,
      lineHeight: 15,
      rich: {
        time: {
          fontSize: 10,
          color: '#999',
        },
      },
    },
    color: ["#02a499", "#f8b425", "#ec4561", "#38a4f8"],
    series: [
      {
        name: "Uyarı",
        type: "pie",
        radius: "55%",
        center: ["50%", "60%"],
        data: [
          { value: 20, name: "Cihaz Sökme" },
          { value: 15, name: "Acil Yardım" },
          { value: 5, name: "Kaza" },
          { value: 25, name: "Concierge" },
          
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };
  return (
    <React.Fragment>
      <ReactEcharts style={{ height: "350px" }} option={options} />
    </React.Fragment>
  );
};
export default pieChartDailyAlert;
