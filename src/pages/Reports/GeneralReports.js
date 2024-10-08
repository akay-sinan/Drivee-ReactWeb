import React, { useEffect, useState } from "react";

// import generalreports
import LineApexChart from "../AllCharts/apex/chartSalesYearly"

import BarChart from "../AllCharts/apex/distributionByCompany.js"
import PyramidChart from "../AllCharts/apex/chartDevicesFromFirmPyramidChart.js"
import DistributionByCars from "../AllCharts/apex/distributionByCars.js"
import DistributionByModelYears from "../AllCharts/apex/distributionByModelYears.js"
import DevicesInfosRadial from "../AllCharts/apex/DevicesInfosRadial.js"
import DailyDevicesAlert from "../AllCharts/apex/chartDevicesInfoPie.js"
import DailyDevicesForFirmAlert from "../AllCharts/apex/chartDevicesForFirmInfoPie.js"
import MiniWidget from "./../Dashboard-saas/mini-widget"
import SplineAreaV2 from "../AllCharts/apex/SplineAreaV2"
import CallCenterReport from "../Dashboard/CallCenterReport";

import ApexRadialDrivee from "../AllCharts/apex/ApexRadialDrivee"
import ApexRadialFirm from "../AllCharts/apex/ApexRadialFirm"
import CallCenterDailyRadial from "../AllCharts/apex/CallCenterDailyRadial"
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
import { Link } from "react-router-dom";
import classNames from "classnames";
//import Charts
import StackedColumnChart from "./StackedColumnChart";
import { getChartsData as onGetChartsData } from "../../store/actions";
//actions
import { getEarningChartsData } from "../../store/actions";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import ReactApexChart from "react-apexcharts"
//redux
import { useSelector, useDispatch } from "react-redux";

