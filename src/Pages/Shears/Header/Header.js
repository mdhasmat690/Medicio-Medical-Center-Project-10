import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import "./Header.css";
import useAuth from "../../../Hooks/UseAuth";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <div className="custom-style">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6">
              <p className="text-left">Monday - Saturday, 8am to 10pm </p>
            </div>
            <div className="col-sm-6 col-md-6">
              <p className="text-right">Call us now +62 008 65 001</p>
            </div>
          </div>
        </div>
      </div>

      <Navbar
        bg="light"
        variant="light"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <img
            className="w-25"
            src="https://i.ibb.co/Rc38ygh/logo.png"
            alt=""
          />

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/healthCenter">
              HealthCenter
            </Nav.Link>
            <Nav.Link as={Link} to="/appointment">
              Appointment
            </Nav.Link>
            <Nav.Link as={Link} to="/signUp">
              signUp
            </Nav.Link>

            {(user?.email || user?.displayName) ? (
              <Button onClick={logOut} variant="light">
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}

            <Navbar.Text>
              Signed in as:{" "}
              <a href="#login">{user.displayName || user.email}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
