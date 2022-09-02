import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import CardsProvider from "./context/cards";
import { Details, Home } from "./pages";
import "./global.scss";

const App = () => {
  return (
    <CardsProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
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
  );
};

export default App;
