import { PageWrapper } from "App.Styled";
import { FC, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ProductGroup, ProductGroupContainer } from "./styled";
import { testProducts } from "pages/testProductsSeed";
import ProductCard from "components/products/ProductCard/ProductCard";
import useCurrencyRate from "hooks/data-driven/useCurrencyRate";
import axios from "axios";
import { get } from "utils/requests";
import { IProductDetails, IResponse } from "pages/types";

const HomePage: FC = () => {
  const { currencyRate } = useCurrencyRate();
  const [products, setProducts] = useState<IProductDetails[]>([]);

  useEffect(() => {
    get("products").then((res: IResponse) => setProducts(res.data as any[]));
  }, []);

  return (
    <>
      <Helmet>
        <title>Главная - MarketZone</title>
      </Helmet>
      <PageWrapper>
        <ProductGroup>
          <h2>Recommended Products</h2>
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

export default HomePage;
