interface IROUTES {
  HOME: string;
  TICKETS: string;
  IDEAS: string;
  CONTACTS: string;
  LOGIN: string;
  SIGNUP: string;
  ERRORPAGE: string;
}

const ROUTES: IROUTES = {
  HOME: "/",
  TICKETS: "/tickets",
  IDEAS: "/ideas",
  CONTACTS: "/contacts",
  LOGIN: "/login",
  SIGNUP: "/signup",
  ERRORPAGE: "*",
};

export default ROUTES;
