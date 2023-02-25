import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Editor from "./components/Editor";
import Login from "./components/Login";
import "./App.css";

function App() {
  useEffect(() => {
    const url = sessionStorage.getItem("redirect_uri");
    !url?.length &&
      sessionStorage.setItem("redirect_uri", window.location.pathname);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/docs/:fileName/:id" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;
