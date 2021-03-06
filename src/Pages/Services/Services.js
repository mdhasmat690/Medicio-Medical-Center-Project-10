import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container py-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
    </div>
  );
};

export default Services;
