export const dialog = document.querySelector("dialog");

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
    dialogHeader.textContent = `${course.subject} ${course.number}`;
    dialogHeader.appendChild(closeButton);

    const title = document.createElement("h3");

    title.textContent = course.title;

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");

    p1.textContent = `${course.credits} credits`;
    p2.textContent = `Certtificate: ${course.certificate}`;
    p3.textContent = course.description;
    p4.textContent = `Technology: ${course.technology.join(", ")}`;

    dialog.appendChild(dialogHeader);
    dialog.appendChild(title);
    dialog.appendChild(p1);
    dialog.appendChild(p2);
    dialog.appendChild(p3);
    dialog.appendChild(p4);

    dialog.showModal();

    // event listener to close the modal when the user clicks outside of the modal.

}