import React, { useEffect, useState } from "react";

import {
    Alert,
    CardBody,
    Col,
    CardTitle,
    Row,
} from "reactstrap";


const PeopleToReach = () => {


    //meta title
    document.title = "Apex Charts | Skote - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <CardBody>
                <Alert color="warning" >
                    Araca Ulaşılamadığında Yetkililere Ulaşılması Zorunludur!
                </Alert>
                <div className="section-call">
                    <div className="d-flex call-item">
                        <div className="align-self-center me-3">
                            <div className="rounded-circle avatar-sm call-avatar">
                                M
                            </div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                            <h5 className="text-truncate font-size-14 mb-1">
                                Muratcan İlhan
                            </h5>
                            <p className="text-truncate mb-0">
                                Drivee
                            </p>
                        </div>
                        <div className="align-self-center me-3 call-icon">
                            <i className={"mdi mdi-phone font-size-18"} />
                        </div>
                    </div>

                </div>
                <div className="section-call drivee-offical">
                    <div className="d-flex call-item">

                        <div className="align-self-center me-3">
                            <div className="rounded-circle avatar-sm call-avatar">
                                M
                            </div>
                        </div>

                        <div className="flex-grow-1 overflow-hidden">
                            <h5 className="text-truncate font-size-14 mb-1">
                                Muratcan İlhan
                            </h5>
                            <p className="text-truncate mb-0">
                                Drivee
                            </p>
                        </div>
                        <div className="align-self-center me-3 call-icon">
                            <i className={"mdi mdi-phone font-size-18"} />
                        </div>
                    </div>
                </div>
                <div className="section-call drivee-offical">
                    <div className="d-flex call-item">

                        <div className="align-self-center me-3">
                            <div className="rounded-circle avatar-sm call-avatar">
                                M
                            </div>
                        </div>

                        <div className="flex-grow-1 overflow-hidden">
                            <h5 className="text-truncate font-size-14 mb-1">
                                Muratcan İlhan
                            </h5>
                            <p className="text-truncate mb-0">
                                Drivee
                            </p>
                        </div>
                        <div className="align-self-center me-3 call-icon">
                            <i className={"mdi mdi-phone font-size-18"} />
                        </div>
                    </div>
                </div>
                <div className="section-call drivee-offical">
                    <div className="d-flex call-item">

                        <div className="align-self-center me-3">
                            <div className="rounded-circle avatar-sm call-avatar">
                                M
                            </div>
                        </div>

                        <div className="flex-grow-1 overflow-hidden">
                            <h5 className="text-truncate font-size-14 mb-1">
                                Muratcan İlhan
                            </h5>
                            <p className="text-truncate mb-0">
                                Drivee
                            </p>
                        </div>
                        <div className="align-self-center me-3 call-icon">
                            <i className={"mdi mdi-phone font-size-18"} />
                        </div>
                    </div>
                </div>
                <div className="section-call">
                    <div className="d-flex call-item">

                        <div className="align-self-center me-3">
                            <div className="rounded-circle avatar-sm call-avatar">
                                M
                            </div>
                        </div>

                        <div className="flex-grow-1 overflow-hidden">
                            <h5 className="text-truncate font-size-14 mb-1">
                                Muratcan İlhan
                            </h5>
                            <p className="text-truncate mb-0">
                                Drivee
                            </p>
                        </div>
                        <div className="align-self-center me-3 call-icon">
                            <i className={"mdi mdi-phone font-size-18"} />
                        </div>
                    </div>
                </div>
                <div className="dvCalledPersonsPanel">
                    <hr></hr>
                    <CardTitle className="mb-3"><i className="fa-solid fa-phone-volume"></i> Aranılan Kişiler</CardTitle>
                    <Row>
                        <Col className="col-md-6 col-sm-6">
                            <div className="external-event text-white p-1 mb-2 called-people text-center drivee-offical">
                                Muratcan İlhan <br></br> 28.12.2023 15:45
                            </div>
                        </Col>
                        <Col className="col-md-6 col-sm-6"> <div className=" external-event text-white p-1 mb-2 called-people text-center drivee-offical">
                            Muratcan İlhan <br></br> 28.12.2023 15:45</div></Col>
                        <Col className="col-md-6 col-sm-6"> <div className=" external-event text-white p-1 mb-2 called-people text-center drivee-offical">
                            Muratcan İlhan <br></br> 28.12.2023 15:45</div></Col>
                        <Col className="col-md-6 col-sm-6"> <div className="bg-info external-event text-white p-1 mb-2 called-people text-center ">
                            Muratcan İlhan <br></br> 28.12.2023 15:45</div></Col>
                        <Col className="col-md-6 col-sm-6"> <div className="bg-info external-event text-white p-1 mb-2 called-people text-center ">
                            Muratcan İlhan <br></br> 28.12.2023 15:45</div></Col>
                    </Row>


                </div>


            </CardBody>

        </React.Fragment>
    )
}

export default PeopleToReach
