const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/categories", (req, res) => {
  const options = {
    method: "GET",
    url: "https://api.mercadolibre.com/sites/MLA/categories",
    headers: {
      Authorization: process.env.API_KEY,
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

app.get("/products", (req, res) => {
  const { categorie_id, limit, offset } = req.query;
  const options = {
    method: "GET",
    url: `https://api.mercadolibre.com/sites/MLA/search?category=${categorie_id}&limit=${limit}&offset=${offset}`,
    headers: {
      Authorization: process.env.API_KEY,
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => console.log(err));
});

//

https: app.listen(PORT, () =>
  console.log("Server funcionando en el puerto", PORT)
);
