import { FC } from "react";
import { Wrapper } from "./styled";
import { Link } from "react-router-dom";

interface Props {
  icon: any;
  count?: number;
  linkActive?: boolean;
  link: string;
}

const MenuIcon: FC<Props> = ({ icon, count, linkActive, link }) => {
  console.log(count);
  return (
    <Wrapper>
      {linkActive ? <Link to={link}>{icon}</Link> : icon}
      {count && <span>{count}</span>}
    </Wrapper>
  );
};

export default MenuIcon;
