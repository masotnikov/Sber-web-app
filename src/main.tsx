import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { PageError } from "@/widgets/PageError";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ErrorBoundary fallback={<PageError/>}>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
