import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";

const ENDPOINT = "http://localhost:5000";
let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);
    socket.emit("join", { name, room }, (err) => {
      if (err) {
        alert(err);
      }
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, window.location.search]);

  return <div>Chat</div>;
};

export default Chat;
