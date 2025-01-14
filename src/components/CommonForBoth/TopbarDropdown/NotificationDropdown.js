import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, Row, Col } from "reactstrap";
import SimpleBar from "simplebar-react";

//Import images
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../assets/images/users/avatar-4.jpg";

//i18n
import { withTranslation } from "react-i18next";

const NotificationDropdown = props => {
  // Declare a new state variable, which we'll call "menu"
  const [menu, setMenu] = useState(false);

  return (
    <React.Fragment>
      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        className="dropdown d-inline-block"
        tag="li"
      >
        <DropdownToggle
          className="btn header-item noti-icon"
          tag="button"
          id="page-header-notifications-dropdown"
        >
          <i className="bx bx-bell bx-tada" />
          <span className="badge bg-danger rounded-pill">3</span>
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0">
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0">Bildirimler</h6>
              </Col>
              <div className="col-auto">
                <a href="#" className="small">
                  {" "}
                  Hepsi
                </a>
              </div>
            </Row>
          </div>

          <SimpleBar style={{ height: "230px" }}>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-danger rounded-circle font-size-16">
                  <i className="fa-duotone fa-car-burst"></i>
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">
                  Kaza - 5DCE32C4
                  </h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                    34DCC846
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />{" "}
                     
                      {props.t("3 min ago")}{" "} 
                      <br></br>
                      22.07.2042 04:42:29	
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
              <div className="avatar-xs me-3">
                  <span className="avatar-title bg-success rounded-circle font-size-16">
                  <i className="fa-solid fa-signal-stream-slash"></i>
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Cihaz Sökülme Uyarısı	- 5DCE32C4</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                    34DCC846
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />
                      {props.t("1 hours ago")}{" "} 
                      <br>
                      </br>
                      22.07.2042 04:42:29	
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <Link to="" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-primary rounded-circle font-size-16">
                  <i className="fa-duotone fa-bell-concierge"></i>
                  </span>
                </div>
                <div className="flex-grow-1">
                  <h6 className="mt-0 mb-1">Concierge Çağrısı	- 5DCE32C4</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">
                    34DCC846
                    </p>
                    <p className="mb-0">
                      <i className="mdi mdi-clock-outline" />
                      {props.t("1 hours ago")}{" "}
                      <br>
                      </br>
                      22.07.2042 04:42:29	
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </SimpleBar>
          <div className="p-2 border-top d-grid">
            <Link className="btn btn-sm btn-link font-size-14 text-center" to="#">
              <i className="mdi mdi-arrow-right-circle me-1"></i> <span key="t-view-more">Hepsi</span>
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default withTranslation()(NotificationDropdown);

NotificationDropdown.propTypes = {
  t: PropTypes.any
};