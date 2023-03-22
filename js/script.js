const weather = document.querySelector("#weather-icon-output");
const forecastDayOutput = document.querySelector("#forecastDay-output");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dd78141fb1msh24c0e249c5b3c9ep124fc9jsncffe731f8305",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

fetch(
  "https://weatherapi-com.p.rapidapi.com/forecast.json?q=Sandefjord&days=3",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    weather.innerHTML = `<img src="https:${response.current.condition.icon}"/>`;
    console.log(response.forecast.forecastday);
    for (let i = 0; i < response.forecast.forecastday.length; i++) {
      console.log(response.forecast.forecastday[i]);
      forecastDayOutput.innerHTML = `<span class="weather-title">By: <p class="weather-p">${response.location.name}</p></span>
      <span class="weather-title">Dato: <p class="weather-p">${response.forecast.forecastday[i].date}</p></span>
      <span class="weather-title">Høyeste temperatur: <p class="weather-p">${response.forecast.forecastday[i].day.maxtemp_c}</p></span>
      <span class="weather-title">Laveste temperatur: <p class="weather-p">${response.forecast.forecastday[i].day.mintemp_c}</p></span>`;
    }
  })
  .catch((err) => console.error(err));
