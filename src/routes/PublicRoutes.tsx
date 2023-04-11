import { FC, lazy } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import { checkPathMatch, paths } from "./helpers";
import FavoritesPage from "pages/Favorites/FavoritesPage";
import PageNotFound from "pages/PageNotFound/PageNotFound";
import AccountSettings from "pages/AccountSettings/AccountSettings";

const HomePage = lazy(() => import("pages/HomePage"));
const ProductDetails = lazy(() => import("pages/ProductDetails"));

const PublicRoutes: FC = () => {
  const location = useLocation();

  const isPathMatched = checkPathMatch(location.pathname, paths);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="favorites" element={<FavoritesPage />} />
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="account-settings" element={<AccountSettings />} />
      <Route
        path="*"
        element={<PageNotFound message="This page does not exist" />}
      />
    </Routes>
  );
};

export default PublicRoutes;
