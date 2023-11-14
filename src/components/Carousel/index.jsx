import React, { useRef } from "react";
import { Carousel } from "antd";
import { Button } from "../Generic";
import house1 from "../../assets/img/house1.png";
import house2 from "../../assets/img/house2.png";
import arrow from "../../assets/icons/arrow.svg";
import bath from "../../assets/icons/bath.svg";
import bed from "../../assets/icons/bed.svg";
import car from "../../assets/icons/car.svg";
import ruler from "../../assets/icons/ruler.svg";
import {
  CarouselItem,
  Img,
  Arrow,
  Container,
  Dark,
  Title,
  SubTitle,
  Price,
  Boxes,
  Box,
  Icon,
  P,
} from "./style";

const CarouselComponent = () => {
  const slider = useRef();

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };

  return (
    <Container>
      <Dark>
        <Title>Skyper Pool Partment</Title>
        <SubTitle>112 Glenwood Ave Hyde Park, Boston, MA</SubTitle>
        <Boxes>
          <Box>
            <Icon src={bed} />
            <P>4 beds</P>
          </Box>
          <Box>
            <Icon src={bath} />
            <P>5 Baths</P>
          </Box>
          <Box>
            <Icon src={car} />
            <P>1 Garage</P>
          </Box>
          <Box>
            <Icon src={ruler} />
            <P>1200 Sq Ft</P>
          </Box>
        </Boxes>
        <Price>$5,250/mo</Price>
        <Button type="dark">Read more</Button>
      </Dark>
      <Arrow data-name="left" onClick={onMove} left="true" src={arrow} />
      <Arrow data-name="right" onClick={onMove} right="true" src={arrow} />
      <Carousel ref={slider}>
        <CarouselItem>
          <Img src={house1} />
        </CarouselItem>
        <CarouselItem>
          <Img src={house2} />
        </CarouselItem>
      </Carousel>
    </Container>
  );
};
export default CarouselComponent;
