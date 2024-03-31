import { Suspense, lazy, ElementType } from "react";
// components

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={"Loading..."}>
      <Component {...props} />
    </Suspense>
  );

// ----------------------------------------------------------------------

//Login
export const HomePage = Loadable(lazy(() => import("../pages/HomePage")));

// export const Page404 = Loadable(lazy(() => import("../pages/Page404")));
