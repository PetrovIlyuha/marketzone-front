import React from "react";
import { LogoText, LogoWrapper } from "./styled";

import LogoDark from "../../../assets/logo_dark_bg.jpg";
import { Link } from "react-router-dom";
import { paths } from "routes/helpers";

const Logo = () => {
  return (
    <Link to={paths.home}>
      <LogoWrapper>
        <img src={LogoDark} alt="" />
        <LogoText>
          <h2>MarketZone</h2>
          <h3>Zoned In Shopping</h3>
        </LogoText>
      </LogoWrapper>
    </Link>
  );
};

export default Logo;
