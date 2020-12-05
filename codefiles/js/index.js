import { baseUrl } from "./settings/api.js";

const productsUrl = baseUrl + "products";

(async function () {
  const container = document.querySelector(".product-container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";

    json.forEach(function (products) {
      container.innerHTML += `<div class="product-card" href="product-details.html?id=${products.id}">
                                <div class="image-container">${products.image}</div>
                                <div class="info-container">
                                    <p class="product-title">${products.title}</p>
                                    <p class="product-price">$${products.price}</p>
                                    <button class="btnAdc">Add to cart</button>
                                </div>
                            </div>`;
    });
  } catch (error) {
    console.log(error);
  }
})();
