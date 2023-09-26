const inventory = [
  {
    product: "Mocasines Negros",
    price: 18,
    image: "/shoes/imagenes/shoe1.webp",
  },
  {
    product: "Flats con tacon Beige",
    price: 15,
    image: "/shoes/imagenes/shoe2.webp",
  },
  {
    product: "Tenis Blancos con suela alta",
    price: 20,
    image: "/shoes/imagenes/shoe3.webp",
  },
  {
    product: "Tacon Beige",
    price: 25,
    image: "/shoes/imagenes/shoe4.webp",
  },
  {
    product: "Sandalias",
    price: 10,
    image: "/shoes/imagenes/shoe5.webp",
  },
  {
    product: "Botas de lluvia",
    price: 24,
    image: "/shoes/imagenes/shoe6.webp",
  },
];

const productsListEl = document.querySelector(".products");

for (let i = 0; i < inventory.length; i++) {
  const element = inventory[i];

  const productItemEl = document.createElement("li");
  productItemEl.classList.add("product");

  const productImageEl = document.createElement("img");
  productImageEl.classList.add("product__image");
  productImageEl.src = element.image;

  const productNameEl = document.createElement("p");
  productNameEl.innerHTML = element.product;

  const productPriceEl = document.createElement("p");
  productPriceEl.classList.add("product__price");
  productPriceEl.innerHTML = `${element.price} euros`;

  const buttonEl = document.createElement("button");
  buttonEl.classList.add("product__button");
  buttonEl.innerHTML = "Añadir al carrito";
  buttonEl.addEventListener("click", window.open("cart.html"));

  productItemEl.appendChild(productImageEl);
  productItemEl.appendChild(productNameEl);
  productItemEl.appendChild(productPriceEl);
  productItemEl.appendChild(buttonEl);

  productsListEl.appendChild(productItemEl);
}
