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
  console.log(exchangeRate);

  const handleLikeButtonClick = () => {
    if (onLikeButtonClick) {
      onLikeButtonClick();
    }

    setLiked(!liked);
  };

  return (
    <ProductCardWrapper>
      <ProductCardImageWrapper>
        <ProductCardImage src={product.imgSrc} />
      </ProductCardImageWrapper>
      <LikeButtonWrapper onClick={handleLikeButtonClick}>
        <FaHeart size={20} color={liked ? "#f72731" : "rgba(40,40,40,0.3)"} />
      </LikeButtonWrapper>
      <ProductCardContent>
        <ProductCardName>{product.title}</ProductCardName>
        <ProductCardDescription>{product.description}</ProductCardDescription>
        <ProductCardPrices>
          {product.priceDiscounted && (
            <ProductCardRegularPrice>
              ₽&nbsp;
              {exchangeRate
                ? (product.priceRegular * exchangeRate).toFixed(2)
                : product.priceRegular.toFixed(2)}
            </ProductCardRegularPrice>
          )}
          <ProductCardDiscountedPrice>
            ₽&nbsp;
            {exchangeRate
              ? product.priceDiscounted
                ? (product.priceDiscounted * exchangeRate).toFixed(2)
                : product.priceRegular.toFixed(2)
              : null}
          </ProductCardDiscountedPrice>
        </ProductCardPrices>
      </ProductCardContent>
    </ProductCardWrapper>
  );
};

export default ProductCard;
