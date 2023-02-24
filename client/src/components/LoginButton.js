import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from "react";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();

    useEffect(() => {
        localStorage.setItem('email', user?.email)
        localStorage.setItem('username', user?.nickname)
        localStorage.setItem('pic', user?.picture)

    }, [user])
    useEffect(() => {
        localStorage.setItem('redirect_uri', window.location.href);
    }, [])
    return (
        <button onClick={() => loginWithRedirect()}>
            Log in
        </button>)
};

export default LoginButton;