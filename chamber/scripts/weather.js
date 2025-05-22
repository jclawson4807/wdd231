const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figCaption = document.querySelector('figcaption');

const currentTempSpan = document.querySelector("#current-temp");
const weatherIconImg = document.querySelector("#weather-icon");

const apiKey = "34d341efa6a94c1b8066b3239d6203e1";
const lat = "49.75";
const lon = "6.64";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

function displayResults(data) {
    currentTempSpan.innerHTML = `${data.main.temp}&deg;F`;
    const description = data.weather[0].description;
    const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    weatherIconImg.setAttribute("src", icon);
    weatherIconImg.setAttribute("alt", description);
    weatherIconImg.setAttribute("width", 50);
    weatherIconImg.setAttribute("height", 50);

    figCaption.textContent = description;
}

const apiFetch = async () => {
    try {
        const response = await fetch(url);
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
