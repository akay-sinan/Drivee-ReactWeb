import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import Pie from "./../AllCharts/echart/pieChartDailyAlert"
const DailyDevicesAlert = props => {
  

  return (
    <React.Fragment>
      
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Günlük Uyarılar</h4>

            <Pie />
          </CardBody>
        </Card>
      
    </React.Fragment>
  );
};

export default DailyDevicesAlert;
