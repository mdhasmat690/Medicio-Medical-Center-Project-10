import React from "react";
import { Button } from "react-bootstrap";
import "./TopBanner.css";

const TopBanner = () => {
  return (
    <div className="container">
      <div className="banner-style">
        <div className="banner-text py-auto">
          <h4>LET'S MAKE YOUR LIFE HAPPIER With</h4>
          <h1>Medicio-Medical-Center</h1>
          <Button className="btn-style" variant="info">
            Let's Start
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
