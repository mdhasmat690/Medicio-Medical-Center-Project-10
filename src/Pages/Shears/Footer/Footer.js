import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-color p-3">
      <div className="row container mx-auto">
        <div className="col-md-4 col-sm-12 g-3">
          <h3>ABOUT MEDICIO</h3>
          <p className="w25">Lorem ipsum dolor sit amet, ne nam purto nihil impetus, an facilisi accommodare sea</p>
        </div>
        <div className="col-md-4 col-sm-12 g-3">
        
        </div>
        <div className="col-md-4 col-sm-12 g-3">
          <h3>OUR LOCATION</h3>
          <p>The Suithouse V303, Dhaka City, Jakarta Indonesia 12940</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <p className="mx-auto">©Copyright 2021 - Medicio. All rights reserved.</p>
    </div>
  );
};

export default Footer;
