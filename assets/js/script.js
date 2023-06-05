var muscle = "biceps";
fetch("https://api.api-ninjas.com/v1/exercises?muscle=")
  // method: "GET",
  // headers: {
  //   "X-Api-Key": "YOUR_API_KEY",
  //   "Content-Type": "application/json",
  // },

  .then(function (response) {
    if (!response.ok) {
      throw new Error("Excercise Network response was not ok");
    }
    return response.json();
  })
  .then(function (result) {
    console.log("Excercise" result);
  })
  .catch(function (error) {
    console.error("Excercise Error: ", error);
  });


  fetch(
    "https://api.spoonacular.com/recipes/random?number=1"
  )


    .then(function (response) {
      if (!response.ok) {
        throw new Error("Recipe Network response was not ok");
      }
      return response.json();
    })
    .then(function (result) {
      console.log("Recipe" result);
    })
    .catch(function (error) {
      console.error("Recipe Error: ", error);
    });