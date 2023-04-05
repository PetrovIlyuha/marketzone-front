import { useState, ChangeEvent } from "react";
import { Input, MenuSection, Wrapper } from "./styled";
import { useAppSelector } from "store/types";
import { isLoggedIn } from "store/app/selectors";
import Logo from "./Logo/Logo";
import { BsBox } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";

import { RxHamburgerMenu } from "react-icons/rx";
import { default as CustomButton } from "components/interactions/button/Button";
import { Link } from "react-router-dom";
import { paths } from "routes/helpers";
import MenuIcon from "../../components/interactions/menu-icon/MenuIcon";
import UserDropDownMenu from "components/menus/UserDropDownMenu/UserDropDownMenu";

const Header = () => {
  const userLoggedIn = useAppSelector(isLoggedIn);
  const [searchInput, setSearchInput] = useState<string>("");
  console.log({ userLoggedIn });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  return (
    <Wrapper>
      <Logo />
      <CustomButton height="38px" type="secondary">
        <RxHamburgerMenu size={24} />
        <h2>Catalogue</h2>
      </CustomButton>
      <Input
        placeholder="Search Products..."
        value={searchInput}
        onChange={onInputChange}
      />
      {userLoggedIn ? (
        <MenuSection>
          <MenuIcon
            icon={<BsBox color="white" size={22} />}
            count={29}
            link="/orders"
          ></MenuIcon>
          <MenuIcon
            link="/favorites"
            icon={<AiOutlineHeart color="white" size={22} />}
          ></MenuIcon>
          <MenuIcon
            link="/notifications"
            icon={<IoMdNotificationsOutline color="white" size={22} />}
            count={30}
          ></MenuIcon>
          <MenuIcon
            link="/cart"
            icon={<RiShoppingCartLine color="white" size={22} />}
            count={9}
          ></MenuIcon>
          <UserDropDownMenu />
        </MenuSection>
      ) : (
        <MenuSection>
          <Link to={paths.login}>Login</Link>
        </MenuSection>
      )}
    </Wrapper>
  );
};

export default Header;
