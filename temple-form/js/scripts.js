const resultsDiv = document.querySelector("#results");
resultsDiv.innerHTML = "";

const getString = window.location.search;

const formData = new URLSearchParams(getString);

// for (const [key, value] of formData.entries()) {
//     const p = document.createElement("p");
//     p.textContent = `${key.toUpperCase()} = ${value}`

//     resultsDiv.appendChild(p);
// }

const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const p4 = document.createElement("p");

p1.textContent = `Reservation Name: ${formData.get('first')} ${formData.get('last')}`
p2.textContent = `Telephone Number: ${formData.get('phone')}`
p3.textContent = `Email Address: ${formData.get('email')}`
p4.textContent = `Ordinance: ${formData.get('ordinance')} in the ${formData.get('location')} Temple on ${formData.get('date')}`

resultsDiv.appendChild(p1);
resultsDiv.appendChild(p2);
resultsDiv.appendChild(p3);
resultsDiv.appendChild(p4);

