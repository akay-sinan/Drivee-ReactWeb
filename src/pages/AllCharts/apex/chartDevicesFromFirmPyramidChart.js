import React from "react"
import ReactApexChart from "react-apexcharts"

const PyramidChart = () => {
  const series= [
              {
                name: "Funnel Series",
                data: [1380, 1100, 990, 880, 740, 548, 330, 200],
              },
            ]
  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        isFunnel: true,
        borderRadius: 0,
        horizontal: true,
        distributed: true,
        barHeight: '80%',
        
      },
    },
    colors: [
      '#F44F5E',
      '#E55A89',
      '#D863B1',
      '#CA6CD8',
      '#B57BED',
      '#8D95EB',
      '#62ACEA',
      '#4BC3E6',
    ],
    dataLabels: {
      enabled: true,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] 
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: 'Marka Piramidi',
      align: 'middle',
    },
    xaxis: {
      categories: ['BMW', 'Ford', 'Prosche', 'Fiat', 'Volvo', 'Seat', 'Nissan', 'Audi'],
    },
    legend: {
      show: false,
    },
   
    
  }

  return (
    <ReactApexChart options={options} series={series} type="bar" height="350" />
  )
}

export default PyramidChart
