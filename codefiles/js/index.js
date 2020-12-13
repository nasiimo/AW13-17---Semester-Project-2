import { baseUrl } from "./settings/api.js";
import { renderProducts } from "./components/renderProducts.js";

const bannerUrl = baseUrl + "home";
/* const productsUrl = baseUrl + "products"; */

(async function () {
  const bannerContainer = document.querySelector(".home-header");

  try {
    /*   const response = await fetch(bannerUrl);
    const json = await response.json();
 */
    bannerContainer.innerHTML = "";
    bannerContainer.innerHTML += `<img src="http://localhost:1337/uploads/photo_1544085311_11a028465b03_29d7651dcc.jpeg"></img>`;
  } catch (error) {
    console.log(error);
  }
})();

renderProducts();
