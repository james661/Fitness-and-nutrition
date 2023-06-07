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
  ,
];

// var type = [
// "cardio",
// "olympic_weightlifting",
// "plyometrics",
// "powerlifting",
// "strength",
// "stretching",
// "strongman",
// ];

// var difficulty = [
// "beginner",
// "intermediate",
// "expert",
// ];

var url = `https://exercisedb.p.rapidapi.com/exercises/`;

fetch(url, {
  method: "GET",
headers: {
		'X-RapidAPI-Key': 'b5a440c4d4msh54112a87c5e9245p18176fjsnfa9cc2dad087',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
})
  .then(function (response) {
    console.log("response")

    if (!response.ok) {
      throw new Error("Excercise Network response was not ok");

    }
    return response.json();
  })
  .then(function (result) {
    console.log("Excercise", result);
  })
  .catch(function (error) {
    console.error("Excercise Error: ", error);
  });


var apiKey = "43050d7446924af49c324ae43ecfbafa";
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