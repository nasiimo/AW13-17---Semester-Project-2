import { baseUrl } from "./settings/api.js";
import { renderProducts } from "./components/renderProducts.js";
import { getExistingFavs } from "./utils/favFunctions.js";

const bannerUrl = baseUrl + "home";
const productsUrl = baseUrl + "products";

console.log(bannerUrl);

(async function () {
  const bannerContainer = document.querySelector(".home-header");

  try {
    const response = await fetch(bannerUrl);
    const json = await response.json();

    bannerContainer.innerHTML = "";

    bannerContainer.innerHTML += `<img src="http://localhost:1337/uploads/photo_1544085311_11a028465b03_29d7651dcc.jpeg"></img>`;
  } catch (error) {
    console.log(error);
  }
})();

renderProducts();

function handleClick() {
  const id = this.dataset.id;
  const name = this.dataset.name;
  const price = this.dataset.price;

  const currentFavs = getExistingFavs();

  const productExists = currentFavs.find(function (fav) {
    return fav.id === id;
  });

  if (productExists === undefined) {
    const product = { id: id, name: name, price: price };
    currentFavs.push(product);
    saveFavs(currentFavs);
  } else {
    const newFavs = currentFavs.filter((fav) => fav.id !== id);
    saveFavs(newFavs);
  }
}
