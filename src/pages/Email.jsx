import React, { useRef } from "react";
import "./email.css";

export const Email = () => {
  const user = localStorage.getItem("userName");
  const title = useRef();
  const message = useRef();
  const handleLogout = () => {
    localStorage.removeItem("userName");
    window.location.href = "/";
  };
  const handleSend = () => {};
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
        <main>
          <form className="d-flex justify-content-center align-items-center flex-column">
            <div className="form-group ">
              <label htmlFor="inputReceiver">Receiver</label>
              <input
                type="text"
                className="form-control"
                id="inputReceiver"
                placeholder="Enter Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                ref={title}
                type="text"
                className="form-control"
                id="title"
                placeholder="Title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="Text">Text</label>
              <textarea
                ref={message}
                style={{ resize: "none", height: "100px" }}
                type="text"
                className="form-control"
                id="Text"
                placeholder="text"
              />
            </div>
            <div style={{ display: "flex" }}>
              <button
                onClick={handleSend}
                type="button"
                className="btn btn-primary"
              >
                Send
              </button>
            </div>
          </form>
          <div>
            <h1>From: {user}</h1>
            <h2>Title: {title}</h2>
            <h3>content: {message}</h3>
          </div>
        </main>
      </div>
    </>
  );
};
