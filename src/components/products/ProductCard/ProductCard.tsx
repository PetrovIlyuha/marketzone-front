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
import { Link, NavLink } from "react-router-dom";
import Button from "components/interactions/button/Button";
import { useAppDispatch, useAppSelector } from "store/types";
import { selectFavoritedProducts } from "store/favorites/selectors";
import { addToFavorites, removeFromFavorites } from "store/favorites/reducer";

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

  return (
    <ProductCardWrapper>
      <ProductCardImageWrapper>
        <ProductCardImage src={imgSrc} />
      </ProductCardImageWrapper>
      <LikeButtonWrapper onClick={handleLikeButtonClick}>
        <FaHeart
          size={20}
          color={
            favorites.includes(product.id) ? "#f72731" : "rgba(40,40,40,0.3)"
          }
        />
      </LikeButtonWrapper>
      <ProductCardContent>
        <ProductCardName>
          <NavLink to={`product/${id}`} end>
            {title}
          </NavLink>
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
