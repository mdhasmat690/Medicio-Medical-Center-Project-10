import React from "react";
import Appointment from "../../Appointment/Appointment";
import HealthCenter from "../../HelthCenter/HealthCenter";
import Services from "../../Services/Services";
import TopBanner from "../../TopBanner/TopBanner";

const Home = () => {
  return (
    <div>
      <TopBanner></TopBanner>
      <Services></Services>
      <HealthCenter></HealthCenter>
      <Appointment></Appointment>
    </div>
  );
};

export default Home;
