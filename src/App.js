import "./App.css";
import { Route, Routes } from "react-router";
import Landing from "./pages/landing/Landing";
import Categories from "./pages/categories/Categories";
import Products from "./pages/products/Products";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/:categoryID/products" element={<Products />} />
          <Route path="*" />
        </Routes>
      </main>
    </>
  );
}

export default App;
