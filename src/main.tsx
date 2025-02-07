import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { PageError } from "@/widgets/PageError";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement);

root.render(
  <ErrorBoundary fallback={<PageError/>}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ErrorBoundary>
);
