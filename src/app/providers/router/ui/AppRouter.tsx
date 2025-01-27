import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { RouteConfig } from "@/app/providers/router/config/routeConfig";

interface AppRouterProps {
  className?: string;
}

export const AppRouter: FC<AppRouterProps> = () => {

  return (
    <Suspense fallback={<h1>...Loading</h1>}>
      <Routes>
        {RouteConfig.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={(
              <main className="page-wrapper">
                {element}
              </main>
            )}
          >
          </Route>
        ))}
      </Routes>
    </Suspense>

  );
};

