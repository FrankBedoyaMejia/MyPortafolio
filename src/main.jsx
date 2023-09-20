import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.sass";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Routes/Home.jsx";
import { SobreMi } from "./components/Routes/SobreMi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/sobremi" element={<SobreMi />} />
        <Route path="*" element={<h1>Pagina no encontrada</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
