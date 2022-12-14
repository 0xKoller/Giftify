import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Badge from "../../utils/Badge/Badge";

import "./Products.css";

function Products() {
  const LIMIT = 9;
  const [isLoading, setIsLoading] = useState(true);
  const [loadProducts, setLoadProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();
  const [offset, setOffset] = useState(LIMIT);
  const baseURL = `https://api.mercadolibre.com/sites/MLA/search?category=${categoryID}&limit=${LIMIT}`;

  const phrases = [
    "No me sirve nada 😣",
    "No creo que le guste 🤔",
    "Mostrame otras alternativas",
  ];

  useEffect(() => {
    fetch(baseURL, {
      headers: { Authorization: "Bearer sII51rFEw09inj4VZdyDyqMF1Uf6n1Ii" },
    })
      .then((e) => e.json())
      .then((c) => {
        return setLoadProducts(c.results);
      });
  }, []);

  useEffect(() => {
    if (loadProducts.length > 0) {
      setProducts(loadProducts);
      setIsLoading(false);
    }
  }, [loadProducts]);

  const refreshItems = () => {
    setOffset((state) => state + LIMIT);
    setIsLoading(true);
    fetch(`${baseURL}&offset=${offset}`, {
      headers: { Authorization: "Bearer sII51rFEw09inj4VZdyDyqMF1Uf6n1Ii" },
    })
      .then((e) => e.json())
      .then((c) => {
        return setLoadProducts(c.results);
      })
      .finally(setIsLoading(false));
  };

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (products.length > 0) {
    console.log(products);
    return (
      <div className="products">
        <Link className="btn" to={"/categories"}>
          {"<"} Volver a categorias
        </Link>
        <div className="products-container">
          {products.map((product) => (
            <a target="_blank" href={product.permalink}>
              <div className="product-card">
                <img src={product.thumbnail} className="product-img" />
                <div className="product-info">
                  <h5 className="product-title">{product.title}</h5>
                  <p className="product-price">Precio: ${product.price}</p>
                  <div className="product-seller">
                    <p>Rep. Vendedor:</p>
                    <Badge
                      reputation={
                        product.seller.seller_reputation.power_seller_status
                      }
                    />
                  </div>
                  {/* <p className="product-location">
                    Ubicacion: {product.address.state_name}
                  </p> */}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="refresh">
          <button className="btn" onClick={() => refreshItems()}>
            {phrases[Math.floor(Math.random() * phrases.length)]}
          </button>
        </div>
      </div>
    );
  }
}

export default Products;
