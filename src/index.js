function updateWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let cityConditions = document.querySelector("#description");
  let condition = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  let humidity = response.data.temperature.humidity;
  let speedElement = document.querySelector("#speed");
  let speed = response.data.wind.speed;
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-icon"/>`;
  timeElement.innerHTML = formatDate(date);
  speedElement.innerHTML = speed + "km/h";
  humidityElement.innerHTML = humidity + "%";
  cityConditions.innerHTML = condition;
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) minutes = `0${minutes}`;
  return `${day} ${hours}:${minutes},`;
}
function searchCity(city) {
  let apiKey = "1eafo8c549253t7ecbdfbc850a6a8763";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(updateWeather);
}

function searchBarElement(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input-search");
  searchCity(searchInput.value);
}
function getForecast(city) {
  let apiKey = "1eafo8c549253t7ecbdfbc850a6a8763";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
}

function displayForecast() {
  let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];
  let forecastHTML = "";
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
          <div class="weather-forecast-day">
            <div class="weather-forecast-date">${day}</div>
            <div class="weather-forecast-icon">🌤️</div>
            <div class="weather-forecast-temperatures">
              <div class="weather-forecast-temperature-max">
                <strong>23º</strong>
              </div>
              <div class="weather-forecast-temperature-min">13º</div>
            </div>
            </div>
`;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHTML;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchBarElement);
searchCity("Cape Town");
getForecast("Cape Town");
displayForecast();
