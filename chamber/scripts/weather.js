const currentDateTempSpan = document.querySelector("#current-date-temp");
const currentDateHighTempSpan = document.querySelector("#current-date-high-temp");
const currentDateLowTempSpan = document.querySelector("#current-date-low-temp");
const currentDateTemperature = document.querySelector("#current-date-temperature");
const currentDateWeatherConditions = document.querySelector("#current-weather-conditions");
const weatherIconImg = document.querySelector("#weather-icon");

const apiKey = "34d341efa6a94c1b8066b3239d6203e1";
const lat = "43.187640";
const lon = "-89.236768";

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

function displayResults(data) {
    currentDateTempSpan.innerHTML = `${data.main.temp}&deg;F`;
    currentDateHighTempSpan.innerHTML = `${data.main.temp_max}`;
    currentDateLowTempSpan.innerHTML = `${data.main.temp_min}`;
    currentDateTemperature.innerHTML = `${data.main.feels_like}&deg;F`;
    const description = data.weather[0].description; // @TASK - capitalization
    currentDateWeatherConditions.textContent = description;
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherIconImg.setAttribute("src", icon);
    weatherIconImg.setAttribute("alt", description);
    weatherIconImg.setAttribute("width", 50);
    weatherIconImg.setAttribute("height", 50);

    // figCaption.textContent = description;
}

const apiFetch = async () => {
    try {
        const response = await fetch(weatherUrl);
            if (response.ok) {
                const data = await response.json();

                console.log(data); // testing only
                displayResults(data); // uncomment when ready
            } else {
                throw Error(await response.text());
            }
    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors    
    }
}

apiFetch();
