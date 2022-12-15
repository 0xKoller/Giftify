import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ReactGA from "react-ga";
import axios from "axios";
import "./Categories.css";

function Categories() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadCategories, setLoadCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [random, setRandom] = useState("");

  const options = {
    method: "GET",
    url: "https://api.mercadolibre.com/sites/MLA/categories",
    headers: {
      Authorization: process.env.API_KEY,
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        return setLoadCategories(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setRandom(
      loadCategories[Math.floor(Math.random() * loadCategories.length + 1)]
    );
    if (loadCategories.length > 0) {
      setCategories(loadCategories);
      setIsLoading(false);
    }
  }, [loadCategories]);

  const recordGACategorie = (category) => {
    ReactGA.event({
      action: "cat_selection",
      label: "cat_selection",
      category: "cat_category",
      value: category,
    });
  };

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (categories.length > 0) {
    return (
      <div className="categories">
        <h2>Seleccione una categoria</h2>
        <div className="categories-card-container">
          {categories.map((categorie) => (
            <Link
              to={`/${categorie.id}/products`}
              onClick={() => recordGACategorie(categorie.name)}
            >
              <div className="categorie-card">
                <p>{categorie.name}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link to={`/${random.id}/products`} className="btn">
          ¿No te podes decidir?
        </Link>
      </div>
    );
  } else {
    return <h1>No hay categorias</h1>;
  }
}

export default Categories;
