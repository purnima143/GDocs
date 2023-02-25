import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Google from "../assets/google.png"
const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button onClick={() => logout({ returnTo: window.location.origin })} className='Gbtn'>
        <img src={Google} alt="" style={{ width: "24px" }}></img>  Log Out
      </button>
    )
  );
};

export default LogoutButton;
