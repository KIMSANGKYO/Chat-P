import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";
import Main from "./pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chat" element={<Chat />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
