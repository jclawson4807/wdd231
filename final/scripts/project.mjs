import { html} from "./dialog.mjs"
import { dialog } from "./dialog.mjs";
import { conditionalCloseDialog } from "./dialog.mjs";
import { displayCourseDetailsModal } from "./dialog.mjs";

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

    let isNewEmailAddress = true;

    const emailAddressInput = document.querySelector("#email");

    const emailAddress = emailAddressInput.value.trim();

    if (localStorage.getItem("emailAddressArray")) {
        let emailAddressArray = JSON.parse(localStorage.getItem("emailAddressArray"));

        if (emailAddressArray.includes(emailAddress)) {
            isNewEmailAddress = false;
        } else {
            emailAddressArray.push(emailAddress);  
            localStorage.setItem("emailAddressArray", JSON.stringify(emailAddressArray));
        }
    }
    else {
        let emailAddressArray = new Array();
        emailAddressArray.push(emailAddress); 
        localStorage.setItem("emailAddressArray", JSON.stringify(emailAddressArray));
    }

    if (isNewEmailAddress) {

        const messageBody = `<h2>Welcome to the Family Heritage Discovery Mailing List
            </h2>
            <p>You have signed up to receive messages from our Family Heritage Discovery mailing List using <span
                    id="email-address">${emailAddress}</span>. We promise that you will not receive spam messages from us. Each message
                we send you will include an unsubscribe link, and we will honor unsubscribe requests. We will not sell
                your email address.</p>
            <p>Now that you have joined our mailing list, you will receive weekly research tips and genealogy news
                written by our team of experienced researchers, sent right to your inbox! Each week our researchers will
                provide free research assistance to one mailing list member!</p>`

        displayCourseDetailsModal("Welcome!", messageBody);     
    } else {

        const messageBody = `<h2>You have signed up to receive messages from our Family Heritage Discovery mailing List using <span
                    id="email-address">${emailAddress}</span>. This email address is already in our mailing list database.
            </h2>
            <p>We appreciate your interest in Family Heritage Discovery, and promise that you will not receive spam messages from us. Each message
                we send you will include an unsubscribe link, and we will honor unsubscribe requests. We will not sell
                your email address.</p>`

        displayCourseDetailsModal("Already Subscribed", messageBody);       
    }

    



    window.location.replace("joined-mailing-list.html");
});

