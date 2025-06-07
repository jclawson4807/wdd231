const url = "data/discover.json";
const cards = document.querySelector('#discover-content');

const displayLocationCards = (discoverData) => {
    discoverData.forEach((discoverItem) => {
        const card = document.createElement("section");
        card.className = "discover-card";
        card.setAttribute("tabindex", "0");

        const title = document.createElement("h2");
        title.className = "discover-card-name";
        title.textContent = discoverItem.name;
        title.setAttribute("tabindex", "0");

        const discoverFigure = document.createElement("figure");

        const discoverImage = document.createElement("img");
        discoverImage.setAttribute("src", discoverItem.imageUrl);
        discoverImage.setAttribute("alt", `${discoverItem.name} Image`);
        discoverImage.setAttribute("width", "300");
        discoverImage.setAttribute("height", "200");
        discoverImage.setAttribute("loading", "lazy");
        discoverImage.setAttribute("tabindex", "0");

        discoverFigure.appendChild(discoverImage);

        const description = document.createElement("p");
        description.textContent = discoverItem.description;
        description.setAttribute("tabindex", "0");

        const address = document.createElement("address");
        address.setAttribute("tabindex", "0")
        address.textContent = discoverItem.address;

        const learnMoreButton = document.createElement("button")
        
        learnMoreButton.addEventListener('click', () => {
            window.open(discoverItem.learnMoreURL, "_blank");
        });
        learnMoreButton.setAttribute("tabindex", "0");
        learnMoreButton.textContent = "Learn More"

        card.appendChild(title);
        card.appendChild(discoverFigure);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(learnMoreButton);

        cards.appendChild(card);
    });
}

const getDiscoverData = async () => {
    cards.innerHTML = "";
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.table(data.members);
        // console.log(displayBusinessStyle.value)

        displayLocationCards(data.discover);

    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors    
    }
}

getDiscoverData();
