import { baseUrl } from "./settings/api.js";
import { handleClick } from "./utils/handleClick.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const productUrl = baseUrl + "products/" + id;

(async function () {
  const response = await fetch(productUrl);
  const details = response.json();

  const container = document.querySelector(".detail-img");

  container.innerHTML = `<img src="http://localhost:1337/uploads/trendest_studio_XZ_3_Em_AI_Wuz0_unsplash_66b7951ba2.jpg" width="100%"><img>`;
})();

//--

(async function () {
  const container = document.querySelector(".detail-info");

  try {
    const response = await fetch(productUrl);
    const json = await response.json();

    container.innerHTML = "";

    container.innerHTML += `<h1>${json.title}</h1>
                              <h3>${json.price}</h3>
                              <p>${json.description}</p>
                              <button class="btnAtc" data-id="${json.id}" data-name="${json.title}" data-price="${json.price}">Add to cart</button>`;

    const favButtons = document.querySelectorAll(".detail-info button");
    favButtons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });
  } catch (error) {
    console.log(error);
  }
})();
