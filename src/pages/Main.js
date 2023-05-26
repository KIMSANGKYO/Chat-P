import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  return (
    <MainContainer>
      <div>메인 페이지</div>
      <Link to="/Chat">채팅방 입장</Link>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  background-color: aliceblue;
`;
