import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";
import Google from "../assets/google.png";

const LoginButton = () => {
  const { loginWithRedirect, user } = useAuth0();

  useEffect(() => {
    const val = localStorage.getItem("redirect_uri");

    !val?.length &&
      localStorage.setItem("redirect_uri", window.location.pathname);
  }, []);

  useEffect(() => {
    localStorage.setItem("email", user?.email);
    localStorage.setItem("username", user?.nickname);
    localStorage.setItem("pic", user?.picture);
  }, [user]);

  return (
    <button onClick={() => loginWithRedirect()} className="Gbtn">
      {" "}
      <img src={Google} alt="" style={{ width: "20px" }}></img> Log in
    </button>
  );
};

export default LoginButton;
