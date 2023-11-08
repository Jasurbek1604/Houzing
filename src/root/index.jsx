import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { navbar } from "../utils/navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {navbar.map(({ id, element, path }) => {
          return <Route path={path} element={element} key={id} />;
        })}
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
