import { React, useEffect } from "react";
import Header from "./components/Header";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  });
  return (
    <>
      <Header />
    </>
  );
}

export default App;
