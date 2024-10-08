import React, { useState } from "react";

import ReactApexChart from "react-apexcharts"
import {
  Row, Col, Card, CardBody, CardTitle,
  Container,

  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button
} from "reactstrap";
const chartapex = () => {
  
  const series = [
    { name: "Satış", data: [5, 232, 531, 556, 1980, 3385] },

  ]
  const options = {
    chart: {
      zoom: { enabled: !1 }, toolbar: { show: !1 },
      dropShadow: {
        enabled: !0,
        color: "#000",
        top: 18,
        left: 7,
        blur: 8,
        opacity: 0.2,
      },
    },
    colors: ["#556ee6"],
    dataLabels: { enabled: !0 },
    stroke: { curve: "smooth" },

    grid: {
      row: { colors: ["transparent", "transparent"], opacity: 0.2 },
      borderColor: "#f1f1f1",
    },
    markers: { style: "inverted", size: 6 },
    xaxis: {
      categories: ["2018", "2019", "2020", "2021", "2022", "2023"],

    },
    yaxis: { title: { text: "Cihaz" } },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100]
      },
    },
    responsive: [
      {
        breakpoint: 600,
        options: { chart: { toolbar: { show: !1 } }, legend: { show: !1 } },
      },
    ],

  }

  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height="380"
      // className="apexcharts-canvas apexchartscq310u9c apexcharts-theme-light"
      />
    </React.Fragment>

  )
}

export default chartapex
