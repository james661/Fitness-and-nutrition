var bodyPart = [
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];

var type = [
  "cardio",
  "olympic_weightlifting",
  "plyometrics",
  "powerlifting",
  "strength",
  "stretching",
  "strongman",
];

var difficulty = ["beginner", "intermediate", "expert"];



// start btn and its function
var startBtn = document.getElementById("start");
startBtn.addEventListener("clicked", pickExercise);
function pickExercise() {
}

// exercise fetch data
const url = "https://exercisedb.p.rapidapi.com/exercises";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b5a440c4d4msh54112a87c5e9245p18176fjsnfa9cc2dad087",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// var url = "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle;
// fetch(url, {
//   method: "GET",
//   headers: {
//     "X-Api-Key": "8Ds5VZeW7N2pLZq1C7lxIg==MxRFF9ItX3ahpjcO",
//     "Content-Type": "application/json",
//   },
// })
//   .then(function (response) {
//     console.log(response);

//     if (!response.ok) {
//       throw new Error("Excercise Network response was not ok");
//     }
//     return response.json();
//   })
//   .then(function (result) {
//     console.log("Excercise", result);
//   })
//   .catch(function (error) {
//     console.error("Excercise Error:", error);
//   });

//  nutritional fetch data
fetch("https://api.spoonacular.com/recipes/random?number=1")
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Recipe Network response was not ok");
    }
    return response.json();
  })
  .then(function (result) {
    console.log("Recipe", result);
  })
  .catch(function (error) {
    console.error("Recipe Error:", error);
  });
