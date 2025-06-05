const cssRef = document.querySelector("#theme");
const themeSwitchButton = document.querySelector("#themeswitch");

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
}