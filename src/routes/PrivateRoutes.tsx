import React from "react";
import { FC, lazy } from "react";
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import { checkPathMatch, paths } from "./helpers";

const AccountSettings = lazy(() => import("pages/AccountSettings"));

const PrivateRoutes: FC = () => {
  const location = useLocation();

  const isPathMatched = checkPathMatch(location.pathname, paths);
  return (
    <Routes>
      <Route path="/account-settings" element={<AccountSettings />} />
      <Route
        path="*"
        element={!isPathMatched ? <Navigate to={paths.home} /> : null}
      />
    </Routes>
  );
};

export default PrivateRoutes;
