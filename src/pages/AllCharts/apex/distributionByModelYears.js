import React from "react"
import ReactApexChart from "react-apexcharts"

const barchart = () => {
  const series = [
    {
      name:'Cihaz Adet',
      data: [10,30,50,70,90,110 ],
    },
  ]
  const options = {
    
    chart: {
      height: 350,
      type: 'bar',
      dropShadow: {
        enabled: !0,
        color: "#000",
        top: 18,
        left: 0,
        blur: 5,
        opacity: 0.2,
      }
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '15%',
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      }
    },
    dataLabels: {
      enabled: true,
                formatter: function (val) {
                  return val;
                },
                offsetY: -20,
                style: {
                  fontSize: '12px',
                  colors: ["#304758"]
                }
    },

    stroke: { width: [0, 2, 5], curve: "smooth" },
    
    grid: {
      row: {
        colors: ['#fff', '#f2f2f2']
      }
    },
    xaxis: {
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: true,
      },
      categories: ['RENAULT (OYAK) - 2017', 'HYUNDAI - 2021', 'FORD - 2011', 'FORD - 2018', 'LAND ROVER - 2021','PEUGEOT - 2017' ],
      
    },
    yaxis: {
      title: {
        text: 'Cihaz Adet',
      },
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
    <ReactApexChart options={options} series={series} type="bar" height="350" />
  )
}

export default barchart
