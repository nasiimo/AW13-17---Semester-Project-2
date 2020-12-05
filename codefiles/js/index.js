import { baseUrl } from "./settings/api.js";

const productsUrl = baseUrl + "products";

const bannerUrl = baseUrl + "home";

console.log(bannerUrl);

(async function () {
  const bannerContainer = document.querySelector(".home-header");

  try {
    const bannerResponse = await fetch(bannerUrl);
    const bannerJson = await bannerResponse.json();

    console.log(bannerJson);

    bannerContainer.innerHTML = "";

    bannerJson.forEach(function (home) {
      bannerContainer.innerHTML += `${home}`;
    });
  } catch (error) {
    console.log(error);
  }
})();

(async function () {
  const container = document.querySelector(".product-container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";

    json.forEach(function (products) {
      container.innerHTML += `<div class="product-card">
                                <a id="redirect" href="product-details.html?id=${products.id}">
                                <div class="image-container">${products.image}</div>
                                <div class="info-container">
                                    <p class="product-title">${products.title}</p>
                                    <p class="product-price">$${products.price}</p>
                                </a>
                                    <button class="btnAtc">Add to cart</button>
                                </div>
                            </div>`;
    });
  } catch (error) {
    console.log(error);
  }
})();
