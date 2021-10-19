import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import doctor from "../../imges/bg-doctor.png";
import "./Healthcare.css";

const HealthCenter = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis quo error accusantium dolores perferendis esse possimus
            at quod, iste asperiores reiciendis cupiditate hic eum alias
            obcaecati expedita sequi optio id vero accusamus rem ipsa.
            Perspiciatis qui veniam quia error, inventore voluptatum dolor,
            quidem suscipit, ipsum aperiam voluptatibus temporibus! Iure laborum
            illum aspernatur natus autem quod, harum a! Mollitia neque dolorem
            excepturi deleniti ut voluptatum, fuga tempore quos. Magni nobis
            deleniti libero eos corporis provident consequatur voluptates quod
            dolore labore voluptatem necessitatibus obcaecati illo inventore,
            asperiores earum cumque debitis veritatis ut, quaerat harum
            aspernatur rerum nam! Aut ipsa quas quos rerum.
          </p>

          <Link to="/care">
            <Button variant="primary">Hospital Information</Button>
          </Link>
        </div>
        <div className="col-md-6 col-sm-12">
          <img className="w-50" src={doctor} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HealthCenter;
