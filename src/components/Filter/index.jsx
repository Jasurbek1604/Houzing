import React, { useState, useRef } from "react";
import { Dropdown } from "antd";
import { Container, Main, Img, Form, Label, Inputs } from "./style";
import { Input, Button } from "../Generic/index";
import setting from "../../assets/icons/setting.svg";
import houses from "../../assets/icons/houses.svg";
import search from "../../assets/icons/search.svg";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sortRef = useRef();
  const sizeRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const items = [
    {
      key: "1",
      label: (
        <Form>
          <Label>Address</Label>
          <Inputs>
            <Input
              ref={countryRef}
              type="text"
              placeholder={"Country"}
              width={180}
              height={44}
            />
            <Input
              ref={regionRef}
              type="text"
              placeholder={"Region"}
              width={180}
              height={44}
            />
            <Input
              ref={cityRef}
              type="text"
              placeholder={"City"}
              width={180}
              height={44}
            />
            <Input
              type="text"
              placeholder={"Zip code"}
              width={180}
              height={44}
              ref={zipRef}
            />
          </Inputs>
          <Label>Apartment info</Label>
          <Inputs>
            <Input
              ref={roomsRef}
              type="text"
              placeholder={"Rooms"}
              width={180}
              height={44}
            />
            <Input
              ref={sizeRef}
              type="text"
              placeholder={"Size"}
              width={180}
              height={44}
            />
            <Input
              ref={sortRef}
              type="text"
              placeholder={"Sort"}
              width={180}
              height={44}
            />
          </Inputs>
          <Label>Price</Label>
          <Inputs>
            <Input
              type="text"
              placeholder={"Min price"}
              width={180}
              height={44}
              ref={minPriceRef}
            />
            <Input
              type="text"
              placeholder={"Max price"}
              width={180}
              height={44}
              ref={maxPriceRef}
            />
          </Inputs>
        </Form>
      ),
    },
  ];
  return (
    <Container>
      <Main>
        <Input
          icon={houses}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        />
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          arrow={{ pointAtCenter: true }}
          open={isOpen}
        >
          <div>
            <Button onClick={() => setIsOpen(!isOpen)} type="light">
              <Img src={setting} /> Advenced
            </Button>
          </div>
        </Dropdown>

        <Button type={"primary"}>
          <Img src={search} /> Search
        </Button>
      </Main>
    </Container>
  );
};

export default Filter;
