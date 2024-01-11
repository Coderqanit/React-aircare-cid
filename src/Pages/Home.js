import React, { useState } from "react";
import "../cssfile/home.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faSearch, faEnvelope, faBell, } from "@fortawesome/free-solid-svg-icons";

  const element6 = <FontAwesomeIcon icon={faSearch} />;
  const element7 = <FontAwesomeIcon icon={faEnvelope} size="3x " color="black"/>;
  const element8 = <FontAwesomeIcon icon={faBell} size="3x" color="black" />;



const Home = () => {


  
  return (
    <div className="home">
      {/*  Dash section */}
      <div className="heading">
        <h1 className="head">Dashboard</h1>
        <div className="s-bar">
          <div className="search">
            <input placeholder="Search..." id="search" />
            {element6}
          </div>

          <div className="ok">
            <span className="alarm">{element8}</span>
            <span className="ms"> {element7}</span>

            <div className="ok2">
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
      </div>
      {/* End Dash section */}

      {/* Welcome */}
      <div className="head2">
        <div class="container-wel">
          <div class="welcome">
            <p>Welcome Hayzeed Domains</p>
            <p>
              <span> place and track request anytime and anyday</span>
            </p>
          </div>
          <div class="wel-img">
            <img src="./images/Frame.png" alt="hello" className="frame" />
          </div>
        </div>
      </div>
      {/* End Welcome */}

      {/* card */}
      <div className="svg">
        <p className="box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg1"
          >
            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
          </svg>
          <p className="num">
            Total Number of Request
            <span>2093</span>
          </p>
        </p>

        <p className="box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg2"
          >
            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
          </svg>
          <p className="num">
            Pending Request
            <span>2093</span>
          </p>
        </p>

        <p className="box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="svg3"
          >
            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
          </svg>
          <p className="num">
            Approved Request
            <span>2093</span>
          </p>
        </p>
      </div>
      {/* End card */}

      {/* Table */}
      <div class="pro">
        <p class="progress"> AC Repair Request Progress</p>
      </div>

      <div class="Header-request">
        <div class="table-margin">
          <table class="table-content">
            <thead class="tbhead">
              <tr>
                <th>Name</th>
                <th>Request Type</th>
                <th>Date of Request</th>
                <th>Request Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ola</td>
                <td> new ac</td>
                <td>24/5/2022</td>
                <td id="success">success</td>
              </tr>

              <tr>
                <td>ola2</td>
                <td>ac maint</td>
                <td>30/5/2023</td>
                <td id="pending">pending</td>
              </tr>
              <tr>
                <td>ola3</td>
                <td>ac maintenance</td>
                <td>30/3/2022</td>
                <td id="success">success</td>
              </tr>

              <tr>
                <td>ola3</td>
                <td>ac maintenance</td>
                <td>30/3/2022</td>
                <td id="failed">failed</td>
              </tr>

              <tr>
                <td>ola3</td>
                <td>ac maintenance</td>
                <td>30/3/2022</td>
                <td id="failed">failed</td>
              </tr>

              <tr>
                <td>ola3</td>
                <td>ac maintenance</td>
                <td>30/3/2022</td>
                <td id="success">success</td>
              </tr>

              <tr>
                <td>ola3</td>
                <td>ac maintenance</td>
                <td>30/3/2022</td>
                <td id="failed">failed</td>
              </tr>
            </tbody>
          </table>
          <div className="btn">
            <button className="right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="right"
              >
                <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
              </svg>
            </button>
            <button className="left">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                className="right"
              >
                <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
