import { PageWrapper } from "App.Styled";
import Button from "components/interactions/button/Button";
import useCurrencyRate from "hooks/data-driven/useCurrencyRate";
import { IProductDetails } from "pages/types";
import { FC, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "store/favorites/reducer";
import { selectFavoritedProducts } from "store/favorites/selectors";
import { useAppDispatch, useAppSelector } from "store/types";

import ImageMagnifierGlass from "utils/ImageMagnifierClass";

import { GiMagnifyingGlass } from "react-icons/gi";

import {
  ActionsContainer,
  Container,
  Description,
  DetailsContainer,
  GlassButton,
  Image,
  ImageContainer,
  LikeButtonWrapper,
  MagnifierScaler,
  Name,
  ProductCardDiscountedPrice,
  ProductCardPrices,
  ProductCardRegularPrice,
} from "./styled";
import { get } from "utils/requests";

const ProductDetails: FC = () => {
  const params = useParams();
  const { currencyRate } = useCurrencyRate();
  const [product, setProduct] = useState<IProductDetails | null>(null);
  const [magnifier, setMagnifier] = useState<boolean>(false);
  const [magnifierRadius, setMagnifierRadius] = useState<number>(300);
  const [magnifierPower, setMagnifierPower] = useState<number>(2);

  useEffect(() => {
    get(`products/${params.id}`).then(({ data }) => setProduct(data));
  }, [params.id]);

  const favorites = useAppSelector(selectFavoritedProducts);
  const dispatch = useAppDispatch();

  const handleLikeButtonClick = () => {
    if (product) {
      if (!favorites.includes(product.id)) {
        dispatch(addToFavorites(product.id));
      } else {
        dispatch(removeFromFavorites(product.id));
      }
    }
  };
  return (
    <PageWrapper>
      <Container>
        {product ? (
          <>
            <ImageContainer>
              {magnifier ? (
                <ImageMagnifierGlass
                  src={`${process.env.REACT_APP_API_URL}images/products/${product.image}`}
                  width="100%"
                  height="500px"
                  zoomLevel={1.5 * magnifierPower}
                  magnifieWidth={magnifierRadius}
                  magnifierHeight={magnifierRadius}
                />
              ) : (
                <Image
                  src={`${process.env.REACT_APP_API_URL}images/products/${product.image}`}
                />
              )}
            </ImageContainer>
            <LikeButtonWrapper onClick={handleLikeButtonClick}>
              <FaHeart
                size={20}
                color={
                  favorites.includes(product.id)
                    ? "#f72731"
                    : "rgba(40,40,40,0.3)"
                }
              />
            </LikeButtonWrapper>
            <DetailsContainer>
              <Name>{product.title}</Name>
              {/* <Price>${product.price}</Price> */}
              <ProductCardPrices>
                {product.priceDiscounted && (
                  <ProductCardRegularPrice>
                    ₽&nbsp;
                    {currencyRate
                      ? (product.price * currencyRate).toFixed(2)
                      : product.price.toFixed(2)}
                  </ProductCardRegularPrice>
                )}
                <ProductCardDiscountedPrice>
                  ₽&nbsp;
                  {currencyRate
                    ? product.priceDiscounted
                      ? (product.priceDiscounted * currencyRate).toFixed(2)
                      : product.price.toFixed(2)
                    : null}
                </ProductCardDiscountedPrice>
              </ProductCardPrices>
              <Description>{product.description}</Description>
              <GlassButton
                onClick={() => setMagnifier((p) => !p)}
                enabled={magnifier}
              >
                <GiMagnifyingGlass size={32} />
                <span>{magnifier ? "Disable" : "Enable"} Magnifier</span>
              </GlassButton>
              {magnifier && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "50%",
                    justifyContent: "space-between",
                    margin: "1rem 0",
                  }}
                >
                  <MagnifierScaler>
                    <label htmlFor="magnifierScale">
                      Magnifier Power:{" "}
                      {magnifierPower === 1
                        ? "Min 1.5x"
                        : magnifierPower === 2
                        ? "Mid 3.0x"
                        : "Max 4.5x"}
                    </label>
                    <input
                      type="range"
                      min={1}
                      max={3}
                      value={magnifierPower}
                      onChange={(e) => setMagnifierPower(+e.target.value)}
                      id="magnifierScale"
                    />
                  </MagnifierScaler>
                  <MagnifierScaler>
                    <label htmlFor="magnifierScale">
                      Magnifier Size: {magnifierRadius}
                    </label>
                    <input
                      type="range"
                      min={200}
                      max={500}
                      value={magnifierRadius}
                      onChange={(e) => setMagnifierRadius(+e.target.value)}
                      id="magnifierScale"
                    />
                  </MagnifierScaler>
                </div>
              )}
              <ActionsContainer>
                <Button type="secondary">Add To Cart</Button>
                <Button type="primary" onClick={handleLikeButtonClick}>
                  {favorites.includes(product.id)
                    ? "Remove From Wishlist"
                    : "Add to Wishlist"}
                </Button>
              </ActionsContainer>
            </DetailsContainer>
          </>
        ) : (
          <h2>There is no product with ID: {params.id}</h2>
        )}
      </Container>
    </PageWrapper>
  );
};

export default ProductDetails;
