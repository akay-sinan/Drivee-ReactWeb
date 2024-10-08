import React from "react"
import ReactApexChart from "react-apexcharts"

const Spinearea = () => {
  const series = [
    {
      name: "series1",
      data: [5, 202,531, 556, 1980, 3385],
    }
  ]

  const options = {
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },

    colors: ["#556ee6"],
    xaxis: {
      type: "datetime",
      categories: [
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023"
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    tooltip: {
      x: {
        format: "yyyy",
      },
    },
  }

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height="350"
    />
  )
}

export default Spinearea
