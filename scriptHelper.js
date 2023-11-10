// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
 }
 
 /* So, for the formSubmission project: My plan is to use the function validateInput to return a validation string for what is
 being tested. This checks what type of submission each entry is. Then, I can use this function in formSubmission() to verify
 that each entry is yielding the correct validation string. Both of these will execute within the scripts.js file after
 the form.addEventListener('submit', function(){}) event.*/
 function validateInput(testInput) {
    
    if (testInput.length === 0){
        return "Empty";
    } if (isNaN(testInput) === true){
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot) === "Empty"){
        window.alert("Pilot name cannot be empty.");
    } else if (validateInput(pilot) === "Is a Number"){
        window.alert(`${pilot} is not a valid name. That's a number.`);
    }
    if(validateInput(copilot) === "Empty"){
        window.alert("Copilot name cannot be empty.");
    } else if (validateInput(copilot) === "Is a Number"){
        window.alert(`${copilot} is not a valid name. That's a number.`);
    }
    if(validateInput(fuelLevel) === "Empty"){
        window.alert("Please add a fuel level.");
    } else if (validateInput(fuelLevel) === "Not a Number"){
        window.alert("Please submit a valid number for your fuel level.");
    }
    if(validateInput(cargoLevel) === "Empty"){
        window.alert("Please add a cargo level.");
    } else if (validateInput(cargoLevel) === "Not a Number"){
        window.alert("Please submit a valid number for your cargo level.");
    }
}
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;