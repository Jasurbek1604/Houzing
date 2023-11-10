import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #fff",
        color: "#fff",
      };
    case "primary": {
      return {
        background: "#0061df",
        border: "none",
        color: "#fff",
      };
    }
    case "light": {
      return {
        background: "#0061df",
        border: "none",
        color: "#fff",
      };
    }
    default:
      return {
        background: "#0061df",
        border: "none",
        color: "#fff",
      };
  }
};

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  border-radius: 2px;
  ${getType("dark")}
`;
