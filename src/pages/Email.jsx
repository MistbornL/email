import React from "react";

export const Email = () => {
  const user = localStorage.getItem("userName");
  return (
    <>
      <div className="App">
        <h1 className="d-flex justify-content-center align-items-center">
          Welcome {user}
        </h1>
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
            <input
              style={{ height: "100px" }}
              type="text"
              className="form-control"
              id="Text"
              placeholder="text"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
