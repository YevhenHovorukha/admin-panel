import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ROUTES from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>...Loading</h1>}>
        <Routes>
          <Route path={ROUTES.HOME.route} element={<ROUTES.HOME.Element />}>
            <Route index element={<h1>1</h1>} />
            <Route path={ROUTES.TICKETS.route} element={<h1>tickets</h1>} />
            <Route path={ROUTES.IDEAS.route} element={<h1>"/ideas"</h1>} />
            <Route
              path={ROUTES.CONTACTS.route}
              element={<h1>"/contacts"</h1>}
            />
            <Route path={ROUTES.AGENTS.route} element={<h1>"/agents"</h1>} />
            <Route
              path={ROUTES.ARTICLES.route}
              element={<h1>"/articles"</h1>}
            />
            <Route path={ROUTES.SETTINGS.route} element={<h1>/settings</h1>} />
            <Route
              path={ROUTES.SUBSCRIPTION.route}
              element={<h1>/subscription</h1>}
            />
          </Route>

          <Route path={ROUTES.LOGIN.route} element={<ROUTES.LOGIN.Element />} />
          <Route
            path={ROUTES.SIGNUP.route}
            element={<ROUTES.SIGNUP.Element />}
          />
          <Route
            path={ROUTES.ERRORPAGE.route}
            element={<ROUTES.ERRORPAGE.Element />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
