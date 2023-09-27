function printProducts() {
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
    buttonEl.addEventListener("click", () => {
      const productFound = cart.find(
        (cartElement) => cartElement.product === element.product
      );

      if (productFound === undefined) {
        cart.push({
          product: element.product,
          price: element.price,
          quantity: 1,
          image: element.image,
        });
      } else {
        productFound.quantity = productFound.quantity + 1;
      }
    });

    productItemEl.appendChild(productImageEl);
    productItemEl.appendChild(productNameEl);
    productItemEl.appendChild(productPriceEl);
    productItemEl.appendChild(buttonEl);

    productsListEl.appendChild(productItemEl);
  }
}

printProducts();

function printCart() {
  const cartListEl = document.querySelector(".cart__products");

  const cartProductEl = document.createElement("li");
  cartProductEl.innerHTML = "articulo1";

  cartListEl.appendChild(cartProductEl);
}
