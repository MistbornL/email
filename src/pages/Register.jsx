import React, { useRef } from "react";
import axios from "axios";
export const Register = () => {
  const userName = useRef();

  const handleSubmit = async () => {
    console.log(userName.current.value);
    await axios
      .post("http://localhost:5000/user/login", {
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
    <div className="App">
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
            onClick={handleSubmit}
            className="btn btn-outline-secondary"
            type="button"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};
