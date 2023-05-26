import React, { useState } from "react";
import { Link } from "react-router-dom";

const ChatRoom = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div>
      <div>ChatRoom</div>
      <div>
        <input
          placeholder="이름"
          type="text"
          onChange={(event) => setName(event.target.value)}
        ></input>
      </div>
      <div>
        <input
          placeholder="채팅방"
          type="text"
          onChange={(event) => setRoom(event.target.value)}
        ></input>
      </div>
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button type="submit">가입</button>
      </Link>
    </div>
  );
};

export default ChatRoom;
