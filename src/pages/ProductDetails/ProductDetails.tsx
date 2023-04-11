import { PageWrapper } from "App.Styled";
import Button from "components/interactions/button/Button";
import { testProducts } from "pages/testProductsSeed";
import { IProductDetails } from "pages/types";
import { FC, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "store/favorites/reducer";
import { selectFavoritedProducts } from "store/favorites/selectors";
import { useAppDispatch, useAppSelector } from "store/types";
import styled from "styled-components";

const Container = styled.div`
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

const ImageContainer = styled.div`
  width: 50%;
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Name = styled.h1`
  font-size: 2rem;
`;

const Price = styled.h2`
  font-size: 1.5rem;
  color: #4caf50;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

const LikeButtonWrapper = styled.div`
  position: absolute;
  top: 3%;
  right: 1%;
  cursor: pointer;
  padding: 7px;
  border-radius: 8px;
  background: rgba(230, 230, 230, 0.7);
`;

const ActionsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  > * {
    width: 200px;
    text-align: center;
  }
`;

const ProductDetails: FC = () => {
  const params = useParams();
  const [product, setProduct] = useState<IProductDetails | null>(null);
  useEffect(() => {
    const foundProduct = testProducts.find((p) => String(p.id) === params.id);
    console.log({ foundProduct });
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
              <Image src={product.imgSrc} alt={product.title} />
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
              <Price>${product.priceRegular}</Price>
              <Description>{product.description}</Description>
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
