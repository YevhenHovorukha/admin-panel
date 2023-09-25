import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainLayout = lazy(() => import("./screens/MainLayout"));
const SignUp = lazy(() => import("./screens/SignUp"));
const Login = lazy(() => import("./screens/Login"));
const NotFound = lazy(() => import("./screens/NotFound"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>...Loading</h1>}>
        <Routes>
          {/* <Route element={<h1>Protect</h1>}> */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<h1>1</h1>} />
            <Route path="/tickets" element={<h1>tickets</h1>} />
            <Route path="/ideas" element={<h1>"/ideas"</h1>} />
            <Route path="/contacts" element={<h1>"/contacts"</h1>} />
            <Route path="/agents" element={<h1>"/agents"</h1>} />
            <Route path="/articles" element={<h1>"/articles"</h1>} />
            <Route path="/settings" element={<h1>/settings</h1>} />
            <Route path="/subscription" element={<h1>/subscription</h1>} />
          </Route>
          {/* </Route> */}

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
