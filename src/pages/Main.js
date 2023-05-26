import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div>메인 페이지</div>
      <Link to="/Chat">채팅방 입장</Link>
    </div>
  );
};

export default Main;
