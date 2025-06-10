export const dialog = document.querySelector("dialog");
export const html = document.querySelector('html');

export function conditionalCloseDialog(event) {

    const bondingRect = dialog.getBoundingClientRect();

    if ((event.x < bondingRect.left || event.x > bondingRect.right) || (event.y < bondingRect.top || event.y > bondingRect.bottom)) {
        dialog.close();
        html.removeEventListener('click', conditionalCloseDialog, true);
    }
}

export function displayCourseDetailsModal(title, bodyMessage, ) {
    html.addEventListener('click', conditionalCloseDialog, true);

    dialog.innerHTML = "";

    const closeButton = document.createElement("button");
    closeButton.id = "close-dialog-button";
    closeButton.textContent = "X";

    closeButton.addEventListener('click', function () {
        dialog.close();
    });

    const dialogHeader = document.createElement("h2");
    dialogHeader.textContent = title;
    dialogHeader.appendChild(closeButton);

    const bodyText = document.createElement("p");

    bodyText.textContent = bodyMessage;

    dialog.appendChild(dialogHeader);
    dialog.appendChild(bodyText);

    dialog.showModal();

    // event listener to close the modal when the user clicks outside of the modal.

}