import React from "react";

export default () => {
  return (
    <div className="mt-5 py-5 d-flex justify-content-center align-items-center">
      <div
        className="spinner-border text-secondary"
        style={{ width: "6rem", height: "6rem" }}
        role="status"
      ></div>
    </div>
  );
};
