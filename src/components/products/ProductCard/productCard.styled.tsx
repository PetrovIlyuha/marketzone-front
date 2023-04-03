import styled from "styled-components";

export const ProductCardWrapper = styled.div`
  width: 100%;
  min-height: 550px;
  border: 1px solid #f9e8e8;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease-out;
  &:hover {
    box-shadow: 3px 5px 12px -2px rgba(0, 0, 0, 0.18);
  }
  @media (max-width: 600px) {
    height: 300px;
  }
`;

export const ProductCardImageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 50%;
`;

export const ProductCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.03);
  }
`;

export const ProductCardContent = styled.div`
  padding: 20px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  button {
    margin-top: 20px;
  }
`;

export const ProductCardName = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  word-wrap: break-word;
  color: #333;
`;

export const ProductCardDescription = styled.p`
  margin: 10px 0;
  font-size: 14px;
  padding: 10px;
  border: 1px solid #f9e8e8;
  border-radius: 5px;
  color: #666;
`;

export const ProductCardPrices = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const ProductCardRegularPrice = styled.span`
  font-size: 16px;
  color: #333;
  text-decoration: line-through;
  margin-right: 10px;
`;

export const ProductCardDiscountedPrice = styled.span`
  font-size: 18px;
  color: #e91e63;
  font-weight: bold;
`;

export const LikeButtonWrapper = styled.div`
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
  padding: 7px;
  border-radius: 8px;
  background: rgba(230, 230, 230, 0.7);
`;

export const LikeButtonIcon = styled.i<{ isLiked: boolean }>`
  font-size: 24px;
  color: ${(props) => (props.isLiked ? "#e91e63" : "#ccc")};
`;
