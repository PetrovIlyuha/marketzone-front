import colors from "consts/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  position: relative;
  span {
    position: absolute;
    top: -50%;
    right: -50%;
    background: ${colors.count_item_bg};
    color: ${colors.count_item_text};
    height: 23px;
    width: 23px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: 600;
  }
`;
