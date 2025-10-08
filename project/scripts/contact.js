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
