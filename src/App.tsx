import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ROUTES from "./routes";

const IdeasPage = lazy(() => import("./screens/IdeasePage"));
const TicketsTable = lazy(() => import("./screens/TicketsTable"));
const MainLayout = lazy(() => import("./screens/MainLayout"));
const SignUp = lazy(() => import("./screens/SignUp"));
const Login = lazy(() => import("./screens/Login"));
const NotFound = lazy(() => import("./screens/NotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>...Loading</h1>}>
        <Routes>
          <Route path={ROUTES.HOME} element={<MainLayout />}>
            <Route index element={<h1>1</h1>} />
            <Route path={ROUTES.TICKETS} element={<TicketsTable />} />
            <Route path={ROUTES.IDEAS} element={<IdeasPage />} />
            <Route path={ROUTES.CONTACTS} element={<h1>Contacts</h1>} />
          </Route>

          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={ROUTES.ERRORPAGE} element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
