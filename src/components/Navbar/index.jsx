import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Container, Wrapper, Section, Logo, Link, Main, Button } from "./style";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section left logo onClick={() => navigate("/home")}>
            <Logo /> <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ id, title, path }) => (
              <Link key={id} to={path}>
                {title}
              </Link>
            ))}
          </Section>
          <Section right>
            <Button>Login</Button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Navbar;
