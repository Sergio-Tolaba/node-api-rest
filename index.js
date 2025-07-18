import express from "express";

const app = express();

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 3, name: "Product 2", price: 200 },
];

app.get("/", (req, res) => {
  res.send("<h1>Hola API REST</h1>");
});

app.get("/products", (req, res) => {
  //res.send(products); // Mejor usar .json()
  res.json(products);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
