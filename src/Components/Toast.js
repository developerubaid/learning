import React, { useState } from "react";

function Toast(props) {
  return (
    props.toast && (
      <div
        className="toast align-items-center"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">{props.toast.msg}</div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    )
  );
}

export default Toast;
