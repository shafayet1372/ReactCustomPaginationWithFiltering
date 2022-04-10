import React from "react";

export default function Spinner() {
  return (
    <div className="row text-center my-5">
      <div className="col-12">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
