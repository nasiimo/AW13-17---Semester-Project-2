import { baseUrl } from "./settings/api.js";

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

    console.log(json);

    container.innerHTML = "";

    json.forEach(function (products) {
      container.innerHTML += `<p>${products.title}</p>
                              <p>${products.price}</p>`;
    });
  } catch (error) {
    console.log(error);
  }
})();
