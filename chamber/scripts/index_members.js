const url = "data/members.json";
const cards = document.querySelector('#index_business_content_container');
const numberPattern = /\d+/g;
const displayLimit = 3;

function populateArrayOfRandomInts(maxValue) {
    const selectedItemsArray = Array();

    while (selectedItemsArray.length < 3)
    {
        const randomValue = Math.floor(Math.random() * maxValue);

        if (!selectedItemsArray.includes(randomValue)) {
            selectedItemsArray.push(randomValue);
        }       
    }

    return selectedItemsArray;
}

const displayLogoCards = (members) => {

    const arrayLength = members.length;
    const selectedItemsArray = populateArrayOfRandomInts(arrayLength);

    console.log(selectedItemsArray);

    cards.classList.add("index_card_container");

    selectedItemsArray.forEach((indexValue) => {

        const member = members[indexValue];

        const card = document.createElement("section");
        card.className = "logo_card";

        const companyLogo = document.createElement("img");
        companyLogo.setAttribute("src", `images/${member.icon_image}`);
        companyLogo.setAttribute("alt", `${member.name} Main Image`);
        companyLogo.setAttribute("width", "180");
        companyLogo.setAttribute("height", "180");
        companyLogo.setAttribute("loading", "lazy");
        companyLogo.setAttribute("tabindex", "0");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");

        p1.setAttribute("tabindex", "0");

        p1.textContent = `${member.address.street1} ${member.address.city} ${member.address.state} ${member.address.zip}`;

        const a2 = document.createElement("a");
        const a3 = document.createElement("a");
        const a4 = document.createElement("a");

        a2.setAttribute("href", `mailto:${member.company_image_url}`);
        a2.setAttribute("tabindex", "0");

        a3.setAttribute("href", `tel:+${member.phone_number.match( numberPattern )}`);
        a3.setAttribute("tabindex", "0");

        a4.setAttribute("href", `https://${member.company_image_url}`);
        a4.setAttribute("tabindex", "0");

        a2.textContent = member.email;
        a3.textContent = member.phone_number;
        a4.textContent = member.website_url;

        p2.appendChild(a2);

        p3.appendChild(a3);

        p4.appendChild(a4);

        card.appendChild(companyLogo);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);

        cards.appendChild(card);
    });
}

const getBusinessData = async () => {
    cards.innerHTML = "";
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        const premiereMembersArray = data.members.filter((member) => member.membership_level > 1);

        // console.table(data.members);
        // console.log(displayBusinessStyle.value)

        displayLogoCards(premiereMembersArray);

    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors    
    }
}

getBusinessData();
