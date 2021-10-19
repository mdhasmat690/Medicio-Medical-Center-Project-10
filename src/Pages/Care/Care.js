import React from "react";
import "./Care.css";

const Care = () => {
  return (
    <div className="my-3">
      <h2 className="text-danger">Our 24Hour Care List</h2>
      <div className="row container mx-auto">
        <div className="col-md-6">
          <img
            className="w-100"
            src="https://i.ibb.co/YhQHBrv/img-1.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 my-5">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div className="text-style">
                <h3 className="text-primary">Medical checkup</h3>
                <p>Definitions of medical checkup. a thorough physical.</p>
              </div>
            </div>
            <div class="col">
              <div className="text-style">
                <h3 className="text-primary">Gyn Care</h3>
                <p>Trusted Women's Health Center serving Atlanta, GA.</p>
              </div>
            </div>
            <div class="col">
              <div className="text-style">
                <h3 className="text-primary">Nursing Services</h3>
                <p>
                  Directorate of Nursing Services Administration and Management.
                </p>
              </div>
            </div>
            <div class="col">
              <div className="text-style">
                <h3 className="text-primary">Neurology</h3>
                <p>
                  Neurology is the branch of medicine concerned with the study.
                </p>
              </div>
            </div>
            <div class="col">
              <div className="text-style">
                <h3 className="text-primary">Pharmacy</h3>
                <p>
                  Pharmacy is the clinical health science that links medica.
                </p>
              </div>
            </div>
            <div class="col">
              <div className="text-style">
                <h3 className="text-primary">Sleep Center</h3>
                <p>Vestibulum tincidunt enim in pharetra malesuada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
