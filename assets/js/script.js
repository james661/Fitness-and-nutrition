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
