import { Suspense } from "react";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <PublicRoutes />
      <PrivateRoutes />
    </Suspense>
  );
}

export default App;
