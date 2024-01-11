import React, { useState } from "react";
import "../cssfile/request.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope, faBell } from "@fortawesome/free-solid-svg-icons";
  const element7 =<FontAwesomeIcon icon={faEnvelope} size="2x " color="black" />;
const element8 = <FontAwesomeIcon icon={faBell} size="2x" color="black" />;
  

const CreateRequest = ({ data, handleChange }) => {
  const [firstName, setFirstname] = useState("");
  const [phoneNumber, setphonenNumer] = useState("");
  const [repairType, setrepairType] = useState("");
  const [repairDate, setrepairDate] = useState("");
  const [stateRegion, setstateRegion] = useState("");
  const [address, setaddress] = useState("");
  const [country, setcountry] = useState("");
  const [numberAC, setnumberAC] = useState("");
  const [comment, setcomment] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      firstName,
      phoneNumber,
      repairDate,
      repairType,
      stateRegion,
      address,
      country,
      numberAC,
      comment,
    };
    setPeople((people) => {
      return [...people, person];
    });
    setFirstname("");
    setphonenNumer("");
    setrepairDate("");
    setrepairType("");
    console.log(person);
    console.log(people);
  };

  return (
    <div className="request">
      <div className="req">
        <h1 className="frit">Requests</h1>
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

      <div className="form-opt">
        <h2>Request Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="full">
            <div className="half1">
              <label htmlFor="firstName">Name:</label>
              <br />
              <input
                type="text"
                id="firtName"
                name="firtName"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
              />

              <br />
              <label htmlFor="phoneNumber">Phone Number:</label>
              <br />
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setphonenNumer(e.target.value)}
              />

              <br />
              <label htmlFor="repairType">Repair Type:</label>
              <br />
              <input
                type="text"
                id="repairType"
                name="repairType"
                value={repairType}
                onChange={(e) => setrepairType(e.target.value)}
              />

              <br />
              <label htmlFor="repairDate">Repair Date:</label>
              <br />
              <input
                type="date"
                id="repairDate"
                name="repairDate"
                value={repairDate}
                onChange={(e) => setrepairDate(e.target.value)}
              />
            </div>
            <br />
            <div className="half2">
              <label htmlFor="stateRegion">State/Region</label>

              <br />
              <div className="state-region">
                <select
                  className="sel"
                  type="text"
                  id="stateRegion"
                  name="stateRegion"
                  value={stateRegion}
                  onChange={(e) => setstateRegion(e.target.value)}
                >
                  <option></option>
                  <option>Abia</option>
                  <option>Adamawa</option>
                  <option> Akwa-Ibom </option>
                  <option>Anambra </option>
                  <option>Bauchi</option>
                  <option>Bayelsa </option>
                  <option> Benue </option>
                  <option> Borno</option>
                  <option> Cross River </option>
                  <option> Delta </option>
                  <option> Ebonyi</option>
                  <option> Edo </option>
                  <option> Ekiti </option>
                  <option> Enugu </option>
                  <option> Gombe</option>
                  <option> Imo </option>
                  <option> Jigawa </option>
                  <option> Kaduna</option>
                  <option> Kano </option>
                  <option> Katsina</option>
                  <option> Kebbi</option>
                  <option> Kogi</option>
                  <option> Kwara </option>
                  <option> Kebbi</option>
                  <option> Lagos</option>
                  <option> Nasarawa</option>
                  <option> Niger</option>
                  <option> Ogun</option>
                  <option> Ondo</option>
                  <option> Osun </option>
                  <option> Oyo</option>
                  <option> Plateau</option>
                  <option> Rivers </option>
                  <option> Sokoto</option>
                  <option> Taraba </option>
                  <option> Yobe </option>
                  <option> Zamfara </option>
                  <option> Territory Federal Capital</option>
                </select>
              </div>

              <br />
              <label htmlFor="country">Country:</label>
              <br />
              <input
                type="text"
                id="country"
                name="country"
                value={country}
                onChange={(e) => setcountry(e.target.value)}
              />

              <br />
              <label htmlFor="address">Address:</label>
              <br />
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />

              <br />
              <label htmlFor="numberAC">Number of AC:</label>
              <br />
              <input
                type="text"
                id="numberAC"
                name="numberAC"
                value={numberAC}
                onChange={(e) => setnumberAC(e.target.value)}
              />
            </div>
          </div>
          <div className="comment">
            <label htmlFor="comment">Comment:</label>
            <br />
            <input
              type="text"
              id="comment"
              name="comment"
              value={comment}
              onChange={(e) => setcomment(e.target.value)}
            />
            <span className="caution">Not more than 150 Words</span>
            <br />
            <button className="req-btn" type="submit">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRequest;
