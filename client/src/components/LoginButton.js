import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import Google from "../assets/google.png"

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    localStorage.setItem("email", user?.email);
    localStorage.setItem("username", user?.nickname);
    localStorage.setItem("pic", user?.picture);
  }, [user]);

  return <button onClick={() => loginWithRedirect()} className='Gbtn'>      <img src={Google} alt="" style={{ width: "20px" }}></img>  Log in</button>;
};

export default LoginButton;
