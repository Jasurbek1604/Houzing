import styled from "styled-components";

export const Container = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  min-width: 120px;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  border: 1px solid #e6e9ec;
  outline: none;
  padding-left:5px;
`;
