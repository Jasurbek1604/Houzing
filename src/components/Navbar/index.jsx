import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Container, Wrapper, Section, Logo, Link, Main } from "./style";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section logo onClick={() => navigate("/home")}>
            <Logo /> <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ id, title, path }) => (
              <Link key={id} to={path}>
                {title}
              </Link>
            ))}
          </Section>
          <Section>
            <button>login</button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Navbar;
