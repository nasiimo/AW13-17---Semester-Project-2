import { baseUrl } from "../settings/api.js";
import { handleClick } from "../utils/handleClick.js";

const productsUrl = baseUrl + "products";

export function renderProducts() {
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
                                    <button class="btnAtc" data-id="${products.id}" data-name="${products.title}" data-price="${products.price}">Add to cart</button>
                                    </div>
                                </div>`;
      });
      const favButtons = document.querySelectorAll(".info-container button");
      favButtons.forEach((button) => {
        button.addEventListener("click", handleClick);
      });
    } catch (error) {
      console.log(error);
    }
  })();
}
