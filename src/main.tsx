import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}
const root = createRoot(rootElement);

root.render(
  <ErrorBoundary fallback={<h1 style={
    { display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }
  }>ERROR!!!</h1>}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ErrorBoundary>
);
