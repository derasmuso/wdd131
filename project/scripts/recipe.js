// A function that shows the date a recipe was added

function getCurrentDate() {
    const today = new Date();
    return today.toLocaleDateString();
}

document.addEventListener("DOMContentLoaded", () => {
    const date = document.getElementById("dateadded");
    if (date) {
        date.textContent = `Date added: ${getCurrentDate()}`;
    }
});

