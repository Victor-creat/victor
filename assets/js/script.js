//JAVASCRIPT
let recipes = [
    {
      id: 1,
      recipeName: "Strawberry Cream Cake",
      recipeImage: "./assets/images/strawberry-short-cake.jpg",
      recipeIngredient: [
        "200g graham crackers",
        "100g unsalted butter, melted",
        "200g cream cheese",
        "100g granulated sugar",
        "tsp vanilla extract",
        "200ml heavy cream,whipped",
        "Fresh strawberries for ganish"
      ],
      recipePreparation: [
        "Crush graham crackers into fine crumbs and mix with melted butter.",
        "Press the mixture into the base of a springform pan and refrigerate.",
        "In a bowl beat cream cheese and sugar until smooth.",
        "Add vanilla extract and fold in whipped cream.",
        "Pour the mixture over the crust and smooth the top.",
        "Refrigerate for at least four hours or until set.",
        "Garnish with fresh strawberries before serving."
        
      ],
    },
    {
        id: 2,
        recipeName: "Strawberry Cream Cake",
        recipeImage: "./assets/images/strawberry-short-cake.jpg",
        recipeIngredient: [
          "200g graham crackers",
          "100g unsalted butter, melted",
          "200g cream cheese",
          "100g granulated sugar",
          "tsp vanilla extract",
          "200ml heavy cream,whipped",
          "Fresh strawberries for ganish"
        ],
        recipePreparation: [
          "Crush graham crackers into fine crumbs and mix with melted butter.",
          "Press the mixture into the base of a springform pan and refrigerate.",
          "In a bowl beat cream cheese and sugar until smooth.",
          "Add vanilla extract and fold in whipped cream.",
          "Pour the mixture over the crust and smooth the top.",
          "Refrigerate for at least four hours or until set.",
          "Garnish with fresh strawberries before serving."
          
        ],
      },
      {
        id: 3,
        recipeName: "Strawberry Cream Cake",
        recipeImage: "./assets/images/strawberry-short-cake.jpg",
        recipeIngredient: [
          "200g graham crackers",
          "100g unsalted butter, melted",
          "200g cream cheese",
          "100g granulated sugar",
          "tsp vanilla extract",
          "200ml heavy cream,whipped",
          "Fresh strawberries for ganish"
        ],
        recipePreparation: [
          "Crush graham crackers into fine crumbs and mix with melted butter.",
          "Press the mixture into the base of a springform pan and refrigerate.",
          "In a bowl beat cream cheese and sugar until smooth.",
          "Add vanilla extract and fold in whipped cream.",
          "Pour the mixture over the crust and smooth the top.",
          "Refrigerate for at least four hours or until set.",
          "Garnish with fresh strawberries before serving."
          
        ],
      },
    {
      id: 4,
      recipeName: "Strawberry Cream Cake",
      recipeImage: "./assets/images/strawberry-short-cake.jpg",
      recipeIngredient: [
        "200g graham crackers",
        "100g unsalted butter, melted",
        "200g cream cheese",
        "100g granulated sugar",
        "tsp vanilla extract",
        "200ml heavy cream,whipped",
        "Fresh strawberries for ganish"
      ],
      recipePreparation: [
        "Crush graham crackers into fine crumbs and mix with melted butter.",
        "Press the mixture into the base of a springform pan and refrigerate.",
        "In a bowl beat cream cheese and sugar until smooth.",
        "Add vanilla extract and fold in whipped cream.",
        "Pour the mixture over the crust and smooth the top.",
        "Refrigerate for at least four hours or until set.",
        "Garnish with fresh strawberries before serving."
      ],
    },
  ];
  
  let recipeListContainer = document.querySelector("#recipe-display-container");
  let recipeCard = document.getElementById("card");
  
  function displayAllRecipes() {
    recipes.map((recipe) => {
      let recipeCard = document.createElement("div");
      recipeCard.classList.add("card");
      recipeCard.innerHTML = `
         <img src="${recipe.recipeImage}" Strawberry Cream Cheesecake="card-img-top" alt="recipe-image">
         <div class="card-body">
              <h5 class="card-title">${recipe.recipeName}</h5>
              <a href="/recipe.html" class="read-more">Read More</a>
         </div>
      `;
      console.log(recipeCard);
      recipeListContainer.appendChild(recipeCard);
    });
  }
  
  displayAllRecipes();

 
  document.getElementById("search-form").addEventListener("submit", function(event) {
    event.preventDefault();// Prevent default form submission

//Get the value of the search input
const query = document.getElementsById("search-query").valuetoLowerCase().trim();

//Define the mapping of queries to URLS'S
const recipeLinks = {
    "strawberry Cream Cake": "./index.html",
    "strawberry Cream Cake": "./recipe.html",
    "strawberry Cream Cake": "./recipe.html",

};
//Check if the query matches any recipes
if(recipeLinks[query]){
    window.location.href = recipeLinks[query];
} else {
    alert("Recipe not found. Please try a different search term.");
}
  });
  