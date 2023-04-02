import { FC, lazy } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import { checkPathMatch, paths } from "./helpers";

const HomePage = lazy(() => import("pages/HomePage"));
const ProductDetails = lazy(() => import("pages/ProductDetails"));

const PublicRoutes: FC = () => {
  const location = useLocation();

  const isPathMatched = checkPathMatch(location.pathname, paths);

  return (
    <Routes>
      <Route path={paths.home} element={<HomePage />} />
      <Route path={paths.productDetails} element={<ProductDetails />} />
      <Route
        path="*"
        element={!isPathMatched ? <Navigate to={paths.home} /> : null}
      />
    </Routes>
  );
};

export default PublicRoutes;
