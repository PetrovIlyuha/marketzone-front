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
import { useAppDispatch, useAppSelector } from "store/types";
import { selectFavoritedProducts } from "store/favorites/selectors";
import { addToFavorites, removeFromFavorites } from "store/favorites/reducer";
import { useMemo } from "react";

interface ProductCardProps {
  product: IProductDetails;
  onLikeButtonClick?: () => void;
  exchangeRate?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  exchangeRate,
  onLikeButtonClick,
}) => {
  const favorites = useAppSelector(selectFavoritedProducts);
  const dispatch = useAppDispatch();

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
    if (!favorites.includes(product.id)) {
      dispatch(addToFavorites(product.id));
    } else {
      dispatch(removeFromFavorites(product.id));
    }
  };

  const userIsOnFavoritesPage = useMemo(
    () => window.location.pathname === "/favorites",
    []
  );

  return (
    <ProductCardWrapper>
      <ProductCardImageWrapper>
        <ProductCardImage src={imgSrc} />
      </ProductCardImageWrapper>
      {userIsOnFavoritesPage ? null : (
        <LikeButtonWrapper onClick={handleLikeButtonClick}>
          <FaHeart
            size={20}
            color={
              favorites.includes(product.id) ? "#f72731" : "rgba(40,40,40,0.3)"
            }
          />
        </LikeButtonWrapper>
      )}
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
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button
            block
            height="40px"
            type="primary"
            onClick={() => console.log("product in cart")}
          >
            Add To Cart
          </Button>
          {userIsOnFavoritesPage && (
            <Button
              height="40px"
              block
              type="secondary"
              onClick={handleLikeButtonClick}
            >
              Remove
            </Button>
          )}
        </div>
      </ProductCardContent>
    </ProductCardWrapper>
  );
};

export default ProductCard;
