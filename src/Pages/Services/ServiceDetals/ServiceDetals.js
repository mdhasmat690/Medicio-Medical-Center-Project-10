import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetals = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/FakeData.json")
      .then((res) => res.json())
      .then((data) => {
        const ExactIteam = data.filter((td) => td._id == serviceId);
        setData(ExactIteam);
      });
  }, []);

  console.log(data);
  return (
    <div className="container w-50 my-5">
      <div className="card bg-info p-4">
        <img src={data[0]?.img} className="card-img-top w-50 mx-auto" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data[0]?.name}</h5>
          <h4>{data[0]?.category}</h4>
          <p>{data[0]?.desc}</p>
          <p className="card-text">
            {data[0]?.fulldtls}
          </p>
          <a href="#" className="btn bg-warning">
          Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetals;
