import React from 'react'
import "../cssfile/setting.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faBell } from "@fortawesome/free-solid-svg-icons";

  const element7 = (
    <FontAwesomeIcon icon={faEnvelope} size="2x" color="black" />
  );
  const element8 = <FontAwesomeIcon icon={faBell} size="2x" color="black" />;


const Setting = () => {
  return (
    <div className="setting">
      <div className="req">
        <h1 className="frit">Account Settings</h1>
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

      {/* upload, edit, delete */}
      <div className="acct-setting">
        
        <div className="upload">
          <div className="img-setting">
            <img
              src="./images/img-icon.png"
              alt="upload"
              className="setting-img"
            />
            <input type='file' className='setting-input'/>
          </div>
          <button className='delete'>Remove</button>
          <button className='updt-setting'>Upload</button>
        </div>

        <div className="form-opt">
          <h2>Request Form</h2>
          <form>
            <div className="full">
              <div className="half1">
                <label>Name:</label>
                <br />
                <input />

                <br />
                <label>Phone Number:</label>
                <br />
                <input />

                <br />
                <label>Address:</label>
                <br />
                <input />
              </div>
              <br />
              <div className="half2">
                <label> Email Address:</label>
                <br />
                <input />

                <br />
                <label>Password:</label>
                <br />
                <input />

                <br />
                <label>Confirm Password</label>
                <br />
                <input />
              </div>
            </div>
            <button className="update-setting">Update Setting</button>
          </form>
        </div>
      </div>
      <div className="delete-acct">
        <h3>Delete account?</h3>
        <h5 className="del">
          By deleting your account you will no longer receiving AC repair and
          maintenance via our website again
        </h5>
        <button className="delete">Delete Account</button>
      </div>
      {/*end here upload, edit, delete */}
    </div>
  );
}

export default Setting
