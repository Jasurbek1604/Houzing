import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const CarouselItem = styled.div`
  background: black;
  color: #fff;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Arrow = styled.img`
  position: absolute;
  color: red;
  z-index: 1;
  top: 50%;
  right: ${({ right }) => right && "20px"};
  left: ${({ left }) => left && "20px"};
  transform: translateY(-50%)
    rotate(${({ left }) => (left ? "90deg" : "-90deg")});
  cursor: pointer;
  background: rgba(255, 255, 255, 0.2);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  padding: 15px;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const Dark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 44px;
  font-weight: 700;
`;
export const SubTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  margin: 15px 0;
`;

export const Price = styled.div`
  font-weight: 600;
  font-size: 28px;
  margin: 15px 20px;
`;

export const Boxes = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:5px;
`;
export const Icon = styled.img`
  width: 25px;
  height: 25px;
`;
export const P = styled.div`
  font-size: 16px;
  font-weight: 400;
`;
