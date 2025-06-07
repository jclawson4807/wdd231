const welcomeMessageParagraph = document.querySelector("#welcome-message");

const msToDays = 86400000;
const today = Date.now();

console.log(today);

if (localStorage.getItem("lastVisitMS") !== null) {
    lastVisitMS = parseInt(localStorage.getItem("lastVisitMS"));

    let elapsedDays = (today - lastVisitMS) / msToDays;

    console.log(elapsedDays);

    if (elapsedDays < 1) {
        welcomeMessageParagraph.textContent = "Back so soon! Awesome!";
    } else {
        elapsedDays = Math.round(elapsedDays);

        if (elapsedDays == 1) {
            welcomeMessageParagraph.textContent = "You last visited 1 day ago.";
        } else {
            welcomeMessageParagraph.textContent = `You last visited ${elapsedDays} days ago.`;
        }

    }
} else {
    welcomeMessageParagraph.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem("lastVisitMS", today);

