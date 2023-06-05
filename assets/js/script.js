var muscle = "biceps";
fetch("https://api.api-ninjas.com/v1/exercises?muscle=" + muscle, {
  method: "GET",
  headers: {
    "X-Api-Key": "YOUR_API_KEY",
    "Content-Type": "application/json",
  },
})
  .then(function (response) {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error("Error: ", error);
  });
