import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.div`
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 10px 0;
`;

export const Img = styled.img`
  margin-right: 6px;
`;

export const Form = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 16px;
  color: var(--colorPrimary);
`;

export const Inputs = styled.div`
  display: flex;
  gap: 15px;
  margin: 5px 0 20px;
`;
