import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Wrapper, Section, Logo, Link, Main } from "./style";
import { Button } from "../Generic/";
import logo from "../../assets/img/logo.png";
import Filter from "../Filter";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <Main>
        <Wrapper>
          <Section left="true" logo="true" onClick={() => navigate("/home")}>
            <Logo src={logo} /> <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(
              ({ id, title, path, hidden }) =>
                !hidden && (
                  <Link key={id} to={path}>
                    {title}
                  </Link>
                )
            )}
          </Section>
          <Section right="true">
            <Button type="dark" onClick={() => navigate("/signin")}>
              Sign In
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
    </>
  );
};

export default Navbar;
