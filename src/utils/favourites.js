const STORAGE_KEY = "favouriteDiplomas";

export function getFavourites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function isFavourite(id) {
  return getFavourites().includes(id);
}

export function toggleFavourite(id) {
  const favourites = getFavourites();
  let updated;
  if (favourites.includes(id)) {
    updated = favourites.filter(fav => fav !== id);
  } else {
    updated = [...favourites, id];
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
}