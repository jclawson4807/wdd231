const todays_date = new Date();
const last_modified_date = new Date(document.lastModified);

const last_modified_month = last_modified_date.getMonth() + 1;

const footer_year_span = document.querySelector("#currentyear");
const last_modified_date_paragraph = document.querySelector("#lastModified");

let modified_date_str = last_modified_month.toLocaleString('en-US',
    { minimumIntegerDigits: 2, useGrouping: false }) + "/" + last_modified_date.getDate().toLocaleString('en-US',
        { minimumIntegerDigits: 2, useGrouping: false }) + "/" + last_modified_date.getFullYear() + " " + last_modified_date.getHours().toLocaleString('en-US',
            { minimumIntegerDigits: 2, useGrouping: false }) + ":" + last_modified_date.getMinutes().toLocaleString('en-US',
                { minimumIntegerDigits: 2, useGrouping: false }) + ":" + last_modified_date.getSeconds().toLocaleString('en-US',
                    { minimumIntegerDigits: 2, useGrouping: false })

footer_year_span.innerHTML = todays_date.getFullYear();
last_modified_date_paragraph.innerHTML = `<span class="highlight">Last Modification: ${modified_date_str}</span>`;
