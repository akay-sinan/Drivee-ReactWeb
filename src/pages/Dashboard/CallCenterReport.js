import React from "react"
import { Card, CardBody, CardTitle, Progress } from "reactstrap"
import LatestTranaction from "./LatestTranaction";
const TopCities = () => {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Çağrı Merkezi Rapor (Günlük)</CardTitle>
          <div className="text-center">

            <div className="justify-content-center row">
              <div className="col-sm-4">
                <div className="text-center">
                  <h5 className="mb-0 font-size-20">1,456</h5>
                
                  <p className="rounded-pill badge-soft-success">Toplam Uyarı</p>
                  <span className="badge badge-soft-danger font-size-12"> + 15 </span>
                  <span className="ms-2 text-truncate">Düne Göre</span>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="text-center">
                  <h5 className="mb-0 font-size-20">4</h5> 
                  <p className="rounded-pill badge-soft-danger">Bildirilmiş Gerçek Kaza</p>
                 
                </div>
              </div>
              <div className="col-sm-4">
                <div className="text-center">
                  <h5 className="mb-0 font-size-20">1.3 dakika</h5>
                  <p className="rounded-pill badge-soft-success ">Uyarı Kapatma Süresi</p>
                </div>
              </div>

            </div>
<hr></hr>
            <div className="mt-4 row">
            <p className="mb-4 text-center">En Fazla Uyarı Veren Firma</p>

              <div className="col-4">
                <div className="social-source text-center mt-3">
                  <div className="avatar-xs mx-auto mb-3">
                    <span className="avatar-title rounded-circle bg-info font-size-16">
                      <i className="mdi mdi-office-building-outline text-white"></i>
                    </span>
                  </div>
                  <h5 className="font-size-15">A Firma</h5>
                  <p className="text-muted mb-0">Total: 125 </p>
                </div>
              </div>
              <div className="col-4">
                <div className="social-source text-center mt-3">
                  <div className="avatar-xs mx-auto mb-3">
                    <span className="avatar-title rounded-circle bg-info font-size-16">
                      <i className="mdi mdi-office-building-outline text-white"></i>
                    </span>
                  </div>
                  <h5 className="font-size-15">B Firma</h5>
                  <p className="text-muted mb-0">Total: 112</p>
                </div>
              </div>
              <div className="col-4">
                <div className="social-source text-center mt-3">
                  <div className="avatar-xs mx-auto mb-3">
                    <span className="avatar-title rounded-circle bg-info font-size-16">
                      <i className="mdi mdi-office-building-outline text-white"></i>
                    </span>
                  </div>
                  <h5 className="font-size-15">C Firma</h5>
                  <p className="text-muted mb-0">Total: 104</p>
                </div>
              </div>
            </div>

          </div>
         
          <div className="table-responsive mt-4">
            <table className="table align-middle table-nowrap">
              <tbody>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Kaza</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <h5 className="mb-0">150</h5>
                  </td>
                  <td>
                    <Progress
                      value="94"
                      color="danger"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-0">Acil Yardım</p>
                  </td>
                  <td>
                    <h5 className="mb-0">250</h5>
                  </td>
                  <td>
                    <Progress
                      value="82"
                      color="success"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-0">Concierge</p>
                  </td>
                  <td>
                    <h5 className="mb-0">45</h5>
                  </td>
                  <td>
                    <Progress
                      value="70"
                      color="primary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-0">Cihaz Sökme</p>
                  </td>
                  <td>
                    <h5 className="mb-0">15</h5>
                  </td>
                  <td>
                    <Progress
                      value="70"
                      color="warning"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
           <hr></hr>
          <LatestTranaction />
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default TopCities
