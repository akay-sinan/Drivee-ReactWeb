import React, { useState } from "react";
import ReactApexChart from "react-apexcharts"
import { Col, Card, CardBody, Button } from "reactstrap";
const barchart = () => {
  const [activeM, setactiveM] = useState(false);
  const [active6M, setactive6M] = useState(false);
  const [activeY, setactiveY] = useState(true);
  const [activeA, setactiveA] = useState(false);
  const series = [
    {
      name:'Aktif Cihaz',
      data: [61,206,266,482,608,758 , 1191 ],
    },
    {
      name:'Pasif Cihaz',
      data: [1,3,5,1,0,2 , 3 ],
    },
  ]
  const options = {
    chart: {
      type: 'bar',
      height: 450,
      dropShadow: {
        enabled: !0,
        color: "#000",
        top: 18,
        left: 7,
        blur: 8,
        opacity: 0.2,
      }, 
    },
    plotOptions: {
      bar: { columnWidth: "45%", endingShape: "rounded",borderRadius: 5, }
    },
    dataLabels: {
      enabled: true
    },
    stroke: { width: [0, 2, 5], curve: "smooth" },
    tooltip: {
      shared: true,
      intersect: false
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
    xaxis: {
      categories: [
        "A Firma",
        "B Firma",
        "C Firma",
        "D Firma",                   
        "E Firma",
        "F Firma",
        "G Firma",
       
       
       
      ],
      labels: {
        formatter: function (val) {
          return val
        }
      }
    },
   
    
  }

  return (
    <React.Fragment>
            <div className="toolbar d-flex flex-wrap gap-2 float-end" style={{"marginRight":"40px"}}>
        <Button
          color="light"
          size="sm"
          type="button"
          className={activeM ? "active" : ""}

          id="one_month"
        >
          3 Ay
        </Button>
        <Button
          color="light"
          size="sm"
          type="button"
          className={active6M ? "active" : ""}

          id="six_months"
        >
          6 Ay
        </Button>
        <Button
          color="light"
          size="sm"
          type="button"
          className={activeY ? "active" : ""}

          id="one_year"
        >
          1 Yıl
        </Button>
        <Button
          color="light"
          size="sm"
          type="button"
          className={activeA ? "active" : ""}

          id="all"
        >
          Tümü
        </Button>
      </div>
      <ReactApexChart options={options} series={series} type="bar" height="350" />

    </React.Fragment>
  )
}

export default barchart
