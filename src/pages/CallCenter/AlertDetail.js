import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";


import {
    Alert,
    Col,
    Table,
    Row,
    Badge,
    Card,
    CardBody,
    CardTitle,
    UncontrolledTooltip,
    Input,
    Label,
    Modal
} from "reactstrap";
import PeopleToReach from "./PeopleToReach";
const LoadingContainer = () => <div>Loading...</div>

const AlertDetail = props => {
    const [selectedGroup, setselectedGroup] = useState(null);
    const [textareabadge, settextareabadge] = useState(0);
    const [textcount, settextcount] = useState(0);
    const [visible, setVisible] = useState(false);

    const moveStatus = [
        {
            label: "Durum",
            options: [
                { label: "Yola Devam Ediyor", value: "1" },
                { label: "Yola Devam Etmiyor", value: "2" }

            ]
        }
    ];
    const callStatus = [
        {
            label: "Durum",
            options: [
                { label: "Ulaşıldı", value: "1" },
                { label: "Ulaşılamadı", value: "2" }

            ]
        }
    ];
    const carInfo = [
        {
            label: "Bilgi",
            options: [
                { label: "Bilgi", value: "1" },
                { label: "Lastik", value: "2" },
                { label: "Çekici", value: "3" }


            ]
        }
    ];
    const {
        match: { params },
    } = props;
    const selectedPlace = {};

    function removeBodyCss() {
        document.body.classList.add("no_padding");
    }
    function textareachange(event) {
        const count = event.target.value.length;
        if (count > 0) {
            settextareabadge(true);
        } else {
            settextareabadge(false);
        }
        settextcount(event.target.value.length);
    }
    function tog_backdrop() {
        setmodal_backdrop(!modal_backdrop);
        removeBodyCss();
    }
   
    useEffect(() => {
      
     
        let pop_status = localStorage.getItem('pop_status');
        console.log(pop_status)
        if (!pop_status) {
            setVisible(true);
            localStorage.setItem('pop_status', true);
        }     

        
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
                    <h5 className="modal-title" id="staticBackdropLabel">Bilgilendirme</h5>
                    <button type="button" className="btn-close"
                        onClick={() => {
                            setVisible(false);
                        }} aria-label="Close"></button>
                </div>
                <div className="modal-body text-center" style={{ padding: "55px 15px" }}>
                    <h3>Drivee'den size ulaşıyorum. </h3>
                    <h3>Aracınızdan <b>Kaza Alarmı</b> aldım. Size nasıl yardımcı olabilirim?</h3>
                </div>
                <div className="modal-footer">

                    <button type="button" className="btn btn-primary btn-lg" onClick={() => {
                        setVisible(false);
                    }}>Anlaşıldı</button>
                </div>
            </Modal>
            <div className="call-detail-head">
                <div className="head-left crash">
                    <div className="secBox">
                        <div className="txt2 text-center">
                            
                            <i className='fas fa-car-crash fa-3x  mb-2'></i>
                            {/* <i className='fa-regular fa-hand-heart fa-3x  mb-2'></i>

                            <i className="fa-regular fa-bell-concierge fa-3x mb-2"></i>
                            <i className="fa-regular fa-plug-circle-bolt  fa-3x mb-2"></i>  */}
                            {/* <p>C70D77AA</p> */}
                            <p >26.12.2023 15:34
                            </p>
                        </div>
                    </div>
                    <div className="outer">

                        <div className="inner"></div>
                    </div>
                    <div className="secBox">
                        <div className="txt2">
                            <h3 style={{ color: "white" }}>34 ABC 123</h3>
                        </div>
                    </div>
                    <div className="outer">
                        <div className="inner"></div>
                    </div>
                    <div className="secBox">
                        <b>Araç Marka/Model/Renk
                        </b>
                        <p>VOLKSWAGEN  AMAROK  2.0 BiTDI 180 EXLUSIVE 4x4 OV
                        </p>
                    </div>

                </div>
                <div className="head-right d-flex call-right-icons">
                    <div className='call-icon green'>
                        <i className={"mdi mdi-phone font-size-36"} />
                        <div>Cihazı Ara</div>
                    </div>
                    <div className='call-icon blue'>
                        <i className={"mdi mdi-phone font-size-36"} />
                        <div>Sürücüyü Ara</div>
                    </div>



                </div>
            </div>
            <div className='call-detail-hDetail'>
                <p className='font-size-20'>Drivee'den size ulaşıyorum. Aracınızdan <b>Kaza Alarmı</b> aldım. Size nasıl yardımcı olabilirim?</p>
            </div>
            <div className="page-content" style={{ paddingBottom: "250px", paddingTop: "50px" }}>
                <div className="container-fluid">
                    <Row className='mb-5'>
                        <Col lg="8" md="12" sm="12">
                            <Card>
                                <CardBody className='border-bottom'>
                                    <CardTitle className='font-size-16 mb-0'><i className="fa-regular fa-list-check"></i> Eylem Akışı</CardTitle>
                                </CardBody>
                                <CardBody>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-3 align-self-center"
                                        >
                                            Uyarı Türü / Kodları
                                        </label>
                                        <div className="col-md-9 sec-alert">
                                            <Badge className="badge-soft-danger alert font-size-14 rounded-pill  mr-3" >
                                                Kaza
                                            </Badge>
                                            <Badge className="badge-soft-primary alert font-size-14 rounded-pill mr-3" >
                                                Concierge
                                            </Badge>
                                            <Badge className="badge-soft-warning alert font-size-14 rounded-pill mr-3" >
                                                Acil Yardım
                                            </Badge>
                                            <Badge className="badge-soft-success alert font-size-14 rounded-pill mr-3" >
                                                Cihaz Sökülme
                                            </Badge>
                                            <span className='mr-3'>|</span>
                                            <Badge className="badge-soft-primary alert font-size-14 rounded-pill" >
                                                Uzunlamasına Ön Çarpma
                                            </Badge>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-3 align-self-center"
                                        >
                                            <span className='mr-3'>Araç Son Durum</span>
                                            <i id="live" className="fa fa-exclamation-triangle icon-animated-bell text-warning font-size-16"></i>
                                            <UncontrolledTooltip
                                                placement="top"
                                                target={"live"}
                                            >
                                                Canlı
                                            </UncontrolledTooltip>
                                        </label>

                                        <div className="col-md-9 sec-alert">
                                            <Badge className="badge-soft-secondary alert font-size-14 rounded-pill mr-3" >
                                                Kontak Kapalı
                                            </Badge>
                                            <Badge className="badge-soft-success alert font-size-14 rounded-pill mr-3" >
                                                Kontak Açık
                                            </Badge>
<span className='mr-3'>|</span>
                                            <Badge className="badge-soft-primary alert font-size-14 rounded-pill mr-3" >
                                                Hız : 0 km/s
                                            </Badge>
                                            <Badge className="badge-soft-primary alert font-size-14 rounded-pill mr-3" >
                                                Mesafe: 1234 metre
                                            </Badge>

                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-3 align-self-center"
                                        >
                                            Araç Hareketliliği
                                        </label>
                                        <div className="col-md-9">
                                            <Select
                                                placeholder='Seçiniz'
                                                value={selectedGroup}
                                                onChange={() => {
                                                    handleSelectGroup();
                                                }}
                                                options={moveStatus}
                                                classNamePrefix="select2-selection"
                                            />
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-3 align-self-center"
                                        >
                                            Araç İle İletişim
                                        </label>
                                        <div className="col-md-9">
                                            <Select
                                                placeholder='Seçiniz'
                                                value={selectedGroup}
                                                onChange={() => {
                                                    handleSelectGroup();
                                                }}
                                                options={callStatus}
                                                classNamePrefix="select2-selection"
                                            />
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-3 align-self-center"
                                        >
                                            Yetkililer İle İletişim
                                        </label>
                                        <div className="col-md-9">
                                            <Select
                                                placeholder='Seçiniz'
                                                value={selectedGroup}
                                                onChange={() => {
                                                    handleSelectGroup();
                                                }}
                                                options={callStatus}
                                                classNamePrefix="select2-selection"
                                            />
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-3 align-self-center"
                                        >
                                            Araç Hakkında Bilgi
                                        </label>
                                        <div className="col-md-9">
                                            <Select
                                                placeholder='Seçiniz'
                                                value={selectedGroup}
                                                onChange={() => {
                                                    handleSelectGroup();
                                                }}
                                                options={carInfo}
                                                classNamePrefix="select2-selection"
                                            />
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-3 align-self-center"
                                        >
                                            Verilen Hizmetler
                                        </label>
                                        <div className="col-md-9">
                                            <div className='d-flex sec-service flex-auto mb-3'>
                                                <div className='form-check'>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="chkService1"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="chkService1"
                                                    >
                                                        Çekici
                                                    </label>

                                                </div>
                                                <div className='form-check'>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="chkService2"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="chkService2"
                                                    >
                                                        İdari Hizmetler
                                                    </label>
                                                </div>
                                                <div className='form-check'>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="chkService3"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="chkService3"
                                                    >
                                                        Rezervasyon Hizmetleri
                                                    </label>
                                                </div>
                                                <div className='form-check'>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="chkService4"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="chkService4"
                                                    >
                                                        İdari Hizmetler
                                                    </label>
                                                </div>
                                                <div className='form-check'>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="chkService5"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="chkService5"
                                                    >
                                                        Diğer
                                                    </label>
                                                </div>
                                            </div>

                                            <Alert color="warning mr-3" >
                                                Not: Lütfen verilen hizmeti işaretleyerek kapatınız.
                                            </Alert>
                                        </div>
                                    </Row>
                                    <Row className='mb-3'>
                                        <hr>
                                        </hr>
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-3 align-self-center"
                                        >
                                            Açıklama
                                        </label>
                                        <div className="col-md-9">
                                            <Input
                                                type="textarea"
                                                id="textarea"
                                                onChange={e => {
                                                    textareachange(e);
                                                }}
                                                maxLength="225"
                                                rows="4"
                                                placeholder=""
                                            />
                                            {textareabadge ? (
                                                <span className="badgecount badge bg-primary">
                                                    {" "}
                                                    {textcount} / 225{" "}
                                                </span>
                                            ) : null}
                                        </div>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col sm="6">
                                            <Link
                                                to="/cagri-merkezi"
                                                className="btn btn-secondary btn-lg"
                                            >
                                                <i className="mdi mdi-arrow-left me-1" /> Geri Dön{" "}
                                            </Link>
                                        </Col>
                                        <Col sm="6" className='action-buttons'>
                                      
                                            <div className="text-sm-end mt-2 mt-sm-0">
                                                <button
                                                    
                                                    className="btn btn-success btn-lg"
                                                >
                                                    <i className="mdi mdi-check me-1" />{" "}
                                                    İşleme Al{" "}
                                                </button>
                                                
                                                {/* <button
                                                    
                                                    className="btn btn-success btn-lg mb-3"
                                                >
                                                    <i className="fa-regular fa-floppy-disk-circle-arrow-right me-1"></i>
                                                   
                                                    Kaydet{" "}
                                                </button> */}
                                                {/* <div className='flex-center-right'>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        value=""
                                                        id="chkCompleted"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="chkCompleted"
                                                    >
                                                        Çözümlendi
                                                    </label>

                                                </div> */}
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="4" md="12" sm="12">
                            <div>
                                <CardBody className='border-bottom'>
                                    <CardTitle className='font-size-16'><i className="fa-solid fa-phone-arrow-down-left"></i> Ulaşılacak Kişiler</CardTitle>
                                </CardBody>
                                <PeopleToReach></PeopleToReach>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mb-5'>

                        <Col lg={12}>
                            <ul className="rounded-tabs callRoundedHeadTop">
                                <li><span>
                                    <h4 style={{ paddingBottom: "0px", marginBottom: "0px" }}>Emek, Bosna Cd. No:173, 41420 Çayırova/Kocaeli, Türkiye
                                    </h4>
                                </span>
                                </li>

                            </ul>
                            <div
                                id="gmaps-markers"
                                className="gmaps"
                                style={{ position: "relative" }}
                            >
                                <Map
                                    google={props.google}
                                    style={{ width: "100%", height: "100%" }}
                                    zoom={14}
                                >
                                    <Marker
                                        title={"The marker`s title will appear as a tooltip."}
                                        name={"SOMA"}
                                        position={{ lat: 37.778519, lng: -122.40564 }}
                                    />
                                    <Marker name={"Dolores park"} />
                                    <InfoWindow>
                                        <div>
                                            <h1>{selectedPlace.name}</h1>
                                        </div>
                                    </InfoWindow>
                                </Map>
                            </div>

                        </Col>
                        {/* <Col lg={12}>
                            <ul className="rounded-tabs callRoundedHead">
                                <li><span>
                                    <h4 style={{ paddingBottom: "0px", marginBottom: "0px" }}>Emek, Bosna Cd. No:173, 41420 Çayırova/Kocaeli, Türkiye
                                    </h4>
                                </span>
                                </li>

                            </ul>
                        </Col> */}
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <hr></hr>
                        </Col>
                        <Col lg={6}>

                            <Card>
                                <CardBody>
                                    {/* <div>
                                        <p className="text-muted">
                                            <i className="fa fa-caret-right font-size-16 align-middle text-primary me-2"></i>
                                            Alerjik Durumu / Açıklama: Regular fit</p>
                                    </div> */}
                                    <table className="table mb-0 table-bordered table">
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="text-capitalize" >Doğum Tarihi / Yaş</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-capitalize" >Cinsiyet</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-capitalize" >Kan Grubu</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-capitalize" >Sağlık Sigorta firması ve Numarası</th>
                                                <td>-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>

                            <Card>
                                <CardBody>
                                    <table className="table mb-0 table-bordered table">
                                        <tbody>
                                            <tr>
                                                <th scope="row" className="text-capitalize" >Alerjik Durumu / Açıklama</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-capitalize" >Kronik Hastalıklar</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-capitalize" >Geçirdiği Operasyonlar</th>
                                                <td>-</td>
                                            </tr>
                                            <tr>
                                                <th scope="row" className="text-capitalize" >Kullandığı İlaçlar</th>
                                                <td>-</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>

                            <Card>
                                <CardBody>

                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-6 align-self-center font-size-16"
                                        >
                                            <i className="fa fa-caret-right font-size-20 align-middle text-primary me-2"></i> İşleme alan kişi
                                        </label>
                                        <div className="col-md-6">
                                            <p className='font-size-16'>ismail test</p>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-6 align-self-center font-size-16"
                                        >
                                            <i className="fa fa-caret-right font-size-20 align-middle text-primary me-2"></i> İşlemi tamamlayan kişi
                                        </label>
                                        <div className="col-md-6">
                                            <p className='font-size-16'>ismail test</p>
                                        </div>
                                    </Row>
                                    <Row className="">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-6 align-self-center font-size-16"
                                        >
                                            <i className="fa fa-caret-right font-size-20 align-middle text-primary me-2"></i> İşleme alınma süresi
                                        </label>
                                        <div className="col-md-6">
                                            <p className='font-size-16'>00:00:25</p>
                                        </div>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={6}>

                            <Card>
                                <CardBody>

                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-6 align-self-center font-size-16"
                                        >
                                            <i className="fa fa-caret-right font-size-20 align-middle text-primary me-2"></i> İşleme Alma Tarihi
                                        </label>
                                        <div className="col-md-6">
                                            <p className='font-size-16'>20.12.2023 22:45:55
                                            </p>
                                        </div>
                                    </Row>
                                    <Row className="mb-3">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-6 align-self-center font-size-16"
                                        >
                                            <i className="fa fa-caret-right font-size-20 align-middle text-primary me-2"></i> İşlemi Tamamlama Tarihi
                                        </label>
                                        <div className="col-md-6">
                                            <p className='font-size-16'>20.12.2023 22:48:37
                                            </p>
                                        </div>
                                    </Row>
                                    <Row className="">
                                        <label
                                            htmlFor="example-text-input"
                                            className="col-md-6 align-self-center font-size-16"
                                        >
                                            <i className="fa fa-caret-right font-size-20 align-middle text-primary me-2"></i> İşlemi tamamlama süresi
                                        </label>
                                        <div className="col-md-6">
                                            <p className='font-size-16'>00:02:42
                                            </p>
                                        </div>
                                    </Row>
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <Card>
                                <CardBody className='border-bottom'>
                                    <CardTitle>Sistem Açıklaması
                                    </CardTitle>

                                </CardBody>
                                <CardBody>
                                    <Label>Açıklama</Label>
                                    <Input
                                        type="textarea"
                                        id="textarea"
                                        onChange={e => {
                                            textareachange(e);
                                        }}
                                        maxLength="225"
                                        rows="4"
                                        placeholder="..."
                                    />
                                    {textareabadge ? (
                                        <span className="badgecount badge bg-primary">
                                            {" "}
                                            {textcount} / 225{" "}
                                        </span>
                                    ) : null}
                                    <Row className="mt-4">
                                        <Col sm="6">

                                        </Col>
                                        <Col sm="6">
                                            <div className="text-sm-end mt-2 mt-sm-0">
                                                <Link
                                                    to="/ecommerce-checkout"
                                                    className="btn btn-success btn-lg"
                                                >
                                                    <i className="mdi mdi-plus me-1" />{" "}
                                                    Ekle{" "}
                                                </Link>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </React.Fragment>
    )
}


export default GoogleApiWrapper({
    apiKey: 'AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE',
    LoadingContainer: LoadingContainer,
    v: "3",

})(AlertDetail);