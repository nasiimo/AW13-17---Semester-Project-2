export function getExistingFavs() {
  //remember to change this key to "cart" afterwards
  const favs = localStorage.getItem("favourites");

  if (favs === null) {
    return [];
  } else {
    return JSON.parse(favs);
  }
}

export function saveFavs(favs) {
  localStorage.setItem("favourites", JSON.stringify(favs));
}
