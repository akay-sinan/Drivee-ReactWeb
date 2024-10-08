import React, { useEffect, useState, useMemo, useRef } from "react";
import { HubConnectionBuilder } from '@microsoft/signalr';
import Moment from 'moment';

import Select from "react-select";
import {
    Card,
    Col,
    Table,
    Row,
    CardBody,
    CardTitle,
    Modal,
    Badge
} from "reactstrap";

import parse from 'html-react-parser';
import Chat from './Chat';

//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";
import wavFile from '../../assets/sounds/emergencyAlarm2.mp3';
const audio = new Audio(wavFile);
let idCounter = 4;
const CallCenter = () => {
    const [visible, setVisible] = useState(false);
    const [alert, setAlert] = useState([
        {
            "type": "alert-crash",
            "code": 0,
            "warningdate": "17.01.2023",
            "firm": "Otto",
            "driver": "Sinan",
            "plate": "34ABC123",
            "alerttype": Math.floor(Math.random() * (4 - 1 + 1)) + 1,
            "processingdate": "17.01.2023",
            "completiondate": "17.01.2023",
            "completiontime": "17.01.2023",
            "status": Math.floor(Math.random() * (3 - 1 + 1)) + 1,
            "callcenter": "1"
        }
    ]);
    const latestAlert = useRef(null);
    const [tableData, setTableData] = useState([]);

    latestAlert.current = alert;

    const clickVoice = () => {
        audio.play();
    }
    const pauseVoice = () => {
        audio.pause();
    }

    function tog_backdrop() {
        setmodal_backdrop(!modal_backdrop);
        removeBodyCss();
    }
    function removeBodyCss() {
        document.body.classList.add("no_padding");
    }


    const addNewRow = () => {
        idCounter += 1
        const newRow = {
            "type": "alert-crash",
            "code": idCounter,
            "warningdate": "17.01.2023",
            "firm": "Otto",
            "driver": "Sinan",
            "plate": "34ABC123",
            "alerttype": Math.floor(Math.random() * (4 - 1 + 1)) + 1,
            "processingdate": "17.01.2023",
            "completiondate": "17.01.2023",
            "completiontime": "17.01.2023",
            "status": Math.floor(Math.random() * (3 - 1 + 1)) + 1,
            "callcenter": "1"
        };
        const updatedAlert = [...latestAlert.current];
        setAlert([newRow, ...updatedAlert]);
        clickVoice();
    };

    useEffect(() => {
        setVisible(true);
        const connection = new HubConnectionBuilder()
            .withUrl('http://localhost:5273/hubs/chat')
            .withAutomaticReconnect()
            .build();

        connection.start()
            .then(result => {
                console.log('Connected!');

                connection.on('CallCenter', newAlert => {

                    const updatedAlert = [...latestAlert.current];
                    idCounter += 1
                    const newRow = {
                        "type": "alert-crash",
                        "code": idCounter,
                        "warningdate": Moment(newAlert.alertDate).format('DD.MM.yyyy'),
                        "firm": newAlert.firm,
                        "driver": newAlert.driver,
                        "plate": newAlert.plate,
                        "alerttype": Math.floor(Math.random() * (4 - 1 + 1)) + 1,
                        "processingdate":  Moment(newAlert.processingDate).format('DD.MM.yyyy'),
                        "completiondate": Moment(newAlert.completionDate).format('DD.MM.yyyy'),
                        "completiontime": Moment(newAlert.completionTime).format('DD.MM.yyyy'),
                        "status": Math.floor(Math.random() * (3 - 1 + 1)) + 1,
                        "callcenter": "1"
                    };

                    setAlert([newRow, ...updatedAlert]);
                    clickVoice();
                    console.log(newAlert)
                });
            })
            .catch(e => console.log('Connection failed: ', e));
    }, [])
    //meta title
    document.title = "Apex Charts | Skote - React Admin & Dashboard Template";

    return (
        <React.Fragment>

            <Modal
                isOpen={visible}
                toggle={() => {
                    tog_backdrop();
                }}
                backdrop={'static'}
                id="staticBackdrop"
                className='modal-lg modal-dialog-centered'
            >
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Ses Testi Yap!</h5>
                    <button type="button" className="btn-close"
                        onClick={() => {
                            setVisible(false);
                        }} aria-label="Close"></button>
                </div>
                <div className="modal-body text-center" style={{ padding: "55px 15px" }}>
                    <button onClick={clickVoice} className="btn btn-success btn-lg mb-5" >
                        <i className="fa-regular fa-play fa-3x"></i>

                    </button>
                    <h3>Ses butonuna tıkladığınızda ses gelmediğini düşünüyorsanız, (CTRL + F5) yaparak sayfayı bir kere yenileyiniz.
                    </h3>
                    <h3>Yine gelmediyse lütfen yöneticinize iletiniz.</h3>
                </div>
                <div className="modal-footer">

                    <button type="button" className="btn btn-primary btn-lg" onClick={() => {
                        setVisible(false);
                    }}>Anlaşıldı</button>
                </div>
            </Modal>
            <div className="page-content">
                <div className="container-fluid">
                    {/* <Chat /> */}
                    {/* <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <Label htmlFor="formrow-firstname-Input">Araç</Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        id="formrow-firstname-Input"
                                                        placeholder="34ABC123"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <Label>Uyarı Türü</Label>
                                                    <Select
                                                     placeholder='Seçiniz'
                                                        value={selectedGroup}
                                                        onChange={() => {
                                                            handleSelectGroup();
                                                        }}
                                                        options={optionType}
                                                        classNamePrefix="select2-selection"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <Label>Uyarı Durumu</Label>
                                                    <Select
                                                     placeholder='Seçiniz'
                                                        value={selectedGroup}
                                                        onChange={() => {
                                                            handleSelectGroup();
                                                        }}
                                                        options={optionStatus}
                                                        classNamePrefix="select2-selection"
                                                    />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="mb-3">
                                                    <Label htmlFor="formrow-firstname-Input">Çağrı Merkezi</Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        id="formrow-firstname-Input"
                                                        placeholder=""
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <Label htmlFor="formrow-firstname-Input">Firma</Label>
                                                    <Input
                                                        type="text"
                                                        className="form-control"
                                                        id="formrow-firstname-Input"
                                                        placeholder=""
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <Label>Tarih Aralığı</Label>

                                                    <InputGroup>
                                                        <Flatpickr
                                                            className="form-control d-block"
                                                            placeholder="d.m.Y"
                                                            options={{
                                                                altInput: true,
                                                                altFormat: "d.m.Y",
                                                                dateFormat: "d.m.Y",
                                                                defaultDate: "today"
                                                            }}
                                                        />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">
                                                                <i className="mdi mdi-swap-horizontal" />
                                                            </span>
                                                        </div>
                                                        <Flatpickr
                                                            className="form-control d-block"
                                                            placeholder=""
                                                            options={{
                                                                altInput: true,
                                                                altFormat: "d.m.Y",
                                                                dateFormat: "d.m.Y"
                                                            }}
                                                        />
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">
                                                                <i className="mdi mdi-clock-outline" />
                                                            </span>
                                                        </div>
                                                    </InputGroup>
                                                </div>
                                            </Col>
                                        </Row>
                                        <div><button type="submit" className="btn btn-primary w-md" style={{ float: "right" }}>Listele</button></div>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>

                    </Row> */}
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody className='border-bottom'>
                                    <CardTitle className='font-size-16 mb-0'>
                                        <div className="float-end dropdown">
                                            <button onClick={clickVoice} className="btn btn-primary btn-lg mr-3" style={{ background: "transparent", color: "#556ee6", border: "none" }}>
                                                <i className="fa-regular fa-play fa-2x"></i>

                                            </button>
                                            {/* <button onClick={pauseVoice} className="btn btn-primary btn-lg" style={{ background: "transparent", color: "#556ee6", border: "none" }}>
                                                <i className="fa-regular fa-pause fa-2x"></i>

                                            </button> */}
                                        </div>
                                        <div> Ses Testi Yap</div>
                                    </CardTitle>
                                </CardBody>
                                {/* <CardBody><button onClick={clickVoice} className="btn btn-primary btn-lg mr-3" style={{ background: "transparent", color: "#556ee6", border: "none" }}>
                                    <i className="fa-regular fa-play fa-2x"></i>

                                </button>
                                    <button onClick={pauseVoice} className="btn btn-primary btn-lg" style={{ background: "transparent", color: "#556ee6", border: "none" }}>
                                        <i className="fa-regular fa-pause fa-2x"></i>

                                    </button>
                                </CardBody> */}
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <div className="table-responsive">
                                {/* <TableContainer
                    columns={columns}
                    data={data}
                    isGlobalFilter={true}
                    isAddOptions={true}
                    customPageSize={10}
                    className="table mb-0 table-bordered text-center align-middle font-size-14 mb-5"
                /> */}


                                <button onClick={addNewRow}>Yeni Satır Ekle</button>

                                <Table className="table mb-0 table-bordered text-center align-middle font-size-14 table-alerts">
                                    <thead className="table-light">
                                        <tr>
                                            <th>İşlem Kodu</th>
                                            <th>Uyarı Tarihi</th>
                                            <th>Firma</th>
                                            <th>Sürücü Adı</th>
                                            <th>Plaka</th>
                                            <th>Uyarı Türü</th>
                                            <th>İşleme Alma Tarihi</th>
                                            <th>İşlem Tamamlanma Tarihi</th>
                                            <th>Tamamlanma Süresi</th>
                                            <th>Durum</th>
                                            <th>Ç.Merkezi Firma</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {alert.map((row) => (
                                            <tr key={row.code} className={row.type}>
                                                <td>{row.code}</td>
                                                <td>{row.warningdate}</td>
                                                <td>{row.firm}</td>
                                                <td>{row.driver}</td>
                                                <td><b>{row.plate}</b> </td>
                                                <td className="text-left">{
                                                    row.alerttype == 4 ? <Badge
                                                        className={"font-size-14 badge-soft-success flex-center-left bg-transparent"} pill> <i className="fa-regular fa-plug-circle-bolt  fa-2x mr-3"></i> Cihaz Sökülme
                                                    </Badge>
                                                        :
                                                        row.alerttype == 2 ? <Badge
                                                            className={"font-size-14 badge-soft-danger flex-center-left bg-transparent"}
                                                            pill
                                                        >
                                                            <i className='fas fa-car-crash fa-2x  mr-3'></i> Kaza
                                                        </Badge>
                                                            :
                                                            row.alerttype == 3 ? <Badge
                                                                className={"font-size-14 badge-soft-warning flex-center-left bg-transparent"}
                                                                pill
                                                            >
                                                                <i className="fa-duotone fa-light-emergency-on fa-2x mr-3"></i>
                                                                Acil Yardım
                                                            </Badge> :
                                                                row.alerttype == 1 ? <Badge
                                                                    className={"font-size-14 badge-soft-info flex-center-left bg-transparent"}
                                                                    pill
                                                                >
                                                                    <i className="fa-duotone fa-user-tie fa-2x mr-3"></i> Concierge
                                                                </Badge> : ""

                                                }</td>
                                                <td>{row.firm}</td>
                                                <td>{row.processingdate}</td>
                                                <td>{row.completiondate}</td>
                                                <td>{
                                                    row.status == 3 ? <Badge className='font-size-14 badge-soft-primary flex-center p-2 badge rounded-pill'>İşlemde </Badge>
                                                        : row.status == 2 ? <Badge className='font-size-14 badge-soft-secondary text-decoration-line-through flex-center p-2 rounded-pill'>Çözümlendi </Badge>
                                                            : row.status == 1 ? <Badge className={"font-size-14 badge-soft-danger flex-center p-2"} pill> Bekliyor</Badge> : ""
                                                }
                                                </td>
                                                <td>{
                                                    row.callcenter == 1 ? <img className="callCenterImg" width={45} src="https://www.g4s.com/tr-tr/-/media/g4s/global/images/circles-154x154/logos/logo.ashx?h=148&la=tr-TR&w=148&hash=C135CDD4CB7187C5FA05D4AC4CA8D2FC"></img>
                                                        :
                                                        row.callcenter == 2 ? <img className="callCenterImg" width={45} src="https://www.drivee.io/wp-content/uploads/2023/10/Drivee_Ana_Logo.v02.png"></img> : ""

                                                }</td>

                                            </tr>
                                        ))}
                                        {/* <tr className="alert-crash">
                                            <td >1</td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td><b>34abc123</b></td>
                                            <td> <Badge
                                                className={"font-size-14 badge-soft-danger flex-center bg-transparent"}
                                                pill
                                            >
                                                <i className='fas fa-car-crash fa-2x  mr-3'></i> Kaza
                                            </Badge></td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td> <Badge
                                                className={"font-size-14 badge-soft-secondary text-decoration-line-through flex-center p-2"}
                                                pill
                                            >
                                                Çözümlendi
                                            </Badge></td>
                                            <td>G4S</td>
                                        </tr>
                                        <tr className="alert-warning">
                                            <td >2</td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td><b>34abc123</b></td>

                                            <td> <Badge
                                                className={"font-size-14 badge-soft-warning flex-center bg-transparent"}
                                                pill
                                            >
                                                <i className="fa-regular fa-hand-heart fa-2x mr-3"></i>
                                                Acil Yardım
                                            </Badge></td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td> <Badge
                                                className={"font-size-14 badge-soft-primary flex-center p-2 badge rounded-pill"}
                                                pill
                                            >
                                                İşlemde
                                            </Badge></td>
                                            <td>G4S</td>
                                        </tr>
                                        <tr >
                                            <td >3</td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td><b>34abc123</b></td>

                                            <td>
                                                <Badge
                                                    className={"font-size-14 badge-soft-success flex-center bg-transparent"}
                                                    pill
                                                >
                                                    <i className="fa-regular fa-plug-circle-bolt  fa-2x mr-3"></i> Cihaz Sökülme
                                                </Badge></td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td> <Badge
                                                className={"font-size-14 badge-soft-danger flex-center p-2"}
                                                pill
                                            >
                                                Bekliyor
                                            </Badge></td>
                                            <td>G4S</td>
                                        </tr>
                                        <tr>
                                            <td >4</td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td><b>34abc123</b></td>
                                            <td> <Badge
                                                className={"font-size-14 badge-soft-info flex-center bg-transparent"}
                                                pill
                                            >
                                                <i className="fa-regular fa-hand-point-up fa-2x mr-3"></i> Concierge
                                            </Badge></td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>{new Date().toLocaleString() + ""}</td>
                                            <td> <Badge
                                                className={"font-size-14 badge-soft-danger flex-center p-2"}
                                                pill
                                            >
                                                Bekliyor
                                            </Badge></td>
                                            <td>G4S</td>
                                        </tr>
                                        <tr className="alert-crash">
                                            <td >4</td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td><b>34abc123</b></td>
                                            <td> <Badge
                                                className={"font-size-14 badge-soft-danger flex-center bg-transparent"}
                                                pill
                                            >
                                                <i className='fas fa-car-crash fa-2x  mr-3'></i> Kaza
                                            </Badge></td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td>{new Date().toLocaleString() + ""}
                                            </td>
                                            <td> <Badge
                                                className={"font-size-14 badge-soft-secondary text-decoration-line-through flex-center p-2"}
                                                pill
                                            >
                                                Çözümlendi
                                            </Badge></td>
                                            <td>G4S</td>
                                        </tr> */}
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CallCenter
