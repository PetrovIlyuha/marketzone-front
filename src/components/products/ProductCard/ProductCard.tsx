import { useState } from "react";
import {
  ProductCardWrapper,
  ProductCardImage,
  LikeButtonWrapper,
  ProductCardContent,
  ProductCardName,
  ProductCardDescription,
  ProductCardPrices,
  ProductCardRegularPrice,
  ProductCardDiscountedPrice,
  ProductCardImageWrapper,
} from "./productCard.styled";

import { FaHeart } from "react-icons/fa";
import { IProductDetails } from "pages/types";
import { Link } from "react-router-dom";
import Button from "components/interactions/button/Button";

interface ProductCardProps {
  product: IProductDetails;
  onLikeButtonClick?: () => void;
  exchangeRate?: number;
  isLiked?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  exchangeRate,
  onLikeButtonClick,
  isLiked = false,
}) => {
  const [liked, setLiked] = useState<boolean>(isLiked);
  const {
    id,
    slug,
    imgSrc,
    description,
    title,
    priceRegular,
    priceDiscounted,
  } = product;

  const handleLikeButtonClick = () => {
    if (onLikeButtonClick) {
      onLikeButtonClick();
    }

    setLiked(!liked);
  };

  return (
    <ProductCardWrapper>
      <ProductCardImageWrapper>
        <ProductCardImage src={imgSrc} />
      </ProductCardImageWrapper>
      <LikeButtonWrapper onClick={handleLikeButtonClick}>
        <FaHeart size={20} color={liked ? "#f72731" : "rgba(40,40,40,0.3)"} />
      </LikeButtonWrapper>
      <ProductCardContent>
        <ProductCardName>
          <Link to={`/product/${slug || id}`}>{title}</Link>
        </ProductCardName>
        <ProductCardDescription>{description}</ProductCardDescription>
        <ProductCardPrices>
          {priceDiscounted && (
            <ProductCardRegularPrice>
              ₽&nbsp;
              {exchangeRate
                ? (priceRegular * exchangeRate).toFixed(2)
                : priceRegular.toFixed(2)}
            </ProductCardRegularPrice>
          )}
          <ProductCardDiscountedPrice>
            ₽&nbsp;
            {exchangeRate
              ? priceDiscounted
                ? (priceDiscounted * exchangeRate).toFixed(2)
                : priceRegular.toFixed(2)
              : null}
          </ProductCardDiscountedPrice>
        </ProductCardPrices>
        <Button
          block
          type="primary"
          onClick={() => console.log("product in cart")}
        >
          Add To Cart
        </Button>
      </ProductCardContent>
    </ProductCardWrapper>
  );
};

export default ProductCard;
