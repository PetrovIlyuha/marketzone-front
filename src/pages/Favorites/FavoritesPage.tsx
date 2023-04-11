import { useEffect } from "react";
import { PageWrapper } from "App.Styled";
import { Helmet } from "react-helmet";
import { ProductGroup, ProductGroupContainer } from "./styled";
import ProductCard from "components/products/ProductCard/ProductCard";
import { testProducts } from "pages/testProductsSeed";
import { selectFavoritedProducts } from "store/favorites/selectors";
import { useAppSelector } from "store/types";
import useCurrencyRate from "hooks/data-driven/useCurrencyRate";
import { useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const navigate = useNavigate();
  const favoritedProducts = useAppSelector(selectFavoritedProducts);

  useEffect(() => {
    if (!favoritedProducts.length) {
      navigate(-1);
    }
  }, [favoritedProducts.length, navigate]);

  const { currencyRate } = useCurrencyRate();
  return (
    <>
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <PageWrapper>
        <ProductGroup>
          <h2>Your Favorites</h2>
          <ProductGroupContainer>
            {testProducts
              .filter((p) => favoritedProducts.includes(p.id))
              .map((product) => (
                <ProductCard
                  exchangeRate={currencyRate}
                  product={product}
                  key={product.id}
                />
              ))}
          </ProductGroupContainer>
        </ProductGroup>
      </PageWrapper>
    </>
  );
};

export default FavoritesPage;
