import React from "react";
import { Card, Col, Button, Nav} from "react-bootstrap";
import { Link,  } from "react-router-dom";
import './Service.css'

const Service = ({ service }) => {
   
    const {_id,name,category,desc,img}=service
  return (
    <Col>
      <Card  className="card-style py-3">
        <Card.Img variant="top" className="w-50 mx-auto" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <Card.Text>{category}</Card.Text>
            <Card.Text className="desc-style">{desc}</Card.Text>
          

            <Link to ={`/serviceDetals/${_id}`}>

            <Button variant="primary">Meet Now</Button>

            </Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;
