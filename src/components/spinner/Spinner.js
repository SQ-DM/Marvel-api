import React from "react";

export default function Spinner() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="spinner-grow text-info" role="status"></div>
      <span>
        <h4 className="text-primary"> Loading...</h4>
      </span>
    </div>
  );
}
