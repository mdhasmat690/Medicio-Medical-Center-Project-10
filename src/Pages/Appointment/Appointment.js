import React from "react";
import { Button } from "react-bootstrap";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className=" container background-style my-4 p-5">
      <h2>Make an Appointment</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 d-flex flex-column flex-md-row">
          <input
            className="input-style w-100 w-md-50 mr-10"
            type="text"
            placeholder="Type your name"
          />
          <input
            className="input-style w-100 w-md-50 "
            type="email"
            name="email"
            id=""
            placeholder="enter your email"
          />
        </div>
        <div className="col-12 col-md-8 d-flex flex-column flex-md-row">
          <input
            className="input-style w-100 w-md-50 mr-10"
            type="text"
            placeholder="Date"
          />
          <input
            className="input-style w-100 w-md-50"
            type="email"
            name="email"
            id=""
            placeholder="Phone Number"
          />
        </div>
        <div className="col-12 col-md-8">
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
