const subjects = [
    {
        name: "Recipe Question"
    },

    {
        name: "Recipe Feedback"
    },

    {
        name: "Sharing a Recipe"
    },

    {
        name: "Website Feedback"
    },

    {
        name: "General Inquiry"
    }
];

const subjectSelect = document.getElementById("subjectName");

subjects.forEach(subject => {
    const option = document.createElement("option");
    option.value = subject.name;
    option.textContent = subject.name;
    subjectSelect.appendChild(option);
});

// When the form is first filled out, this uses localstorage to save the users input for first name, last name, and email.
// The user will only have to select the message sbuject and enter in their message.

document.addEventListener("DOMContentLoaded", () => {
    const firstInput = document.getElementById("userFirst");
    const lastInput = document.getElementById("userLast");
    const emailInput = document.getElementById("userEmail");
    const form = document.querySelector("form");

    firstInput.value = localStorage.getItem("firstName") || "";
    lastInput.value = localStorage.getItem("lastName") || "";
    emailInput.value = localStorage.getItem("email") || "";

    form.addEventListener("submit", () => {
        localStorage.setItem("firstName", firstInput.value);
        localStorage.setItem("lastName", lastInput.value);
        localStorage.setItem("email", emailInput.value);
    })
});
