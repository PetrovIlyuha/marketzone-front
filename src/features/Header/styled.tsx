import React from "react";
import { HEADER_HEIGHT, Z_INDEX_2 } from "consts";
import colors from "consts/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  transition: all 0.2s ease-out;
  background-color: ${colors.accent_primary};
  height: ${HEADER_HEIGHT}px;
  z-index: ${Z_INDEX_2};
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 1rem;
  border-radius: 7px;
  border: 1px solid ${colors.primary};
  font-size: 1rem;
  font-weight: 600;
  &::placeholder {
    font-size: 1rem;
    font-weight: 600;
    color: lightgray;
  }
`;

export const MenuSection = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 1.8rem;
`;
