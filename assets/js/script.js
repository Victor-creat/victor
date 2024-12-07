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
      "1 tsp vanilla extract",
      "200ml heavy cream, whipped",
      "Fresh strawberries for garnish"
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
let recipeDetailModal = document.querySelector("#myModal");

function displayAllRecipes() {
  recipes.map((recipe) => {
    let recipeCard = document.createElement("div");
    recipeCard.classList.add("card");
    recipeCard.innerHTML = `
       <img src="${recipe.recipeImage}" class="card-img-top" alt="recipe-image">
       <div class="card-body">
            <h5 class="card-title">${recipe.recipeName}</h5>
            <a href="/recipe.html" class="read-more">Read More</a>
       </div>
    `;

    function selectRecipeItem() {
      function openModal() {
        let recipeModalContent = document.querySelector("#modal-info");
        recipeDetailModal.style.display = "block";
        recipeModalContent.innerHTML = `
           <div class="image-container">
                <img src="${recipe.recipeImage}" />
             </div>
             <div class="recipe-information">
                <h5>${recipe.recipeName}</h5>
               <div class="ingredients-section">
                  <h2>Ingredients</h2>
                  <ul>
                      <li>200g graham crackers</li>
                            <li>100g unsalted butter, melted</li>
                            <li>200g cream cheese</li>
                            <li>100g granulated sugar</li>
                            <li>tsp vanilla extract</li>
                            <li>200ml heavy cream,whipped</li>
                            <li>Fresh strawberries for ganish</li>
                  </ul>
                </div>
                <div class="preparation-section">
                  <h2>Preparation Instruction</h2>
                  <ol>
                 <li>Crush graham crackers into fine crumbs and mix with melted butter.</li>
                <li>Press the mixture into the base of a springform pan and refrigerate.</li>
                <li>In a bowl beat cream cheese and sugar until smooth.</li>
                <li>Add vanilla extract and fold in whipped cream.</li>
                <li>Pour the mixture over the crust and smooth the top.</li>
                <li>Refrigerate for at least four hours or until set.</li>
                <li>Garnish with fresh strawberries before serving.</li>
                  </ol>
                </div>
              </div>
              <div class="modify-buttons" id="modify-buttons">
               <button type="btn button" class="close-button" id="close-button">Close</button>&nbsp;
                <button type="btn button" class="delete-button" id="delete-button">Delete</button>&nbsp;
              </div>
        `;
      }
      recipeCard.addEventListener("click", openModal);
    }

    selectRecipeItem();
    recipeListContainer.appendChild(recipeCard);
  });
}

function closeModal() {
  recipeDetailModal.style.display = "none";
}

function deleteModal() {
  recipeDetailModal.parentNode.removeChild(recipeDetailModal);
}

displayAllRecipes();

// Event listener for close button
document.body.addEventListener("click", (e) => {
  if (e.target.id === "close-button") {
    closeModal();
  }
});

// Event listener for close icon
document.getElementById("modal-close").addEventListener("click", closeModal);

// Event listener for delete button
document.body.addEventListener("click", (e) => {
  if (e.target.id === "delete-button") {
    deleteModal();
  }
});

// Event listener for clicking outside of the modal
window.addEventListener("click", (event) => {
  if (event.target === recipeDetailModal) {
    closeModal();
  }
});
