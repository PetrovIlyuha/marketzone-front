import { useEffect, useState } from "react";
import { PageWrapper } from "App.Styled";
import { Helmet } from "react-helmet";
import { ProductGroup, ProductGroupContainer } from "./styled";
import ProductCard from "components/products/ProductCard/ProductCard";
import { selectFavoritedProducts } from "store/favorites/selectors";
import { useAppSelector } from "store/types";
import useCurrencyRate from "hooks/data-driven/useCurrencyRate";
import { useNavigate } from "react-router-dom";
import { IProductDetails } from "pages/types";
import { get } from "utils/requests";

const FavoritesPage = () => {
  const navigate = useNavigate();
  const favoritedProductsIds = useAppSelector(selectFavoritedProducts);
  const [products, setProducts] = useState<IProductDetails[]>([]);

  useEffect(() => {
    if (!favoritedProductsIds.length) {
      navigate(-1);
    } else {
      get(`products/favorites`, { ids: favoritedProductsIds.join(",") }).then(
        ({ data }) => setProducts(data)
      );
    }
  }, [favoritedProductsIds, navigate]);

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
            {products.length > 0 &&
              products.map((product: any) => (
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
