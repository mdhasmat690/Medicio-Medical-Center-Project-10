import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./Pages/Shears/Footer/Footer";
import Header from "./Pages/Shears/Header/Header";
import TopBanner from "./Pages/TopBanner/TopBanner";
import Services from "./Pages/Services/Services";
import Login from "./Pages/Login/Login";
import AuthProvider from "./Contexts/AuthProvider";
import PrivetRoute from "./Pages/PrivetRoute/PrivetRoute";
import ServiceDetals from "./Pages/Services/ServiceDetals/ServiceDetals";
import HealthCenter from "./Pages/HelthCenter/HealthCenter";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Shears/Home/Home";
import Care from "./Pages/Care/Care";
import Error from "./Pages/Error/Error";
import ImgSlider from "./Pages/ImgSlider/ImgSlider";
import SignUp from "./Pages/SignUp/SignUp";
// import "swiper/css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <TopBanner></TopBanner>
              <Services></Services>
              <HealthCenter></HealthCenter>
              <Appointment></Appointment>
            {/* <ImgSlider></ImgSlider> */}
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivetRoute path="/healthCenter">
            <HealthCenter></HealthCenter>
            </PrivetRoute>
            <Route path="/appointment">
            <Appointment></Appointment>
            </Route>
            <Route exact path="/care">
            <Care></Care>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signUp">
              
              <SignUp></SignUp>
            </Route>
            <PrivetRoute exact path="/serviceDetals/:serviceId">
              <ServiceDetals></ServiceDetals>
            </PrivetRoute>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
