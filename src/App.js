import "./App.css";
import { Route, Routes } from "react-router";
import Landing from "./pages/landing/Landing";
import Footer from "./Footer/Footer";
import ReactGA from "react-ga";
import { lazy, Suspense } from "react";

const Categories = lazy(() => import("./pages/categories/Categories"));
const Products = lazy(() => import("./pages/products/Products"));

const tracking_id = "G-Q75541X2M0";
ReactGA.initialize(tracking_id);

function App() {
  return (
    <>
      <main>
        <Suspense>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/:categorie_id/products" element={<Products />} />
          </Routes>
        </Suspense>
        <Footer />
      </main>
    </>
  );
}

export default App;
