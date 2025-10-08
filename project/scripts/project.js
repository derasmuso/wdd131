const recipes = [
    {
        recipeName: "Sausage and Potatoes",
        imagePath: "images/sausage-potatoes.webp",
        link: "recipes/sausage-potatoes.html"
    },

    {
        recipeName: "Fried Rice",
        imagePath: "images/fried-rice.webp",
        link: "recipes/fried-rice.html"
    },

    {
        recipeName: "Hot Dogs",
        imagePath: "images/hot-dogs.webp",
        link: "recipes/hot-dogs.html"
    }
];

createRecipeCard(recipes);

function createRecipeCard(featuredRecipes) {
    document.querySelector(".recipe-card").innerHTML = "";
    featuredRecipes.forEach(recipe => {
        let card = document.createElement("section");
        let img = document.createElement("img");
        let link = document.createElement("a");

        link.textContent = recipe.recipeName;
        link.href = recipe.link;
        link.classList.add("recipe-link");
        img.setAttribute("src", recipe.imagePath);
        img.setAttribute("alt", `${recipe.recipeName} Recipe`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "500");
        img.setAttribute("height", "350");



        card.appendChild(img);
        card.appendChild(link);

        document.querySelector(".recipe-card").appendChild(card);

    });
}

const button = document.getElementById('menu');
const nav = document.getElementById('mainNav');

button.addEventListener('click', () => {
    nav.classList.toggle('hidden');
});

