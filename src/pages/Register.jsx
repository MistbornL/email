import React, { useRef } from "react";

export const Register = () => {
  const userName = useRef();
  const handleUserName = () => {
    localStorage.setItem("userName", userName.current.value);
  };
  return (
    <div className="input-group mb-3">
      <input
        ref={userName}
        type="text"
        className="form-control"
        placeholder="username"
        aria-label="username"
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button
          onClick={handleUserName}
          className="btn btn-outline-secondary"
          type="button"
        >
          Button
        </button>
      </div>
    </div>
  );
};
