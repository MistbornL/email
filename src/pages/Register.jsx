import React, { useRef } from "react";
import axios from "axios";
export const Register = () => {
  const userName = useRef();

  const handleSubmit = async () => {
    console.log(userName.current.value);
    await axios
      .post("https://email-server-navy.vercel.app//user/login", {
        userName: userName.current.value,
      })
      .then((res) => {
        if (res.status === 200) {
          window.location.href = `/email/${userName.current.value}`;
        }
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong!!");
      });
  };
  return (
    <div
      className="App d-flex justify-content-center"
      style={{ marginTop: "200px" }}
    >
      <div style={{ width: "400px" }}>
        <h1>please login</h1>
        <div className="input-group mb-3 d-flex justify-content center">
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
              onClick={handleSubmit}
              className="btn btn-outline-secondary"
              type="button"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
