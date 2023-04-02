import { PageWrapper } from "App.Styled";
import { FC, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ProductGroup, ProductGroupContainer } from "./styled";
import { testProducts } from "pages/testProductsSeed";
import ProductCard from "components/products/ProductCard/ProductCard";
import { currencyByCountry } from "utils/currencies";
import axios from "axios";

const HomePage: FC = () => {
  const [rubToUsdExchangeRate, setRubToUsdExchangeRate] = useState<number>(1);
  useEffect(() => {
    axios
      .get(
        `https://api.apilayer.com/exchangerates_data/${
          new Date().toISOString().split("T")[0]
        }?symbols=RUB&base=USD`,
        {
          method: "GET",
          headers: {
            apikey: process.env.REACT_APP_EXCHANGE_RATES_API_KEY,
          },
        }
      )
      .then(({ data }) => {
        console.log(data);
        setRubToUsdExchangeRate(data.rates.RUB);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(rubToUsdExchangeRate);

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
                exchangeRate={rubToUsdExchangeRate}
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
