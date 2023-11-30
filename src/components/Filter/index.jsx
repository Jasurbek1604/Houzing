import React, { useState, useRef } from "react";
import { Dropdown } from "antd";
import { Main, Img, Form, Label, Inputs } from "./style";
import { Input, Button } from "../Generic/index";
import setting from "../../assets/icons/setting.svg";
import houses from "../../assets/icons/houses.svg";
import search from "../../assets/icons/search.svg";
import { useReplace } from "../../hooks/useReplace";
import { useSearch } from "../../hooks/useSearch";
import { useLocation, useNavigate } from "react-router-dom";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sortRef = useRef();
  const sizeRef = useRef();

  const minPriceRef = useRef();
  const maxPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location.pathname}${useReplace(name, value)}`);
  };

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
              onChange={onChange}
              defaultValue={query.get("country")}
              name="country"
            />
            <Input
              ref={regionRef}
              type="text"
              placeholder={"Region"}
              width={180}
              height={44}
              onChange={onChange}
              defaultValue={query.get("region")}
              name="region"
            />
            <Input
              ref={cityRef}
              type="text"
              placeholder={"City"}
              width={180}
              height={44}
              onChange={onChange}
              defaultValue={query.get("city")}
              name="city"
            />
            <Input
              type="text"
              placeholder={"Zip code"}
              width={180}
              height={44}
              onChange={onChange}
              defaultValue={query.get("zip_code")}
              name="zip_code"
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
              onChange={onChange}
              defaultValue={query.get("room")}
              name="room"
            />
            <Input
              ref={sizeRef}
              type="text"
              placeholder={"Size"}
              width={180}
              height={44}
              onChange={onChange}
              defaultValue={query.get("size")}
              name="size"
            />
            <Input
              ref={sortRef}
              type="text"
              placeholder={"Sort"}
              width={180}
              height={44}
              onChange={onChange}
              defaultValue={query.get("sort")}
              name="sort"
            />
          </Inputs>
          <Label>Price</Label>
          <Inputs>
            <Input
              type="text"
              placeholder={"Min price"}
              width={180}
              height={44}
              onChange={onChange}
              defaultValue={query.get("min_price")}
              name="min_price"
              ref={minPriceRef}
            />
            <Input
              type="text"
              placeholder={"Max price"}
              width={180}
              height={44}
              onChange={onChange}
              defaultValue={query.get("max_price")}
              name="max_price"
              ref={maxPriceRef}
            />
          </Inputs>
        </Form>
      ),
    },
  ];
  return (
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
  );
};

export default Filter;
