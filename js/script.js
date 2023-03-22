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
  "https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3",
  options
)
  .then((response) => response.json())
  .then((response) => {
    weather.innerHTML = `<img src="https:${response.current.condition.icon}"/>`;
    console.log(response.forecast.forecastday);
    for (let i = 0; i < response.forecast.forecastday.length; i++) {
      console.log(response.forecast.forecastday[i]);
      forecastDayOutput.innerHTML = `<p>Dato: ${response.forecast.forecastday[i].date}</p>
      <p>Høyeste temperatur: ${response.forecast.forecastday[i].day.maxtemp_c}</p>`;
    }
  })
  .catch((err) => console.error(err));
