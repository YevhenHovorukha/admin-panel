import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log(1);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<h1>Protect</h1>}> */}
        <Route path="/" element={<h1>Head</h1>}>
          <Route index element={<h1>1</h1>} />
          <Route path="first" element={<h1>2</h1>} />
          <Route path="second" element={<h1>3</h1>} />
        </Route>
        {/* </Route> */}
        <Route path="login" element={<h1>Login</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
