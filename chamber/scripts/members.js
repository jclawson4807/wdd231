const url = "data/members.json";
const cards = document.querySelector('main');
const displayBusinessStyle = document.querySelector('#business_display_style');
const mode_switch_button = document.querySelector("#mode_switch_button");
const numberPattern = /\d+/g;

mode_switch_button.addEventListener('click', () => {
    if (displayBusinessStyle.value == "card") {
        displayBusinessStyle.value = "list";
    } else if (displayBusinessStyle.value == "list") {
        displayBusinessStyle.value = "card";
    }
   
    getBusinessData(displayBusinessStyle);
});

const displayLogoCards = (members) => {
    members.forEach((member) => {
        const card = document.createElement("section");
        card.className = "logo_card";

        const companyLogo = document.createElement("img");
        companyLogo.setAttribute("src", `images/${member.icon_image}`);
        companyLogo.setAttribute("alt", `${member.name} Main Image`);
        companyLogo.setAttribute("width", "140");
        companyLogo.setAttribute("height", "140");
        companyLogo.setAttribute("loading", "lazy");

        const businessInfoContainer = document.createElement("div");

        businessInfoContainer.className = "centered_info_container";

        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        const p4 = document.createElement("p");

        p1.textContent = `${member.address.street1} ${member.address.city} ${member.address.state} ${member.address.zip}`;

        const a2 = document.createElement("a");
        const a3 = document.createElement("a");
        const a4 = document.createElement("a");

        a2.setAttribute("href", `mailto:${member.company_image_url}`);
        a3.setAttribute("href", `tel:+${member.phone_number.match( numberPattern )}`);
        a4.setAttribute("href", `https://${member.company_image_url}`);

        a2.textContent = member.email;
        a3.textContent = member.phone_number;
        a4.textContent = member.website_url;

        p2.appendChild(a2);

        p3.appendChild(a3);

        p4.appendChild(a4);

        businessInfoContainer.appendChild(p1);
        businessInfoContainer.appendChild(p2);
        businessInfoContainer.appendChild(p3);
        businessInfoContainer.appendChild(p4);

        card.appendChild(companyLogo);
        card.appendChild(businessInfoContainer);

        cards.appendChild(card);
    });
}

const displayBusinessCards = (members) => {
    members.forEach((member) => {
        const card = document.createElement("section");
        const companyName = document.createElement("h2");
        const tagline = document.createElement("h3");

        companyName.textContent = member.name;
        tagline.textContent = member.tag_line;

        const businessInfoContainer = document.createElement("div");
        const businessDetailsContainer = document.createElement("div");

        businessInfoContainer.className = "business_info_container";
        businessDetailsContainer.className = "business_details_container";

        const companyImage = document.createElement("img");

        companyImage.setAttribute("src", `images/${member.company_image_url}`);
        companyImage.setAttribute("alt", `${member.name} Main Image`);
        companyImage.setAttribute("width", "70");
        companyImage.setAttribute("height", "70");
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
        a2.setAttribute("href", `tel:+${member.phone_number.match( numberPattern )}`);
        a3.setAttribute("href", `https://${member.company_image_url}`);

        a1.textContent = member.email;
        a2.textContent = member.phone_number;
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

const displayBusinessList = (members) => {
    members.forEach((member) => {
        const card = document.createElement("section");
        const companyName = document.createElement("h2");
        const tagline = document.createElement("h3");

        companyName.textContent = member.name;
        tagline.textContent = member.tag_line;

        const businessInfoContainer = document.createElement("div");
        const businessDetailsContainer = document.createElement("div");

        businessInfoContainer.className = "business_info_container";
        businessDetailsContainer.className = "business_card_in_list";

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
        a2.setAttribute("href", `tel:+${member.phone_number.match( numberPattern )}`);
        a3.setAttribute("href", `https://${member.company_image_url}`);

        a1.textContent = member.email;
        a2.textContent = member.phone_number;
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

        businessInfoContainer.appendChild(businessDetailsContainer);

        card.appendChild(companyName);
        card.appendChild(tagline);
        card.appendChild(businessInfoContainer);
        cards.appendChild(card);
    });
}

const getBusinessData = async (displayBusinessStyleValue) => {
    cards.innerHTML = "";
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.table(data.members);
        // console.log(displayBusinessStyle.value)

        if (displayBusinessStyleValue.value == "card") {
            displayLogoCards(data.members);
        } else if (displayBusinessStyleValue.value == "list") {
            displayBusinessList(data.members);
        }
    } catch (error) {
        console.error("Error fetching data:", error); // Handle any errors    
    }
}

getBusinessData(displayBusinessStyle);
