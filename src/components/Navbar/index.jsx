import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./style";

const Navbar = () => {
  return (
    <Container>
      <h1>Navbar</h1>
      <Outlet />
    </Container>
  );
};

export default Navbar;
