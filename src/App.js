import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Main from "./pages/Main";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chat" element={<Chat />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
