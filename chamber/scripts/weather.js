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
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

function displayCurrentDayResults(data) {
    currentDateTempSpan.innerHTML = `${data.main.temp}&deg;F`;
    currentDateHighTempSpan.innerHTML = `${data.main.temp_max}`;
    currentDateLowTempSpan.innerHTML = `${data.main.temp_min}`;
    const description = data.weather[0].description; // @TASK - capitalization
    currentDateWeatherConditions.textContent = description;
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherIconImg.setAttribute("src", icon);
    weatherIconImg.setAttribute("alt", description);
    weatherIconImg.setAttribute("width", 50);
    weatherIconImg.setAttribute("height", 50);

    // figCaption.textContent = description;
}

function displayForcastResults(data)
{
    if (data.cnt > 2) {
        const dataList = data.list;
        const days = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

        let dayCounter = 0;
        let lastDay = -1;

        dataList.forEach((day) => {
            console.log(day.dt_txt);

            const a = new Date(day.dt_txt);

            const newDay = a.getDay();

            if (lastDay != newDay && (dayCounter < 3)) {
                const dayTemperature = document.querySelector(`#day${dayCounter}temp`);

                dayTemperature.innerHTML = `${day.main.temp}`;

                if (dayCounter > 0) {
                    
                    const dayOfWeek = days[newDay];
                    const dayOfWeekSpan = document.querySelector(`#day${dayCounter}-day-of-week`);
                    dayOfWeekSpan.textContent = dayOfWeek;
                }

                lastDay = newDay;

                dayCounter += 1;
            }
        });
    }
    else {
        console.log("Error - insufficient data returned by the forecast API")
    }
}

const apiFetch = async () => {
    try {
        // current date
        let response = await fetch(weatherUrl);
            if (response.ok) {
                const data = await response.json();

                console.log(data); // testing only
                displayCurrentDayResults(data); // uncomment when ready
            } else {
                throw Error(await response.text());
            }
        response = await fetch(forecastUrl);
            if (response.ok) {
                const data = await response.json();

                console.log(data); // testing only
                displayForcastResults(data); // uncomment when ready
            } else {
                throw Error(await response.text());
            }
    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors    
    }
}

apiFetch();
