import React from 'react'
import "../cssfile/notification.css"
import { } from "../Pages/CreateRequest"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faBell } from "@fortawesome/free-solid-svg-icons";

  const element7 = (
    <FontAwesomeIcon icon={faEnvelope} size="2x" color="black" />
  );
  const element8 = <FontAwesomeIcon icon={faBell} size="2x" color="black" />;

const Notification = () => {
  return (
    <div className="notification">
      <div className="req">
        <h1 className="frit">Notification</h1>
        <div className="flex-it">
          <span className="alarm">{element8}</span>
          <span className="ms"> {element7}</span>

          <div className="img">
            <p className="user-input">
              <img
                src="./images/img-icon.png"
                alt="camera"
                className="user-home"
              />
              <input type="file" className="enter-img" />
            </p>
          </div>
        </div>
      </div>

      {/* Notification down here */}
      <div className="notify">
        <h2 className="general-notify">General Notification</h2>
        <p className="noti"></p>
        <p className="noti">
          Your request for AC maintenance has been approved{" "}
        </p>
        <p className="noti">
          Your request for AC maintenance has been approved{" "}
        </p>
        <p className="noti">
          Your request for AC maintenance has been approved{" "}
        </p>
        <p className="noti">
          Your request for AC maintenance has been approved{" "}
        </p>
        <p className="noti">
          Your request for AC maintenance has been approved{" "}
        </p>
        <p className="noti">
          Your request for AC maintenance has been approved{" "}
        </p>
        <p className="noti">
          Your request for AC maintenance has been approved{" "}
        </p>
      </div>
      <button className="read-all">Read All</button>

      <div className="btn-ctr">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="fwd"
        >
          <path d="M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z" />
        </svg>

        <button className="bn ">1</button>
        <button className="bn current">2</button>
        <button className="bn">3</button>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="fwd"
        >
          <path d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z" />
        </svg>
      </div>
    </div>
  );
}

export default Notification
