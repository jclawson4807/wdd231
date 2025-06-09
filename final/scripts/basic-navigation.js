const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const homeButton = document.querySelector('#home');
const familyinfoButton = document.querySelector('#familyinfo');
const onlinesourcesButton = document.querySelector('#onlinesources');
const toolsButton = document.querySelector('#tools');
const fhCenterButton = document.querySelector('#fh-centers');
const researchhelpButton = document.querySelector('#researchhelp');

homeButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "none");
    window.location.replace("index.html");
});

familyinfoButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "familyinfo");
    window.location.replace("project-articles.html");
});

onlinesourcesButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "onlinesources");
    window.location.replace("project-articles.html");
});

toolsButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "tools");
    window.location.replace("project-articles.html");
});

fhCenterButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "none");
    window.location.replace("fh-centers.html");
});

researchhelpButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "none");
    window.location.replace("request-research-help.html");
});