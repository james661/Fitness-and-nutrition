var bodyPart = [
  "waist",
  "upper legs",
  "back",
  "lower legs",
  "chest",
  "upper arms",
  "shoulders",
  "cardio",
  "lower arms",
];

var equipment = [
  "barbell",
  "rope",
  "body-weight",
  "assisted",
  "cable",
  "leverage machine",
  "stability ball",
];

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
          randomwrkout.push(data[i]);
        }
      }
      let index = Math.floor(Math.random() * randomwrkout.length);
      console.log(randomwrkout[index]);
      let workoutR = document.getElementById("workoutResults");
      let check = document.getElementById("wrkoutContainer");
      console.log(check);
      if (check !== null) {
        check.remove();
      }
      let wrkoutContainer = document.createElement("div");
      let wrkoutName = document.createElement("h1");
      wrkoutContainer.setAttribute("id", "wrkoutContainer");
      wrkoutName.textContent = randomwrkout[index].name;
      let wrkoutGif = document.createElement("h2");

      var img = document.createElement("img");
      img.src = randomwrkout[index].gifUrl;
      img.alt = "Exercise GIF";

      wrkoutContainer.append(wrkoutGif);
      wrkoutGif.append(img);
      wrkoutContainer.append(wrkoutName);
      workoutR.append(wrkoutContainer);
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
var apiReciKey = "43050d7446924af49c324ae43ecfbafa";
var recipeButton = document.getElementById("randRecipes");
var recipeSection = document.querySelector(".unhideRecipeInfo");
var recipeTitle = document.getElementById("recipeTitle");
var recipeImage = document.getElementById("recipeImage");
recipeButton.addEventListener("click", function () {
  var recipeEndpoint = `https://api.spoonacular.com/recipes/complexSearch?diet=${dietSelect.value}&cuisine=${cuisineSelect.value}&intolerances=${intolerancesSelect.value}&number=1&apiKey=${apiReciKey}`;
  fetch(recipeEndpoint)
    .then((response) => {
      console.log("This recipe API works!");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.results[0]);
      recipeTitle.textContent = data.results[0].title;
      // Change Title class to make visible
      recipeTitle.classList.remove(".unhideRecipeInfo");
      recipeTitle.classList.add(".showRecipeInfo");
      // Update Image and change class to make visible
      recipeImage.src = data.results[0].image;
      recipeSection.style.display = "block";
      recipeImage.classList.remove(".unhideRecipeInfo");
      recipeImage.classList.add(".showRecipeInfo");
      var singleRecipeURL = `https://api.spoonacular.com/recipes/${data.results[0].id}/information?apiKey=${apiReciKey}`;
      fetch(singleRecipeURL)
        .then((response) => {
          console.log("This single recipe API works!");
          if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
        });
    })
    .catch((error) => {
      console.error("Recipe Error:", error.message);
    });
});
