const inventory = [
  {
    product: "Mocasines Negros",
    price: 18,
    image: "./imagenes/shoe1.webp",
  },
  {
    product: "Flats con tacon Beige",
    price: 15,
    image: "./imagenes/shoe2.webp",
  },
  {
    product: "Tenis Blancos con suela alta",
    price: 20,
    image: "./imagenes/shoe3.webp",
  },
  {
    product: "Tacon Beige",
    price: 25,
    image: "./imagenes/shoe4.webp",
  },
  {
    product: "Sandalias",
    price: 10,
    image: "./imagenes/shoe5.webp",
  },
  {
    product: "Botas de lluvia",
    price: 24,
    image: "./imagenes/shoe6.webp",
  },
];

let cart = [];

const persistedCart = JSON.parse(localStorage.getItem("cart"));

if (persistedCart) {
  cart = persistedCart;
}
