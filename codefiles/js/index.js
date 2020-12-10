import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";

const productsUrl = baseUrl + "products";

const bannerUrl = baseUrl + "home";

console.log(bannerUrl);

(async function () {
  const bannerContainer = document.querySelector(".home-header");

  try {
    const response = await fetch(bannerUrl);
    const json = await response.json();

    console.log(json);

    bannerContainer.innerHTML = "";

    bannerContainer.innerHTML += `<img src="http://localhost:1337/uploads/photo_1544085311_11a028465b03_29d7651dcc.jpeg" width="100%"></img>`;
  } catch (error) {
    console.log(error);
  }
})();

/* ------- */

(async function () {
  const container = document.querySelector(".product-container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";

    json.forEach(function (products) {
      container.innerHTML += `<div class="product-card">
                                <a id="redirect" href="details.html?id=${products.id}"/>
                                <div class="image-container"><img src="http://localhost:1337/uploads/trendest_studio_XZ_3_Em_AI_Wuz0_unsplash_66b7951ba2.jpg" width="100%"><img></div>
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
