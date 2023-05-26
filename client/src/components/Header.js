import React from "react";
import styled from "styled-components";

const Header = () => {
  return <HeaderBox>Header</HeaderBox>;
};

export default Header;

const HeaderBox = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  top: 0;
  position: fixed;
  background-color: yellowgreen;
`;
