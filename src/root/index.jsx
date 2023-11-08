import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { navbar } from "../utils/navbar";
import Navbar from "../components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ id, element, path }) => {
            return <Route path={path} element={element} key={id} />;
          })}
          <Route path="/" element={<Navigate to={"/home"} />} />
          <Route path="*" element={<h1>404 not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
