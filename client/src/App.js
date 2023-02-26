import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Editor from "./components/Editor";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./components/Home";
import LogoutButton from "./components/LogoutButton";
import LoginButton from "./components/LoginButton";
import Redirect from "./components/Redirect";
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <LoginButton />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home logOutbutton={<LogoutButton />} />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/docs/:fileName/:id" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;
