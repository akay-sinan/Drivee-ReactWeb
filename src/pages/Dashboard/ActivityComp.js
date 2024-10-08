import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

const ActivityComp = () => {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle className="mb-5">Son Sinyaller</CardTitle>
          <ul className="verti-timeline list-unstyled">
            <li className="event-list">
              <div className="event-timeline-dot">
                <i className="bx bx-right-arrow-circle font-size-18" />
              </div>
              <div className="d-flex">
                <div className="me-3">
                  <h5 className="font-size-14">
                    22 Nov{" "}
                    <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                  </h5>
                </div>
                <div className="flex-grow-1">
                  <div>34ABC123 plakalı araç</div>
                </div>
              </div>
            </li>

            <li className="event-list">
              <div className="event-timeline-dot">
                <i className="bx bx-right-arrow-circle font-size-18" />
              </div>
              <div className="d-flex">
                <div className="me-3">
                  <h5 className="font-size-14">
                    17 Nov{" "}
                    <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                  </h5>
                </div>
                <div className="flex-grow-1">
                  <div id="activitytext">
                  34ABC124 plakalı araç<Link to="#">Detay</Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="event-list active">
              <div className="event-timeline-dot">
                <i className="bx bxs-right-arrow-circle font-size-18 bx-fade-right" />
              </div>
              <div className="d-flex">
                <div className="me-3">
                  <h5 className="font-size-14">
                    15 Nov{" "}
                    <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                  </h5>
                </div>
                <div className="flex-grow-1">
                  <div> 34ABC124 plakalı araç<Link to="#">Detay</Link></div>
                </div>
              </div>
            </li>
            <li className="event-list">
              <div className="event-timeline-dot">
                <i className="bx bx-right-arrow-circle font-size-18" />
              </div>
              <div className="d-flex">
                <div className="me-3">
                  <h5 className="font-size-14">
                    12 Nov{" "}
                    <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                  </h5>
                </div>
                <div className="flex-grow-1">
                  <div> 34ABC125 plakalı araç</div>
                </div>
              </div>
            </li>
          </ul>
          <div className="text-center mt-4">
            <Link
              to=""
              className="btn btn-primary  btn-sm"
            >
              Daha Fazlası <i className="mdi mdi-arrow-right ms-1" />
            </Link>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ActivityComp;