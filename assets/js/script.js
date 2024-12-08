document.addEventListener('DOMContentLoaded', () => {
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
  let recipeDetailModal = document.querySelector("#myModal");

  function displayAllRecipes() {
      recipes.forEach((recipe) => {
          let recipeCard = document.createElement("div");
          recipeCard.classList.add("card");
          recipeCard.innerHTML = `
              <img src="${recipe.recipeImage}" class="card-img-top" alt="recipe-image">
              <div class="card-body">
                  <h5 class="card-title">${recipe.recipeName}</h5>
                  <a href="javascript:void(0);" class="read-more" data-recipe-id="${recipe.id}">Read More</a>
              </div>
          `;

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
                          <ul id="ingredient-list">
                              ${recipe.recipeIngredient.map(ingredient => `<li contenteditable="true">${ingredient}</li>`).join('')}
                          </ul>
                      </div>
                      <div class="preparation-section">
                          <h2>Preparation Instructions</h2>
                          <ol id="preparation-list">
                              ${recipe.recipePreparation.map(step => `<li contenteditable="true">${step}</li>`).join('')}
                          </ol>
                      </div>
                  </div>
                  <div class="modify-buttons" id="modify-buttons">
                      <button type="btn button" class="close-button" id="close-button">Close</button>&nbsp;
                      <button type="btn button" class="edit-button" id="edit-button">Save Changes</button>&nbsp;
                      <button type="btn button" class="delete-button" id="delete-button">Delete</button>&nbsp;
                  </div>
              `;

              // Attach event listeners for edit and delete buttons inside the modal
              document.getElementById('edit-button').addEventListener('click', () => saveChanges(recipe));
              document.getElementById('delete-button').addEventListener('click', () => deleteRecipe(recipe.id));
          }

          recipeCard.querySelector(".read-more").addEventListener("click", openModal);
          recipeListContainer.appendChild(recipeCard);
      });
  }

  function closeModal() {
      recipeDetailModal.style.display = "none";
  }

  function deleteRecipe(recipeId) {
      recipes = recipes.filter(recipe => recipe.id !== recipeId);
      closeModal();
      displayAllRecipes();
  }

  function saveChanges(recipe) {
      const newIngredients = Array.from(document.querySelectorAll('#ingredient-list li')).map(li => li.textContent);
      const newPreparation = Array.from(document.querySelectorAll('#preparation-list li')).map(li => li.textContent);

      recipe.recipeIngredient = newIngredients;
      recipe.recipePreparation = newPreparation;

      closeModal();
      alert('Changes saved successfully!');
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

  // Event listener for clicking outside of the modal
  window.addEventListener("click", (event) => {
      if (event.target === recipeDetailModal) {
          closeModal();
      }
  });
});

