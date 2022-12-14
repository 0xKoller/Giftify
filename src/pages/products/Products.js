import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Badge from "../../utils/Badge/Badge";
import axios from "axios";

import "./Products.css";

function Products() {
  const LIMIT = 9;
  const [isLoading, setIsLoading] = useState(true);
  const [loadProducts, setLoadProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const { categorie_id } = useParams();
  const [offset, setOffset] = useState(LIMIT);

  let options = {
    method: "GET",
    url: "http://localhost:8000/products",
    params: { categorie_id: categorie_id, limit: LIMIT, offset: 0 },
  };

  const phrases = [
    "No me sirve nada 😣",
    "No creo que le guste 🤔",
    "Mostrame otras alternativas",
  ];

  useEffect(() => {
    axios.request(options).then((e) => {
      return setLoadProducts(e.data.results);
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
    let options = {
      method: "GET",
      url: "http://localhost:8000/products",
      params: { categorie_id: categorie_id, limit: LIMIT, offset: offset },
    };
    axios.request(options).then((e) => {
      return setLoadProducts(e.data.results);
    });
  };

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  if (products.length > 0) {
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
