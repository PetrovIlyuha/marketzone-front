import { PageWrapper } from "App.Styled";
import Button from "components/interactions/button/Button";
import useCurrencyRate from "hooks/data-driven/useCurrencyRate";
import { testProducts } from "pages/testProductsSeed";
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
  Name,
  ProductCardDiscountedPrice,
  ProductCardPrices,
  ProductCardRegularPrice,
} from "./styled";

const ProductDetails: FC = () => {
  const params = useParams();
  const { currencyRate } = useCurrencyRate();
  const [product, setProduct] = useState<IProductDetails | null>(null);
  const [magnifier, setMagnifier] = useState<boolean>(false);
  useEffect(() => {
    const foundProduct = testProducts.find((p) =>
      [String(p.id), p.slug].includes(params.id)
    );
    if (foundProduct) {
      setProduct(foundProduct);
    }
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
                  src={product.imgSrc}
                  width="100%"
                  height="500px"
                  zoomLevel={2.4}
                  magnifieWidth={200}
                  magnifierHeight={200}
                />
              ) : (
                <Image src={product.imgSrc} />
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
              {/* <Price>${product.priceRegular}</Price> */}
              <ProductCardPrices>
                {product.priceDiscounted && (
                  <ProductCardRegularPrice>
                    ₽&nbsp;
                    {currencyRate
                      ? (product.priceRegular * currencyRate).toFixed(2)
                      : product.priceRegular.toFixed(2)}
                  </ProductCardRegularPrice>
                )}
                <ProductCardDiscountedPrice>
                  ₽&nbsp;
                  {currencyRate
                    ? product.priceDiscounted
                      ? (product.priceDiscounted * currencyRate).toFixed(2)
                      : product.priceRegular.toFixed(2)
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
              <ActionsContainer>
                <Button type="secondary">Add To Cart</Button>
                <Button type="primary" onClick={handleLikeButtonClick}>
                  {favorites.includes(product.id)
                    ? "Remove From Favorites"
                    : "Add to Favorites"}
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
