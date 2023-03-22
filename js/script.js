const weather = document.querySelector("#weather-icon-output");
const forecastDayOutput = document.querySelector("#forecastDay-output");
const forecastDayMap = document.querySelector("#forecastDay-map");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "dd78141fb1msh24c0e249c5b3c9ep124fc9jsncffe731f8305",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

fetch(
  "https://weatherapi-com.p.rapidapi.com/forecast.json?q=3221%20Sandefjord&days=3",
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
    forecastDayMap.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d16377.102632553862!2d${response.location.lon}!3d${response.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sno!2sno!4v1679487802368!5m2!1sno!2sno" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  })
  .catch((err) => console.error(err));

  