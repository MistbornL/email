import React, { Fragment, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./email.css";
import axios from "axios";
var refreshVar = 0;
export const Email = () => {
  const title = useRef();
  const message = useRef();
  const receiver = useRef();
  const { name } = useParams();
  const [messages, setMessages] = React.useState([]);
  const refreshTime = 2000;

  const handleLogout = () => {
    setMessages([]);
    window.location.href = "/";
  };
  const handleSend = async () => {
    await axios
      .post("http://localhost:5000/user/sendMessage", {
        title: title.current.value,
        content: message.current.value,
        author: name,
        receiver: receiver.current.value,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong!!");
      });
  };

  async function getMessages() {
    await axios
      .get(`http://localhost:5000/user/messages/`, {
        params: {
          receiver: name,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setMessages(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong!!");
      });
  }

  useEffect(() => {
    const comInterval = setInterval(getMessages, refreshTime); //This will refresh the data at regularIntervals of refreshTime
    return () => clearInterval(comInterval);
  }, [refreshVar]);

  return (
    <>
      <div className="App">
        <header>
          <div className="head">
            <h1 className="d-flex justify-content-center align-items-center">
              Welcome {name}
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
                ref={receiver}
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
            {messages.length > 0 ? (
              <div>
                {messages.map((message, index) => {
                  return (
                    <div key={index}>
                      <h1>From: {message?.author}</h1>
                      <h2>Title: {message?.title}</h2>
                      <h3>content: {message?.content}</h3>
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </main>
      </div>
    </>
  );
};
