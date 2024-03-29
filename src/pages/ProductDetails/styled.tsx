import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  gap: 4rem;
  position: relative;
`;

export const ImageContainer = styled.div`
  width: 50%;
  overflow: hidden;
  border-radius: 0.5rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  transition: transform 0.4s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Name = styled.h1`
  font-size: 2rem;
`;

export const Price = styled.h2`
  font-size: 1.5rem;
  color: #4caf50;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
`;

export const LikeButtonWrapper = styled.div`
  position: absolute;
  top: 3%;
  right: 1%;
  cursor: pointer;
  padding: 7px;
  border-radius: 8px;
  background: rgba(230, 230, 230, 0.7);
`;

export const ActionsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  > * {
    width: 200px;
    text-align: center;
  }
`;

export const ProductCardPrices = styled.div`
  display: flex;
  align-items: center;
  margin: 1.2rem 0;
  gap: 1rem;
`;

export const ProductCardRegularPrice = styled.span`
  font-size: 1.8rem;
  color: #333;
  text-decoration: line-through;
  margin-right: 10px;
`;

export const ProductCardDiscountedPrice = styled.span`
  font-size: 1.8rem;
  color: #e91e63;
  background: lightgreen;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  font-weight: bold;
  box-shadow: inset 4px 4px 12px rgba(0, 0, 0, 0.21);
`;

interface GlassProps {
  enabled?: boolean;
}

export const GlassButton = styled.button<GlassProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  box-shadow: 3px 3px 20px -8px rgba(0, 0, 0, 0.3);
  transition: all 0.25s ease-in-out;
  width: 180px;
  margin-top: 1rem;
  background: ${({ enabled }) => (enabled ? "#763cd2" : "lightgray")};
  color: ${({ enabled }) => (enabled ? "white" : "#763cd2")};
  padding: 0.2rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;

  span {
    font-weight: bold;
  }
`;

export const MagnifierScaler = styled.div`
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.6rem;
    font-weight: bolder;
  }
  /* Remove default styles */
  input[type="range"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 120px;
    height: 10px;
    background-color: transparent;
    box-shadow: 2px 4px 8px rgb(0 0 0 / 30%);
  }

  /* Custom track styles */
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 20px;
    background-color: darkcyan; /* Wide darkcyan line */
    border-radius: 5px;
  }

  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 10px;
    background-color: darkcyan; /* Wide darkcyan line */
    border-radius: 5px;
  }

  input[type="range"]::-ms-track {
    width: 100%;
    height: 10px;
    background-color: darkcyan; /* Wide black line */
    border-radius: 5px;
  }

  /* Custom handler styles */
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: blue; /* Blue handler */
    border-radius: 3px;
    border: 2px solid white; /* Add a border for a more prominent handler */
    cursor: pointer;
  }

  input[type="range"]::-moz-range-thumb {
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    background-color: blue; /* Blue handler */
    border-radius: 3px;
    border: 2px solid white; /* Add a border for a more prominent handler */
    cursor: pointer;
  }

  input[type="range"]::-ms-thumb {
    -ms-appearance: none;
    width: 20px;
    height: 20px;
    background-color: blue; /* Blue handler */
    border-radius: 3px;
    border: 2px solid white; /* Add a border for a more prominent handler */
    cursor: pointer;
  }
`;
