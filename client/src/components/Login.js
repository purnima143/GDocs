import React from "react";
import Home from "./Home";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function Login() {
  const { isAuthenticated } = useAuth0();

  return !isAuthenticated ? (
    <LoginButton />
  ) : (
    <Home logOutbutton={<LogoutButton />} />
  );
}
export default Login;
