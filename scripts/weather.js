const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figCaption = document.querySelector('figcaption');

const apiKey = "34d341efa6a94c1b8066b3239d6203e1";
const lat = "49.75";
const lon = "6.64";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

const getWeatherData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(`Error fetching data: ${response.text()}`, error); // Handle any errors    
    }
}

getWeatherData();
