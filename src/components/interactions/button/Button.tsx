import colors from "consts/colors";
import React from "react";
import styled from "styled-components";

interface IButtonProps {
  type?: "primary" | "secondary" | "ghost";
  children?: React.ReactNode;
  block?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<any>) => void;
}

const Button = styled(
  ({
    children,
    type = "primary",
    disabled,
    block = false,
    onClick = () => {},
    ...props
  }: IButtonProps) => (
    <button type="button" {...props} onClick={!disabled ? onClick : () => {}}>
      {children}
    </button>
  )
)`
  user-select: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 5px;
  display: inline-flex;
  align-items: center;
  width: ${({ block }) => (block ? "100%" : "fit-content")};
  justify-content: ${({ block }) => (block ? "center" : "initial")};
  font-size: 14px;
  font-weight: 600;
  padding: 10px 22px;
  letter-spacing: 0.5px;
  margin-top: 10px;
  transition: all 0.23s ease-out;
  border: 1px solid
    ${({ type }) => (type === "ghost" ? colors.primary : "transparent")};
  background-color: ${({ type, disabled }) => {
    if (disabled) return "#c2c2c2";
    switch (type) {
      case "primary":
        return colors.primary;
      case "secondary":
        return colors.secondary;
      case "ghost":
        return "#fff";
    }
  }};
  color: ${({ type }) => {
    switch (type) {
      case "primary":
        return "#ffe";
      case "secondary":
        return "#133";
      case "ghost":
        return "#fff";
    }
  }};
  &:hover {
    background-color: ${({ type, disabled }) => {
      if (disabled) return "#c2c2c2";
      switch (type) {
        case "primary":
          return colors.primary_hovered;
        case "secondary":
          return colors.accent_secondary;
        case "ghost":
          return "#fff";
      }
    }};
    color: ${({ type }) => {
      switch (type) {
        case "primary":
          return colors.light_primary;
        case "secondary":
          return "#fff";
        case "ghost":
          return "#fff";
      }
    }};
  }
`;

export default Button;