// A function that shows the date a recipe was added

function displayRecipeDate() {
    const dateElement = document.getElementById("dateadded");
    if (!dateElement) return;

    const storedDate = dateElement.dataset.date;
    const formattedDate = new Date(storedDate).toLocaleDateString("en-us", {
        year: "numeric",
        month: "numeric",
        day: "numeric"
    });

    dateElement.textContent = `Date added: ${formattedDate}`;
}

document.addEventListener("DOMContentLoaded", displayRecipeDate);



