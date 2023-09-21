import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainContainer from "./screens/MainContainer";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<h1>Protect</h1>}> */}
        <Route path="/" element={<MainContainer />}>
          <Route index element={<h1>1</h1>} />
          <Route path="first" element={<h1>2</h1>} />
          <Route path="second" element={<h1>3</h1>} />
        </Route>
        {/* </Route> */}
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
