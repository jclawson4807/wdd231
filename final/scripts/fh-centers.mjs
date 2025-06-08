const url = "data/fh-centers.json";
const cards = document.querySelector('main');

const displayLocationCards = (fhCenterData) => {
    fhCenterData.forEach((fhCenterItem) => {
        const card = document.createElement("section");
        card.className = "fh-center-card";
        card.setAttribute("tabindex", "0");

        const title = document.createElement("h2");
        title.className = "fh-center-card-name";
        title.textContent = fhCenterItem.name;
        title.setAttribute("tabindex", "0");

        const fhCenterFigure = document.createElement("figure");

        const fhCentermage = document.createElement("img");
        fhCentermage.className = "animation";
        fhCentermage.setAttribute("src", `images/${fhCenterItem.small_photo}`);
        fhCentermage.setAttribute("alt", `${fhCenterItem.name} Image`);
        fhCentermage.setAttribute("width", "300");
        fhCentermage.setAttribute("height", "200");
        fhCentermage.setAttribute("loading", "lazy");
        fhCentermage.setAttribute("tabindex", "0");

        fhCenterFigure.appendChild(fhCentermage);

        const description = document.createElement("p");
        description.textContent = fhCenterItem.description;
        description.setAttribute("tabindex", "0");

        const hours = document.createElement("p");
        hours.textContent = fhCenterItem.hours;
        hours.setAttribute("tabindex", "0");

        const address = document.createElement("address");
        address.setAttribute("tabindex", "0")
        address.textContent = fhCenterItem.address;

        const learnMoreButton = document.createElement("button")

        learnMoreButton.addEventListener('click', () => {
            window.open(fhCenterItem.website, "_blank");
        });
        learnMoreButton.setAttribute("tabindex", "0");
        learnMoreButton.textContent = "Learn More"

        card.appendChild(title);
        card.appendChild(fhCenterFigure);
        card.appendChild(description);
        card.appendChild(hours);
        card.appendChild(address);
        card.appendChild(learnMoreButton);

        cards.appendChild(card);
    });
}

const getFHCEnterData = async () => {
    cards.innerHTML = "";

    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.table(data.members);
        // console.log(displayBusinessStyle.value)

        displayLocationCards(data.fhCenters);

    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors    
    }
}

getFHCEnterData();
