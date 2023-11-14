import React from "react";
import { Container, Img, Content, Details, Icons, Divider } from "./style";
import noimg from "../../assets/img/noimg.png";
import bed1 from "../../assets/icons/bed.svg";
import bath1 from "../../assets/icons/bath.svg";
import garage1 from "../../assets/icons/car.svg";
import ruler1 from "../../assets/icons/ruler.svg";
import love1 from "../../assets/icons/love.svg";
import resize1 from "../../assets/icons/resize.svg";

const HouseCard = ({ url, title, info, bed, bath, garage, ruler }) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Bed src={bed1} />
            <div className="info">Bed {bed || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath src={bath1} />
            <div className="info">Bath {bath || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage src={garage1} />
            <div className="info">Garage {garage || 0} </div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler src={ruler1} />
            <div className="info">Ruler {ruler || 0}</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer="true">
        <Details.Item footer="true">
          <div className="info">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
        </Details.Item>
        <Details.Item row="true">
          <Icons.Resize src={resize1} />
          <Icons.Love src={love1} />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
