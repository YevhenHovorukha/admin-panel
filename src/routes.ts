import { lazy } from "react";

const MainLayout = lazy(() => import("./screens/MainLayout"));
const SignUp = lazy(() => import("./screens/SignUp"));
const Login = lazy(() => import("./screens/Login"));
const NotFound = lazy(() => import("./screens/NotFound"));

interface IRouteObject {
  route: string;
  Element: React.LazyExoticComponent<() => JSX.Element>;
}

interface IROUTES {
  HOME: IRouteObject;
  OVERVIEW: IRouteObject;
  TICKETS: IRouteObject;
  IDEAS: IRouteObject;
  CONTACTS: IRouteObject;
  AGENTS: IRouteObject;
  ARTICLES: IRouteObject;
  SETTINGS: IRouteObject;
  SUBSCRIPTION: IRouteObject;
  LOGIN: IRouteObject;
  SIGNUP: IRouteObject;
  ERRORPAGE: IRouteObject;
}

const createRoutes = (
  route: string,
  Element: React.LazyExoticComponent<() => JSX.Element>
): IRouteObject => {
  return { route, Element };
};

const ROUTES: IROUTES = {
  HOME: createRoutes("/", MainLayout),
  OVERVIEW: createRoutes("/", MainLayout),
  TICKETS: createRoutes("/tickets", MainLayout),
  IDEAS: createRoutes("/ideas", MainLayout),
  CONTACTS: createRoutes("/contacts", MainLayout),
  AGENTS: createRoutes("/agents", MainLayout),
  ARTICLES: createRoutes("/articles", MainLayout),
  SETTINGS: createRoutes("/settings", MainLayout),
  SUBSCRIPTION: createRoutes("/subscription", MainLayout),
  LOGIN: createRoutes("/login", Login),
  SIGNUP: createRoutes("/signup", SignUp),
  ERRORPAGE: createRoutes("*", NotFound),
};

export default ROUTES;
