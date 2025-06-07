const familyinfoP = document.querySelector('#familyinfo-p');
const onlinesourcesP = document.querySelector('#onlinesources-p');
const toolsP = document.querySelector('#tools-p');

familyinfoP.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "familyinfo");
    window.location.replace("project-articles.html");
});

onlinesourcesP.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "onlinesources");
    window.location.replace("project-articles.html");
});

toolsP.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "tools");
    window.location.replace("project-articles.html");
});

const sendMeResearchTipsButton = document.querySelector("#send-me-research-tips");

sendMeResearchTipsButton.addEventListener('click', () => {

    const emailAddressInput = document.querySelector("#email");

    const emailAddress = emailAddressInput.value.trim();

    localStorage.setItem("emailAddress", emailAddress);

    window.location.replace("joined-mailing-list.html");
});

