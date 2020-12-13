import { getExistingFavs } from "./favFunctions.js";
import { saveFavs } from "./favFunctions.js";

export function handleClick() {
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
