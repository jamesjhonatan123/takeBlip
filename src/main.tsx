import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Header } from "./components/Header";
import CardsProvider from "./context/cards";
import Details from "./routes/Details";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CardsProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <App />
              </>
            }
          />
          <Route
            path="/details"
            element={
              <>
                <Header />
                <Details />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </CardsProvider>
  </React.StrictMode>
);
