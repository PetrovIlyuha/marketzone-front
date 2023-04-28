import colors from "consts/colors";
import styled from "styled-components";

interface Props {
  iconSize?: string;
  iconBgColor?: string;
}

export const Wrapper = styled.div<Props>`
  display: grid;
  place-items: center;
  position: relative;
  span {
    position: absolute;
    top: -50%;
    right: -50%;
    background: ${({ iconBgColor }) =>
      iconBgColor ? iconBgColor : colors.count_item_bg};
    color: ${colors.count_item_text};
    height: ${({ iconSize }) => (iconSize ? iconSize : "23px")};
    width: ${({ iconSize }) => (iconSize ? iconSize : "23px")};
    border-radius: 50%;
    display: grid;
    place-items: center;
    font-weight: 600;
  }
`;
