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
import { selectFavoritedProducts } from "store/favorites/selectors";

const Header = () => {
  const userLoggedIn = useAppSelector(isLoggedIn);
  const [searchInput, setSearchInput] = useState<string>("");
  const favoritedProducts = useAppSelector(selectFavoritedProducts);

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
            icon={<BsBox color="gray" size={22} />}
            link="/orders"
          ></MenuIcon>
          <MenuIcon
            link="/favorites"
            linkActive={favoritedProducts.length !== 0}
            icon={
              <AiOutlineHeart
                color={favoritedProducts.length ? "white" : "gray"}
                size={22}
              />
            }
            count={
              favoritedProducts.length ? favoritedProducts.length : undefined
            }
          ></MenuIcon>
          <MenuIcon
            link="/notifications"
            icon={<IoMdNotificationsOutline color="gray" size={22} />}
          ></MenuIcon>
          <MenuIcon
            link="/cart"
            icon={<RiShoppingCartLine color="gray" size={22} />}
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
