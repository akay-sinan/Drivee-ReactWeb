import React from "react"
import PropTypes from 'prop-types';
import ReactApexChart from "react-apexcharts"

const StackedColumnChart = ({ periodData }) => {
  const options = {
    chart: {
      stacked: !0,
      toolbar: {
        show: 1
      },
      zoom: {
        enabled: !0
      },
      dropShadow: {
        enabled: !0,
        color: "#000",
        top: 18,
        left: 0,
        blur: 5,
        opacity: 0.1,
      }
    },
    plotOptions: {
      bar: {
        horizontal: !1,
        columnWidth: "15%",
        borderRadius: 5,
        endingShape: "rounded"
      }
    },
    dataLabels: {
      enabled: !1
    },
    xaxis: {
      show: true,
      categories: [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık"
      ],
      labels: {
        show: true
      }
    },
    colors: ["#556ee6", "#f1b44c", "#34c38f"],
    legend: {
      position: "bottom"
    },
    fill: {
      gradient: {
        inverseColors: !1,
        shade: "light",
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
  }
  return (
    <React.Fragment>
      <ReactApexChart
        options={options}
        series={[...periodData]}
        type="bar"
        height="359"
        className="apex-charts"
      />
    </React.Fragment>
  );
}

StackedColumnChart.propTypes = {
  periodData: PropTypes.any
}
export default StackedColumnChart;
