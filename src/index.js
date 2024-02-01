function searchCity(city) {
  let apiKey = "1eafo8c549253t7ecbdfbc850a6a8763";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric";
  console.log(apiUrl);
}

function searchBarElement(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input-search");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchBarElement);
