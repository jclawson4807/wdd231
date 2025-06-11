const responseContainer = document.querySelector("#request-data");

function addReferenceIfTextContentFound(label, inputName) {
    if (formData.get(inputName)) {
        const p = document.createElement("p");
        p.setAttribute("tabindex", "0");
        
        p.textContent = `${label}: ${formData.get(inputName)}`
    
        responseContainer.appendChild(p)
    }
}

const formData = new URLSearchParams(window.location.search);

const h21 = document.createElement("h2");
h21.setAttribute("tabindex", "0");
h21.textContent = "Applicant Information";

const h21p1 = document.createElement("p");
const h21p2 = document.createElement("p");
const h21p3 = document.createElement("p");

h21p1.setAttribute("tabindex", "0");
h21p2.setAttribute("tabindex", "0");
h21p3.setAttribute("tabindex", "0");

h21p1.textContent = `Applicant Name: ${formData.get('fname')} ${formData.get('lname')}`
h21p2.textContent = `Telephone Number: ${formData.get('phone')}`
h21p3.textContent = `Email Address: ${formData.get('email')}`

responseContainer.appendChild(h21);
responseContainer.appendChild(h21p1);
responseContainer.appendChild(h21p2);
responseContainer.appendChild(h21p3);

const h22 = document.createElement("h2");
h22.setAttribute("tabindex", "0");
h22.textContent = "Research Subject Information";

responseContainer.appendChild(h22);

addReferenceIfTextContentFound("First Name", "rs-first-name");
addReferenceIfTextContentFound("Last Name", "rs-last-name");
addReferenceIfTextContentFound("Gender", "rs-gender");
addReferenceIfTextContentFound("Year of Birth", "rs-year-of-birth");
addReferenceIfTextContentFound("Year of Marriage", "rs-year-of-marriage");
addReferenceIfTextContentFound("Year of Death", "rs-year-of-death");
addReferenceIfTextContentFound("Place of Birth", "rs-birthplace");
addReferenceIfTextContentFound("Place of Marriage", "rs-marriageplace");
addReferenceIfTextContentFound("Place of Death", "rs-deathplace");

const h23 = document.createElement("h2");
h23.setAttribute("tabindex", "0");
h23.textContent = "Research Subject Family Information";

responseContainer.appendChild(h23);

addReferenceIfTextContentFound("Spouse's First Name", "rs-spouse-first-name");
addReferenceIfTextContentFound("Spouse's Last Name", "rs-spouse-last-name");
addReferenceIfTextContentFound("Father's First Name", "rs-pat-first-name");
addReferenceIfTextContentFound("Father's Last Name", "rs-pat-last-name");
addReferenceIfTextContentFound("Mother's First Name", "rs-mat-first-name");
addReferenceIfTextContentFound("Mother's Last Name", "rs-mat-last-name");

const h24 = document.createElement("h2");
h24.setAttribute("tabindex", "0");
h24.textContent = "Sources";

responseContainer.appendChild(h24);

addReferenceIfTextContentFound("Date of Last Source Search", "rs-date-last-source-search");
addReferenceIfTextContentFound("Found Birth Certificate", "birth-certificate");
addReferenceIfTextContentFound("Found Death Certificate", "death-certificate");
addReferenceIfTextContentFound("Found Marriage Certificate", "marriage-certificate");
addReferenceIfTextContentFound("Found in Census", "found-in-census");
addReferenceIfTextContentFound("Other Sources Searched", "other-sources");
