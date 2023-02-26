import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const val = localStorage.getItem("redirect_uri");
    localStorage.removeItem("redirect_uri");
    navigate(val);
  }, []);
};

export default Redirect;