import { optionsAlerts, seriesAlerts, statusClasses } from "common/data/alert"
const GeneralReports = () => {
  const [activeTab, setactiveTab] = useState("1");
  const { chartsData } = useSelector(state => ({
    chartsData: state.Dashboard.chartsData
  }));




  const [periodData, setPeriodData] = useState([]);
  const [periodType, setPeriodType] = useState("yearly");
  const [seletedMonth, setSeletedMonth] = useState("jan");
  const dispatch = useDispatch();
  useEffect(() => {
    setPeriodData(chartsData);
  }, [chartsData]);


  const onChangeMonth = value => {
    setSeletedMonth(value);
    dispatch(getEarningChartsData(value));
  };

  useEffect(() => {

    dispatch(onGetChartsData("yearly"));
    dispatch(getEarningChartsData("2"));
  }, [dispatch]);


  //meta title
  document.title = "Apex Charts | Skote - React Admin & Dashboard Template";
  const reports = [
    {
      icon: "mdi mdi-check-all",
      title: "Toplam Cihaz",
      value: "3000",
      badgeValue: "+ 500",
      color: "success",
      desc: "Geçen yıla göre",
    },
    {
      icon: "mdi mdi-check-all",
      title: "Aktif Cihaz",
      value: "2510",
      badgeValue: "+ 250",
      color: "success",
      desc: "Geçen yıla göre",
    }
    ,
    {
      icon: "mdi mdi-check-all",
      title: "Stok Cihaz",
      value: "20",
      badgeValue: "+ 2",
      color: "success",
      desc: "Geçen yıla göre",
    }
  ];
  const reportsV2 = [
    { title: "Toplam Cihaz", iconClass: "bx-copy-alt", description: "1,235" },
    { title: "Aktif Cihaz", iconClass: "bx-archive-in", description: "1,000" },
    {
      title: "Pasif Cihaz",
      iconClass: "bx-purchase-tag-alt",
      description: "20",
    },
  ];
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Charts" breadcrumbItem="Raporlar" />

          <Row>
            <Col xl="12">
              <Row>
                {/* Reports Render */}
                <MiniWidget reports={reports} />
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <CallCenterReport />

            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={12}>

                  <Card>
                    <CardBody>
                      <Row>
                        <Col lg={12}>
                          <CardTitle className="mb-4 text-center">Ç.M. Uyarı Tamamlama Ortalaması (Günlük)</CardTitle>
                          <CallCenterDailyRadial />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Col>

                <Col lg={12}>
                  <Card>
                    <CardBody>
                      <CardTitle className="mb-4">Sürücü Puan Raporu</CardTitle>
                      <Row>
                        <Col lg={6} className="mt-4">
                          <ApexRadialDrivee />
                        </Col>
                        <Col lg={6}>
                          <div className="clearfix">
                            <div className="float-end">
                              <div className="input-group input-group-sm">
                                <select
                                  className="form-select form-select-sm"
                                  value={seletedMonth}
                                  onChange={(e) => {
                                    onChangeMonth(e.target.value);
                                  }}

                                >
                                  <option value="1">Firma A</option>
                                  <option value="2">Firma B</option>
                                  <option value="3">Firma C</option>
                                  <option value="4">Firma D</option>
                                </select>
                                {/* <div className="input-group-append"> */}
                                <label className="input-group-text">Firma</label>
                                {/* </div> */}
                              </div>
                            </div>

                          </div>
                          <ApexRadialFirm />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                  <Card>
                    <CardBody>
                      <CardTitle className="mb-4">Cihazlar (Aktif-Pasif) V1</CardTitle>

                      <DevicesInfosRadial />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Cihazların Firmalara Göre Dağılımı V1</CardTitle>
                  <BarChart />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Cihazların Markalara Göre Dağılımı V1</CardTitle>
                  <div className="checkout-tabs">
                    <Row>
                      <Col lg="12">
                        <Nav className="flex-row side-by-side-nav" pills>
                          <NavItem>
                            <NavLink
                              className={classNames({ active: activeTab === "1" })}
                              onClick={() => {
                                setactiveTab("1");
                              }}
                            >
                              <i className="bx bx-car d-block check-nav-icon mt-4 mb-2" />
                              <p className="font-weight-bold mb-4">Markaya Göre</p>
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={classNames({ active: activeTab === "2" })}
                              onClick={() => {
                                setactiveTab("2");
                              }}
                            >
                              <i className="bx bx-calendar d-block check-nav-icon mt-4 mb-2" />
                              <p className="font-weight-bold mb-4">Model Yılına Göre</p>
                            </NavLink>
                          </NavItem>
                        </Nav>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="12">
                        <Card>
                          <CardBody>
                            <TabContent activeTab={activeTab}>
                              <TabPane tabId="1">
                                <DistributionByCars />

                              </TabPane>
                              <TabPane tabId="2">
                                <DistributionByModelYears />

                              </TabPane>
                            </TabContent>
                          </CardBody>
                        </Card>
                      </Col>

                    </Row>
                  </div>
                </CardBody>
              </Card>
            </Col>

          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-4">Yıllara yada Aylara göre yeni eklenmiş cihaz-araç sayısı</CardTitle>

                  <LineApexChart />

                </CardBody>
              </Card>
            </Col>

          </Row>

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <div className="d-sm-flex flex-wrap">
                    <h4 className="card-title mb-4">Uyarıların Firmaya Göre Dağılımı
                    </h4>
                    {/* <div className="ms-auto">
                      <ul className="nav nav-pills">
                        <li className="nav-item">
                          <Link
                            to="#"
                            className={classNames(
                              { active: periodType === "weekly" },
                              "nav-link"
                            )}
                            onClick={() => {
                              onChangeChartPeriod("weekly");
                            }}
                            id="one_month"
                          >
                            Week
                          </Link>{" "}
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#"
                            className={classNames(
                              { active: periodType === "monthly" },
                              "nav-link"
                            )}
                            onClick={() => {
                              onChangeChartPeriod("monthly");
                            }}
                            id="one_month"
                          >
                            Month
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            to="#"
                            className={classNames(
                              { active: periodType === "yearly" },
                              "nav-link"
                            )}
                            onClick={() => {
                              onChangeChartPeriod("yearly");
                            }}
                            id="one_month"
                          >
                            Year
                          </Link>
                        </li>
                      </ul>
                    </div> */}
                  </div>
                  {/* <div className="clearfix"></div> */}
                  <StackedColumnChart periodData={periodData} />
                </CardBody>
              </Card>

            </Col>

          </Row>
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle className="mb-3">Yıl bazında uyarı-tamamlanma oranı  </CardTitle>
                  <ReactApexChart
                    options={optionsAlerts}
                    series={seriesAlerts}
                    type="line"
                    height={380}
                    className="apex-charts"
                  />
                </CardBody>
              </Card>


            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default GeneralReports
