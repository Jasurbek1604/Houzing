import styled from "styled-components";

const getType = ({ type }) => {
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
        background: "#fff",
        border: "1px solid #e6e9ec",
        color: "#0d263b",
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
  width: ${({ width }) => (width ? `${width}px` : "130px")};
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  border-radius: 2px;
  ${getType}
  min-width:120px;
  cursor: pointer;
  &:active {
    opacity: 0.7;
  }
`;
