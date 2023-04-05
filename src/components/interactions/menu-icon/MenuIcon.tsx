import React, { FC } from "react";
import { Wrapper } from "./styled";
import { Link } from "react-router-dom";

interface Props {
  icon: any;
  count?: number;
  link: string;
}

const MenuIcon: FC<Props> = ({ icon, count, link }) => {
  return (
    <Wrapper>
      <Link to={link}>{icon}</Link>
      {count && <span>{count}</span>}
    </Wrapper>
  );
};

export default MenuIcon;
