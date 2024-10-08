import React from "react";
import classNames from "classnames";

const ErrorAlert = props => {
  console.log(props.errorType)
  return (
    <React.Fragment>
      <div className={"notification-toast-item " + (props.errorType ==="crash"? 'error' : props.errorType ==="warning"?"warning":props.errorType ==="device"?"device": 'concierge')} >
        <a className="text-reset " href="/">
          <div className="d-flex">
            <div className="avatar-xs me-3">
              <span className="avatar-title bg-danger rounded-circle font-size-16 spinner-grow-sm spinner-grow">                
       
                {props.errorType ==="crash"? <i className="fa-duotone fa-car-burst "></i> : props.errorType ==="warning"?<i className="fa-sharp fa-regular fa-triangle-exclamation"></i>:props.errorType ==="device"?<i className="fa-solid fa-signal-stream-slash"></i>: <i className="fa-duotone fa-bell-concierge"></i>}
                <span className="visually-hidden">Loading...</span>
              </span>
            </div>
            <div className="flex-grow-1" >
              <h5 className="mt-0 mb-1">                
                {props.errorType ==="crash"? 'Kaza' : props.errorType ==="warning"?"Uyarı Alarmı":props.errorType ==="device"?"Cihaz Sökme": 'Concierge Çağrısı'}
              </h5>
              <div className="font-size-12 text-muted" >
                <p className="mb-1 plate">34DCC846</p>
                <p className="mb-0">
                  <i className="mdi mdi-clock-outline">
                  </i> 3 min ago <br></br>
                  22.07.2042 04:42:29</p>
              </div>
            </div>
          </div>
        </a>

      </div>
    </React.Fragment>
  )
}

export default ErrorAlert
