/* const { formSubmission } = require("./scriptHelper"); */

/* const { addDestinationInfo } = require("./scriptHelper"); */

/* const { pickPlanet } = require("./scriptHelper"); */

/* const { myFetch } = require("./scriptHelper"); */

/* ^I have no idea why this crap up here pops up every time I add a new
function here, but it breaks my code until I comment it out and it's
quite strange lol. */


window.addEventListener("load", function() {
    let form = document.getElementById("testForm");
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoLevel = document.querySelector("input[name=cargoMass]");

    
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image)
    })
    

    /* Adding the formSubmission() function here.*/
    /* The form submission function does work properly. However, it will not work if the previous lines of texts have errors.
    Once the rest of the graded assignment is worked on, this should properly do alerts. */
    form.addEventListener('submit', function(){
        formSubmission(document, "list for later", pilot.value, copilot.value, fuelLevel.value, cargoLevel.value)
        event.preventDefault();
    });
    

 });