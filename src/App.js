import "./App.css";
import { Route, Routes } from "react-router";
import Landing from "./pages/landing/Landing";
import Categories from "./pages/categories/Categories";
import Products from "./pages/products/Products";
import Footer from "./Footer/Footer";
import ReactGA from "react-ga";

const tracking_id = process.env.TRACKING_ID;
ReactGA.initialize(tracking_id);

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/:categorie_id/products" element={<Products />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
