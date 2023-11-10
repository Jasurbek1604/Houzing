import styled from "styled-components";
// import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--colorPrimary);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  max-width: 1440px;
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ right }) => right && "flex-end"};
  width: ${({ left, right }) => (left || right) && "150px"};
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #b8ff06;
  }
`;

export const Logo = styled("img")`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #fff;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 0 30px;
`;
