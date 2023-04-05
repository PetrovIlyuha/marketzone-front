import React from "react";
import { Wrapper } from "./styled";
import AvatarForLoggedInUser from "../../../assets/logged-in-user-avatar.jpg";

const UserAvatar = () => {
  return (
    <Wrapper>
      <img src={AvatarForLoggedInUser} alt="" />
    </Wrapper>
  );
};

export default UserAvatar;
