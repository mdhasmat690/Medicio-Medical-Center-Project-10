import React from "react";
import { Button } from "react-bootstrap";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className=" container background-style my-4 p-5">
      <h2>Make an Appointment</h2>
      <div className="row w-50 mx-auto ml-3">
        <div className=" col-sm-6 col-md-6 g-3  d-flex align-items-center justify-content-center">
          <input
            className="input-style"
            type="text"
            placeholder="Type your name"
          />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 g-3  d-flex align-items-center justify-content-center">
          <input
            className="input-style"
            type="email"
            name="email"
            id=""
            placeholder="enter your email"
          />
        </div>
        <br />
        <br />
        <div className="col-sm-6 col-md-6 g-3  d-flex align-items-center justify-content-center">
          <input
            className="input-style"
            type="text"
            placeholder="Date"
          />
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 g-3  d-flex align-items-center justify-content-center">
          <input
            className="input-style"
            type="email"
            name="email"
            id=""
            placeholder="Phone Number"
          />
        </div>
        <br />
        <br />
        <br />
        <div className="d-flex align-items-center justify-content-center">
          <textarea
            className="w-100 mx-auto my-3"
            name="messege"
            id=""
            cols="30"
            rows="7"
            placeholder="Your messege here"
          ></textarea>
        </div>
      </div>

      <Button variant="primary">Click Now</Button>
    </div>
  );
};

export default Appointment;
