const currentYear = document.querySelector("#currentyear");
const today = new Date();
currentYear.innerHTML = today.getFullYear();

lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = "Last Modified: " + lastModified;