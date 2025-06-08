if (window.localStorage.getItem("emailAddress") === null) {
    window.location.replace("index.html");
}
else {
    let storedEmailAddress = window.localStorage.getItem("emailAddress");

    const emailAddressSpan = document.querySelector("#email-address");
    emailAddressSpan.textContent = storedEmailAddress;
};



