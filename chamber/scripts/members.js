const url = "data/members.json";
const cards = document.querySelector('main');
const numberPattern = /\d+/g;

const displayBusinesses = (members) => {
    members.forEach((member) => {
        const card = document.createElement("section");
        const companyName = document.createElement("h2");
        const tagline = document.createElement("h3");

        const businessInfoContainer = document.createElement("div");
        const businessDetailsContainer = document.createElement("div");

        businessInfoContainer.className = "business_info_container";
        businessDetailsContainer.className = "business_details_container";

        const companyImage = document.createElement("img");

        companyImage.setAttribute("src", `images/${member.company_image_url}`);
        companyImage.setAttribute("alt", `${member.name} Main Image`);
        companyImage.setAttribute("width", "80");
        companyImage.setAttribute("height", "80");
        companyImage.setAttribute("loading", "lazy");

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");

        const s1 = document.createElement("span");
        const s2 = document.createElement("span");
        const s3 = document.createElement("span");

        s1.textContent = "EMAIL: ";
        s2.textContent = "PHONE: ";
        s3.textContent = "URL: ";

        const a1 = document.createElement("a");
        const a2 = document.createElement("a");
        const a3 = document.createElement("a");

        a1.setAttribute("href", `mailto:${member.company_image_url}`);
        a2.setAttribute("href", `tel:+${member.phone_number}`);
        a3.setAttribute("href", member.company_image_url);

        a1.textContent = member.email;
        a2.textContent = member.phone_number.match( numberPattern );
        a3.textContent = member.website_url;

        p1.appendChild(s1);
        p1.appendChild(a1);

        p2.appendChild(s2);
        p2.appendChild(a2);

        p3.appendChild(s3);
        p3.appendChild(a3);

        businessDetailsContainer.appendChild(p1);
        businessDetailsContainer.appendChild(p2);
        businessDetailsContainer.appendChild(p3);

        businessInfoContainer.appendChild(companyImage);
        businessInfoContainer.appendChild(businessDetailsContainer);

        card.appendChild(companyName);
        card.appendChild(tagline);
        card.appendChild(businessInfoContainer);
        cards.appendChild(card);
    });
}

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayBusinesses(data.members);
}

getBusinessData();

