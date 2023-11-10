/* const { formSubmission } = require("./scriptHelper"); */

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
    

    /* Adding the formSubmission() function here.*/
    /* The form submission function does work properly. However, it will not work if the previous lines of texts have errors.
    Once the rest of the graded assignment is worked on, this should properly do alerts. */
    let form = document.getElementById("testForm");
    form.addEventListener('submit', function(){
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        formSubmission("document", "list for later", pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);
    });

 });