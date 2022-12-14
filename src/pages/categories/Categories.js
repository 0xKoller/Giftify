import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

function Categories() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadCategories, setLoadCategories] = useState([]);
  const [categories, setCategories] = useState([]);

  const baseURL = "https://api.mercadolibre.com/sites/MLA/categories";

  useEffect(() => {
    fetch(baseURL, {
      headers: { Authorization: "Bearer sII51rFEw09inj4VZdyDyqMF1Uf6n1Ii" },
    })
      .then((e) => e.json())
      .then((c) => {
        return setLoadCategories(c);
      });
  }, []);

  useEffect(() => {
    if (loadCategories.length > 0) {
      setCategories(loadCategories);
      setIsLoading(false);
    }
  }, [loadCategories]);

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (categories.length > 0) {
    return (
      <div className="categories">
        <h2>Seleccione una categoria</h2>
        <div className="categories-card-container">
          {categories.map((categorie) => (
            <Link to={`/${categorie.id}/products`}>
              <div className="categorie-card">
                <p>{categorie.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    return <h1>No hay categorias</h1>;
  }
}

export default Categories;
