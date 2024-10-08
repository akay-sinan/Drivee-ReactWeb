import React from "react"
import ReactApexChart from "react-apexcharts"

const ApexChart  = () => {
  const series = [2515, 15]
  const options = {
    chart: { 
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
      radialBar: {
        
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Toplam Cihaz",
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return parseInt(2530)
            },
          },
        },
      },
    },
    labels: ['Aktif', 'Pasif'],
  
    colors: ["#02a499", "#cdcdcd" ],
  }

  return (
    <React.Fragment>
       <div className="justify-content-center row">
                    <div className="col-sm-4">
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">2515</h5>
                        <p className="text-muted">Toplam</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">2500</h5>
                        <p className="text-muted">Aktif</p>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="text-center">
                        <h5 className="mb-0 font-size-20">15</h5>
                        <p className="text-muted">Pasif</p>
                      </div>
                    </div>

                  </div>
                  <ReactApexChart options={options} series={series} type="radialBar" height="350" />

    </React.Fragment>
  )
}

export default ApexChart 
