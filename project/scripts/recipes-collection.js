const recipes = [
    {
        recipeName: "Sausage and Potatoes",
        imagePath: "images/sausage-potatoes.webp",
        link: "sausage-potatoes.html"
    },

    {
        recipeName: "Fried Rice",
        imagePath: "images/fried-rice.webp",
        link: "fried-rice.html"
    },

    {
        recipeName: "Hot Dogs",
        imagePath: "images/hot-dogs.webp",
        link: "hot-dogs.html"
    },

    {
        recipeName: "BLT",
        imagePath: "images/blt.jpg",
        link: "blt.html"
    },

    {
        recipeName: "Garlic Herb Chicken",
        imagePath: "images/chicken-breast.webp",
        link: "chicken.html"
    },

    {
        recipeName: "Meatloaf",
        imagePath: "images/meat-loaf.jpg",
        link: "meatloaf.html"
    },

    {
        recipeName: "Sloppy Joes",
        imagePath: "images/sloppy-joes.jpg",
        link: "sloppy-joes.html"
    },

    {
        recipeName: "Spaghetti",
        imagePath: "images/spaghetti.jpg",
        link: "spaghetti.html"
    },

    {
        recipeName: "Ground Beef Tacos",
        imagePath: "images/tacos.jpg",
        link: "tacos.html"
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


