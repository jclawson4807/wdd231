const cssRef = document.querySelector("#theme");
const themeSwitchButton = document.querySelector("#themeswitch");

const darkModeSection = document.querySelector("#darkmode");
const lightModeSection = document.querySelector("#lightmode");

let currentTheme = "dark-root.css";

if (localStorage.getItem("theme") !== null) {
    let storedTheme = localStorage.getItem("theme");

    if (storedTheme != currentTheme)
    {
        currentTheme = storedTheme;
        setTheme(currentTheme);
    }
}

themeSwitchButton.addEventListener('click', () => {
    if (currentTheme == "dark-root.css") {
        currentTheme = "light-root.css"; 
    } else {
        currentTheme = "dark-root.css";      
    }

    localStorage.setItem("theme", currentTheme);

    setTheme(currentTheme);
});

function setTheme(themeName) {
    cssRef.setAttribute('href', `styles/${themeName}`);

    if (document.querySelector("#darkmode") !== null) {
        if (themeName == "dark-root.css")
        {
            lightModeSection.className = "hidden";
            darkModeSection.className = null;
        } else {
            lightModeSection.className = null;
            darkModeSection.className = "hidden";
        }
    } 
}