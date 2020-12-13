import { getExistingFavs } from "./utils/favFunctions.js";

const favourites = getExistingFavs();

const productContainer = document.querySelector(".product-container");

if (favourites.length === 0) {
  productContainer.innerHTML = "No products in your cart";
}

favourites.forEach((favourite) => {
  /*   productContainer.innerHTML = ""; */

  productContainer.innerHTML += `<div class="product-card">
                                    <a id="redirect" href="details.html?id=${favourite.id}"/>
                                    <div class="image-container"><img src="http://localhost:1337/uploads/trendest_studio_XZ_3_Em_AI_Wuz0_unsplash_66b7951ba2.jpg" width="100%"><img></div>
                                    <div class="info-container">
                                    <p class="product-title">${favourite.name}</p>
                                    <p class="product-price">$${favourite.price}</p>
                                    </a>
                                    </div>
                                </div>`;
});
