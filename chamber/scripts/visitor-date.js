const msToDays = 86400000;
const today = Date.now();

console.log(today);

if (localStorage.getItem("lastVisitMS") !== null) {
    lastVisitMS = parseInt(localStorage.getItem("lastVisitMS"));

    let elapsedDays = (today - lastVisitMS) / msToDays;

    console.log(elapsedDays);

    if (elapsedDays < 1) {
        console.log("Back so soon! Awesome!")
    } else {
        elapsedDays = Math.round(elapsedDays);

        if (elapsedDays == 1) {
            console.log("You last visited 1 day ago.")
        } else {
            console.log(`You last visited ${elapsedDays} days ago.`);
        }

    }
} else {
    console.log("Welcome! Let us know if you have any questions.");
}

localStorage.setItem("lastVisitMS", today);

