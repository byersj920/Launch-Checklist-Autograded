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
        return;
    } else if (validateInput(pilot) === "Is a Number"){
        window.alert(`${pilot} is not a valid name. That's a number.`);
        return;
    }
    if(validateInput(copilot) === "Empty"){
        window.alert("Copilot name cannot be empty.");
        return;
    } else if (validateInput(copilot) === "Is a Number"){
        window.alert(`${copilot} is not a valid name. That's a number.`);
        return;
    }
    if(validateInput(fuelLevel) === "Empty"){
        window.alert("Please add a fuel level.");
        return;
    } else if (validateInput(fuelLevel) === "Not a Number"){
        window.alert("Please submit a valid number for your fuel level.");
        return;
    }
    if(validateInput(cargoLevel) === "Empty"){
        window.alert("Please add a cargo level.");
        return;
    } else if (validateInput(cargoLevel) === "Not a Number"){
        window.alert("Please submit a valid number for your cargo level.");
        return;
    } else {

        /*This else statement will execute only if there are no errors with the user submissions. This will make 
        the launchStatus list visible, as well as use what the user submitted to determine success or failure 
        on a mission.*/
        let launchStatus = document.getElementById("launchStatus");
        let faultyItems = document.getElementById("faultyItems");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        faultyItems.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;


        /* Note for Demo: These unit tests were AWFUL. Not only did they require specific text to be put in
        each statement (which was not instructed to us btw) but because the tests each change the html doc,
        each change to the text carried OVER to the next test. Which, isn't hard to fix. But with that information
        being left out of the instructions made getting these tests to pass very frustrating. */
        if (fuelLevel < 10000){
            launchStatus.style.color = 'red';
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            fuelStatus.innerHTML = 'Fuel level too low for launch';
        } else {
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
        }

        if (cargoLevel > 10000){
            launchStatus.style.color = 'red';
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
        } else {
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }

        if ((fuelLevel >= 10000) && (cargoLevel <= 10000)){
            launchStatus.style.color = 'green';
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
        }

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