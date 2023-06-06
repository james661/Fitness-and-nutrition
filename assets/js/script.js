var muscle = [
"abdominals",
"abductors",
"adductors",
"biceps",
"calves",
"chest",
"forearms",
"glutes",
"hamstrings",
"lats",
"lower_back",
"middle_back",
"neck",
"quadriceps",
"traps",
"triceps",
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

var difficulty = [
"beginner",
"intermediate",
"expert",
];

// var url = "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle;

// fetch(url, {
//   method: "GET",
//   headers: {
//     "X-Api-Key": "8Ds5VZeW7N2pLZq1C7lxIg==MxRFF9ItX3ahpjcO",
//     "Content-Type": "application/json",
//   },

// })
//   .then(function (response) {
//     console.log("response")

//     if (!response.ok) {
//       throw new Error("Excercise Network response was not ok");

//     }
//     return response.json();
//   })
//   .then(function (result) {
//     console.log("Excercise" result);
//   })
//   .catch(function (error) {
//     console.error("Excercise Error: ", error);
//   });


var apiKey = "0ed9736aeb18498bb0f2d424ed245c01";
var endpoint = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
fetch(`${endpoint}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data, "chicken");
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });