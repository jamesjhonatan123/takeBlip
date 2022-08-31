import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Header } from "./components/Header";
import CardsProvider from "./context/cards";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CardsProvider>
      <Header />
      <App />
    </CardsProvider>
  </React.StrictMode>
);
