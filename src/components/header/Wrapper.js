import React from "react";

export default function Wrapper({ error }) {
  return (
    <div className="container-fluid bg-dark border-info">
      <div className="row">
        <div className="col-sm-3 "></div>
        <div className="col-sm-9 bg-dark text-white">
          <div className="row">
            <div className="col-8 col-sm-6">
              <h5 className="title text-center text-primary"></h5>
              <p className="text-danger">
                <small>{error}</small>
              </p>
            </div>
            <div className="col-4 col-sm-6">
              <h6 className="subtitle mb-2 text-primary">
                <strong>Random character for today!</strong>
              </h6>
              <p className="text">Do you want to get to know him better?</p>
              <p className="text">
                <small>Or choose another one</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
