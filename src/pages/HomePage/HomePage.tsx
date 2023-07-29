import { PageWrapper } from "App.Styled";
import { FC, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { ProductGroup, ProductGroupContainer } from "./styled";
import ProductCard from "components/products/ProductCard/ProductCard";
import useCurrencyRate from "hooks/data-driven/useCurrencyRate";
import { get } from "utils/requests";
import { IProductDetails, IResponse } from "pages/types";
// import { useAppDispatch, useAppSelector } from "store/types";
// import { isAppLoading } from "store/app/selectors";
// import { isAppLoadingAction } from "store/app/appReducer";
// import LoadingOverlay from "components/state-driven/LoadingIndicator";

const HomePage: FC = () => {
  const { currencyRate } = useCurrencyRate();
  const [products, setProducts] = useState<IProductDetails[]>([]);
  // const dispatch = useAppDispatch();
  // const appLoading = useAppSelector(isAppLoading);

  useEffect(() => {
    get("products").then((res: IResponse) => {
      setProducts(res.data as any[]);
    });
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
