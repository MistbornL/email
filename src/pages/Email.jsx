import React from "react";
import "./email.css";

export const Email = () => {
  const user = localStorage.getItem("userName");
  const handleLogout = () => {
    localStorage.removeItem("userName");
    window.location.href = "/";
  };
  return (
    <>
      <div className="App">
        <header>
          <div className="head">
            <h1 className="d-flex justify-content-center align-items-center">
              Welcome {user}
            </h1>
            <h2 style={{ cursor: "pointer" }} onClick={handleLogout}>
              logout
            </h2>
          </div>
        </header>

        <form className="d-flex justify-content-center align-items-center flex-column">
          <div className="form-group ">
            <label for="inputReceiver">Receiver</label>
            <input
              type="text"
              className="form-control"
              id="inputReceiver"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label for="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label for="Text">Text</label>
            <textarea
              style={{ resize: "none", height: "100px" }}
              type="text"
              className="form-control"
              id="Text"
              placeholder="text"
            />
          </div>
          <div style={{ display: "flex" }}>
            <button type="button" className="btn btn-primary">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
