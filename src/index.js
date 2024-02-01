function searchBarElement(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input-search");
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchBarElement);
