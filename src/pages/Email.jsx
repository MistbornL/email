import React, { Fragment, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "./email.css";
import axios from "axios";
import { TypeAhead } from "../compnents/TypeAhead";
var refreshVar = 0;
export const Email = () => {
  const title = useRef();
  const message = useRef();
  const receiver = useRef();
  const { name } = useParams();
  const [messages, setMessages] = useState([]);
  const [typeAhead, setTypeAhead] = useState([]);
  const [hide, setHide] = useState(true);

  const refreshTime = 2000;

  const handleLogout = () => {
    setMessages([]);
    window.location.href = "/";
  };

  const handleSend = async () => {
    await axios
      .post("https://email-server-mistborn.herokuapp.com/user/sendMessage", {
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
    title.current.value = "";
    message.current.value = "";
  };

  async function getMessages() {
    await axios
      .get(`https://email-server-mistborn.herokuapp.com/user/messages/`, {
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

  const handleAhead = async () => {
    await axios
      .get(`https://email-server-mistborn.herokuapp.com/users/`, {})
      .then((res) => {
        if (res.status === 200) {
          setTypeAhead(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong!!");
      });
    setHide(true);
  };

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
                onChange={handleAhead}
                ref={receiver}
                type="text"
                style={{ position: "relative", zIndex: "1" }}
                className="form-control"
                id="inputReceiver"
                placeholder="Enter Name"
              />

              {typeAhead.map((item) => {
                if (hide === true) {
                  return (
                    <TypeAhead
                      receiver={receiver}
                      setHide={setHide}
                      item={item}
                      onClickOutside={() => {
                        setHide(false);
                      }}
                    />
                  );
                }
                return null;
              })}
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
