import { Suspense, lazy, ElementType } from "react";
import LoadingScreen from "../components/loadingScreen/LoadingScreen";
// components

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

//Login
export const HomePage = Loadable(lazy(() => import("../pages/HomePage")));

// export const Page404 = Loadable(lazy(() => import("../pages/Page404")));
