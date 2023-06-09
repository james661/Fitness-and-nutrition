let randomwrkout = [];

const apiKey = "b5a440c4d4msh54112a87c5e9245p18176fjsnfa9cc2dad087";
const options = {
  headers: {
    "X-RapidAPI-Key": "a410389ea3msha482df8372ade2bp19d872jsn0909b3343fdd",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
document
  .querySelector("#workoutForm")
  .addEventListener("submit", function (sub) {
    sub.preventDefault();
    let bodyP = document.getElementById("bodyPart").value.toLowerCase();
    let equip = document.getElementById("equipment").value.toLowerCase();
    getWorkout(bodyP, equip);
  });
function getWorkout(bodyP, equip) {
  const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyP}`;
  var gifUrl = fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        if (data[i].equipment === equip) {
          // randomwrkout.push(data[i]);
      // console.log(randomwrkout[index]);
      let workoutR = document.getElementById("workoutResults");
      let check = document.getElementById("wrkoutContainer");
      console.log(check);
      if (check !== null) {
        check.remove();
      }
      let wrkoutContainer = document.createElement("div");
      let wrkoutName = document.createElement("h1");
      wrkoutContainer.setAttribute("id", "wrkoutContainer");
      wrkoutName.textContent = data[i].name;
      var img = document.createElement("img");
      img.src = data[i].gifUrl;
      img.alt = "Exercise GIF";
      wrkoutContainer.append(img);
      wrkoutContainer.append(wrkoutName);
      workoutR.append(wrkoutContainer);
      let wrkoutError = document.createElement("h1")        }
      if (data[i] = null) {
        wrkoutError.textContent =
          "Undefined: Choose a different combination";
        wrkoutContainer.append(wrkoutError);
        
      }}
let index = Math.floor(Math.random() * randomwrkout.length);


    })
    .catch((error) => {
      console.error(error);
    });
}
// --------------END WORKOUT SECTION------------------------------------
// --------------EVERYTHING BELOW IS RECIPE BASED------------------------
var dietSelect = document.getElementById("diet");
var cuisineSelect = document.getElementById("cuisine");
var intolerancesSelect = document.getElementById("intolerances");

//Earnest apiKey: 15078b5e06594cb3ab818e08ec72e030
// Jose apiKey: 43050d7446924af49c324ae43ecfbafa
var apiReciKey = "4c1850eb22000d948347395ddcfbf45dfaef73ec";
var RecipeEndpoint = `https://api.spoonacular.com/recipes/complexSearch?diet=${dietSelect.value}&cuisine=${cuisineSelect.value}&intolerances=${intolerancesSelect.value}&number=15&apiKey=${apiReciKey}`;

var apiReciKey = "4c1850eb22000d948347395ddcfbf45dfaef73ec";
var recipeButton = document.getElementById("randRecipes");
var recipeSection = document.querySelector(".unhideRecipeInfo");
var recipeTitle = document.getElementById("recipeTitle");
var recipeImage = document.getElementById("recipeImage");
var ingredients = document.getElementById("ingredients");
var instructions = document.getElementById("instructions");
recipeButton.addEventListener("click", function () {
  ingredients.textContent = "";
  var recipeEndpoint = `https://api.spoonacular.com/recipes/complexSearch?diet=${dietSelect.value}&cuisine=${cuisineSelect.value}&intolerances=${intolerancesSelect.value}&number=1&apiKey=${apiReciKey}`;
  fetch(recipeEndpoint)
    .then((response) => {
      // console.log("This recipe API works!");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data.results[0]);
      recipeTitle.textContent = data.results[0].title;
      // Update Image and change class to make visible
      recipeImage.src = data.results[0].image;
      recipeSection.style.display = "block";
      recipeImage.classList.remove(".unhideRecipeInfo");
      recipeImage.classList.add(".showRecipeInfo");
      var singleRecipeURL = `https://api.spoonacular.com/recipes/${data.results[0].id}/information?apiKey=${apiReciKey}`;
      fetch(singleRecipeURL)
        .then((response) => {
          // console.log("This single recipe API works!");
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // console.log(data);
          var ingredientsArr = data.extendedIngredients;
          for (var i = 0; i < ingredientsArr.length; i++) {
            var ingredientItem = document.createElement("li");
            ingredientItem.textContent = ingredientsArr[i].original;
            ingredients.appendChild(ingredientItem);
          }
          // --------------------- Displays HTML from API ------------------------------
          instructions.innerHTML = data.instructions;
          recipeSection.style.display = "block";
        });
    })
    .catch((error) => {
      console.error("Recipe Error:", error.message);
    });
  console.log(dietSelect.value);
});
