import "./App.css";
import { Route, Routes } from "react-router";
import Landing from "./pages/landing/Landing";
import Categories from "./pages/categories/Categories";
import Products from "./pages/products/Products";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/:categorie_id/products" element={<Products />} />
          <Route path="*" />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
