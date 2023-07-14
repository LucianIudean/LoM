const localUrl = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/T%C3%A2rgu-Mure%C8%99%2C%20RO?unitGroup=metric&key=S8F8QH3AAXP8RNJQJY4XL3MZX&contentType=json";
const marsUrl = "https://api.nasa.gov/insight_weather/?api_key=VgPCH3Iql0LVc5zTESZaGdE4dso9CzdDbKuDgeDp&feedtype=json&ver=1.0";

const temperatureDiv = document.querySelector('.temperature');
const local = document.getElementById("weather");
const overlayDiv = document.querySelector('.local-conditions');
const overlayPar = document.querySelector('#overlay')

let address = "";
let localConditions = [];
let dayStandard = "";
let day = "";
let city = "";
let localTemp = "";
let icon = "";
let weatherCondition = "";

let descriptionAlert = "";
let humidity = "";
let windSpeed = "";

temperatureDiv.addEventListener('click', () => {
    secondaryConditions(day, city, localTemp, icon, descriptionAlert, humidity, windSpeed);
    temperatureDiv.style.display = "none";
});

overlayDiv.addEventListener('click', () => {
    overlayDiv.style.display = "none";
    temperatureDiv.style.display = "block";
});

function principalConditions(day, localCity, localForecast) {
    local.innerHTML = `${day}<br />${localCity}<br />${localForecast}&#8451; ${icon}`;
}

function secondaryConditions(localDate, localZone, localForecast, emojiWeather, localAlert, localHumidity, localWind) {
    overlayPar.innerHTML = `
    ${localDate}<br>
    City: ${localZone}<br>
    Temp.: ${localForecast}&#8451; ${emojiWeather}<br>
    Weather: ${localAlert}<br>
    Humidity: ${localHumidity}%<br>
    Wind speed: ${localWind} km/h
    `
    overlayDiv.style.display = "block";
    overlayDiv.style.zIndex = "2";
    overlayPar.style.fontSize = "12px";
}

function fetchLocalTemperature() {
    return new Promise((resolve) => {
      fetch(localUrl)
        .then((response) => response.json()) // capture informations like another promisse
        .then((json) => {
            console.log(json);

            dayStandard = json.days[0].datetime;
            const parts = dayStandard.split("-");
            day = parts[2] + "-" + parts[1] + "-" + parts[0];
            console.log(day);
            address = json.address;
            city = address.split(",")[0].trim();

            localConditions = json.currentConditions;
            localTemp = Math.round(localConditions.temp);

            weatherCondition = localConditions.conditions
            if (weatherCondition === "sunny") {
                icon = "☀️";
            } else if (weatherCondition === "cloudy" || weatherCondition === "Partially cloudy")  {
                icon = "☁️";
            } else if (weatherCondition === "rainy") {
                icon = "🌧️";
            } else {
                icon = "🌦️";
            }

            principalConditions(day, city, localTemp);

            descriptionAlert = json.description;
            humidity = Math.round(localConditions.humidity);
            windSpeed = Math.round(localConditions.windspeed / 10);

            const localTempMessage = `Local Temp: ${localTemp}&#8451;`;
            resolve(localTempMessage);
            
        })
        .catch((error) => {
            console.error(error);
        });
    });
}

async function asyncCallLocalTemp() {
 localResult = await fetchLocalTemperature();
  console.log(localResult); // output: "Local Temp: 26&#8451;"
  return localResult
}
asyncCallLocalTemp();

async function fetchMarsTemperature() {
    try {
      const response = await fetch(marsUrl);
      const json = await response.json();
  
      const marsTemp = json.sol_keys.length > 0 ? json[json.sol_keys[0]].AT.av : 'N/A';
      const marsTempMessage = marsTemp == 'N/A' ? `Mars Temp.<br>${marsTemp}` : `Mars Temp.<br>${marsTemp}&#8451;`;
      return marsTempMessage;
    } catch (error) {
      throw new Error('Error occurred during Mars temperature fetch.');
    }
  }

  
Promise.all([asyncCallLocalTemp(), fetchMarsTemperature()])
  .then(([localResult, marsTempMessage]) => {
    const message = `${localResult}<br>${marsTempMessage}`;
    console.log(localResult);
    console.log(marsTempMessage);
    console.log(message);
    console.log(local.innerHTML);
    local.innerHTML += `<br><br>${marsTempMessage}`;
  })
  .catch((error) => {
    console.error(error);
    alert(error);
  });


