import { PageWrapper } from "App.Styled";
import { FC } from "react";
import { Helmet } from "react-helmet";
import { ProductGroup, ProductGroupContainer } from "./styled";
import { testProducts } from "pages/testProductsSeed";
import ProductCard from "components/products/ProductCard/ProductCard";
import useCurrencyRate from "hooks/data-driven/useCurrencyRate";

const HomePage: FC = () => {
  const { currencyRate } = useCurrencyRate();

  return (
    <>
      <Helmet>
        <title>Главная - MarketZone</title>
      </Helmet>
      <PageWrapper>
        <ProductGroup>
          <h2>Recommended Products</h2>
          <ProductGroupContainer>
            {testProducts.map((product) => (
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

export default HomePage;
