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

var equipment = [
  "barbell",
  "rope",
  "body-weight",
  "assisted",
  "cable",
  "leverage machine",
  "stability ball",
];

// var difficulty = [
// "beginner",
// "intermediate",
// "expert",
// ];

const apiKey = "b5a440c4d4msh54112a87c5e9245p18176fjsnfa9cc2dad087";
const options = {
  headers: {
    "X-RapidAPI-Key": "b5a440c4d4msh54112a87c5e9245p18176fjsnfa9cc2dad087",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
document
  .querySelector("#workoutForm")
  .addEventListener("submit", function (sub) {
    sub.preventDefault();
    let bodyP = document.getElementById("bodyPart").value.toLowerCase();
    let equip = document.getElementById("equipment").value.toLowerCase();
    // getWorkOut(bodyPart, equipment);
    // getgif(bodyPart, equipment);
    // console.log(bodyP);
    // console.log(equip);
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
          // other stuff to do
          /* 

            store values in an array
            pick random value from that array
            display random value to user
          */
          console.log(data[i]);
        }
      }
      // renderItems(name, data);
      // renderItems(gifUrl, data),
      //   (document.getElementById("workout").textContent = workout);
    })
    .catch((error) => {
      console.error(error);
    });
}

var apiKey2 = "43050d7446924af49c324ae43ecfbafa";
var endpoint = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey2}`;
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
