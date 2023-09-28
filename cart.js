const cartListEl = document.querySelector(".cart__products");

function calculatePrice() {
  const price = document.querySelector(".total__price");

  let totalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];

    totalPrice = totalPrice + element.quantity * element.price;
  }

  price.innerHTML = `${totalPrice} Euros`;
}

function printCart() {
  cartListEl.innerHTML = "";
  if (cart.length === 0) {
    cartListEl.innerHTML = "El carrito esta vacio";
  } else {
    for (let i = 0; i < cart.length; i++) {
      const currentProduct = cart[i];

      const cartProductEl = document.createElement("li");
      cartProductEl.classList.add("products__item");

      cartListEl.appendChild(cartProductEl);

      const productImageEl = document.createElement("img");
      productImageEl.classList.add("item__img");
      productImageEl.src = currentProduct.image;

      cartProductEl.appendChild(productImageEl);

      const productInfoEl = document.createElement("div");
      productInfoEl.classList.add("item__info");

      cartProductEl.appendChild(productInfoEl);

      const productNameEl = document.createElement("p");
      productNameEl.innerHTML = currentProduct.product;

      productInfoEl.appendChild(productNameEl);

      const productPriceEl = document.createElement("p");
      productPriceEl.innerHTML = `${currentProduct.price} Euros`;

      productInfoEl.appendChild(productPriceEl);

      const productQuantityEl = document.createElement("p");
      productQuantityEl.innerHTML = `Quantity: ${currentProduct.quantity}`;

      productInfoEl.appendChild(productQuantityEl);

      const flexEl = document.createElement("div");
      flexEl.classList.add("flex-grow");

      productInfoEl.appendChild(flexEl);

      const productButtonEl = document.createElement("div");
      productButtonEl.classList.add("info__button");

      productInfoEl.appendChild(productButtonEl);

      const buttonLessEl = document.createElement("button");
      buttonLessEl.classList.add("item__button");
      buttonLessEl.innerHTML = "-1";
      buttonLessEl.addEventListener("click", () => {
        currentProduct.quantity = currentProduct.quantity - 1;
        productQuantityEl.innerHTML = `Quantity: ${currentProduct.quantity}`;

        if (currentProduct.quantity === 0) {
          cart = cart.filter(
            (element) => element.product !== currentProduct.product
          );

          printCart();
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        calculatePrice();
      });

      productButtonEl.appendChild(buttonLessEl);

      const buttonPlusEl = document.createElement("button");
      buttonPlusEl.classList.add("item__button");
      buttonPlusEl.innerHTML = "+1";
      buttonPlusEl.addEventListener("click", () => {
        currentProduct.quantity = currentProduct.quantity + 1;
        productQuantityEl.innerHTML = `Quantity: ${currentProduct.quantity}`;

        localStorage.setItem("cart", JSON.stringify(cart));
        calculatePrice();
      });

      productButtonEl.appendChild(buttonPlusEl);

      const deleteButtonEl = document.createElement("button");
      deleteButtonEl.classList.add("item__button");
      deleteButtonEl.innerHTML = "Eliminar";
      deleteButtonEl.addEventListener("click", () => {
        cart = cart.filter(
          (element) => element.product !== currentProduct.product
        );

        localStorage.setItem("cart", JSON.stringify(cart));
        printCart();
        calculatePrice();
      });

      productButtonEl.appendChild(deleteButtonEl);
    }
  }
}

printCart();
calculatePrice();
