import { Suspense } from "react";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import Header from "features/Header/Header";
import { AppStyles, Footer } from "App.Styled";

function App() {
  return (
    <>
      <AppStyles />
      <Header />
      <Suspense fallback={<h2>Loading...</h2>}>
        <PublicRoutes />
        <PrivateRoutes />
      </Suspense>
      <Footer>
        <div>&copy; MarketZone {new Date().getFullYear()}</div>
      </Footer>
    </>
  );
}

export default App;
