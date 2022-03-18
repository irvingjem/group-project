// Global Variables
var abilitiesList = document.getElementById("abilities");

// Grab pokemon name / and image
var fetchPokeData = function (pokeName) {
  var pokeNameURL =
    "https://pokeapi.co/api/v2/pokemon/" + pokeName.toLowerCase();
  fetch(pokeNameURL)
    .then(function (pokeNameResponse) {
      return pokeNameResponse.json();
    })
    .then(function (pokeNameData) {
      console.log("pokeNameData", pokeNameData);
      resetScreen();

      //setting up the character name
      var dataTypes = pokeNameData["name"];
      document.getElementById("pokename").textContent = "Name: " + dataTypes;

      //Calling the ability fetch based on the character name data
      fetchPokeAbility(dataTypes);

      var imgElement = document.getElementById("charcterImg");
      console.log("charcterImg", pokeNameData.sprites.front_default);
      imgElement.setAttribute("src", pokeNameData.sprites.front_default);
      imgElement.setAttribute("alt", dataTypes);
    });
};
// Removed old Data from past seach
function resetScreen() {
  //need to fill
  abilities.innerHTML = "";
}

// Display Name Function - 
let pokeDiv = document.getElementById("pokeDetails");
let getPokeName = function () {
  pokeDiv.classList.add("font-bold", "text-xl", "mb-2");
  var pTag = document.createElement("p");
  pTag.setAttribute("id", "pokename");
  pTag.textContent = "Name: ";
  console.log(pTag);  
  
  pokeDiv.append(pTag);
};


getPokeName(); //

//End Austin note

// Fetch Abilities Function -- Jem

var fetchPokeAbility = function (pokeName) {
  var pokeAbilityURL = "https://pokeapi.co/api/v2/pokemon/" + pokeName;
  fetch(pokeAbilityURL)
    .then(function (pokeAbilityResponse) {
      return pokeAbilityResponse.json();
    })
    .then(function (pokeAbilityData) {
      console.log("pokeAbilityData", pokeAbilityData);
      //resetScreen();

      var dataAbility = pokeAbilityData.abilities;
      var dataFirstAbility = dataAbility[0];
      var dataSecondAbility = dataAbility[1];
      var dataThirdAbility = dataAbility[2];
      console.log("first", dataFirstAbility, "second", dataSecondAbility);
      //createElement
      var liTag = document.createElement("li");
      liTag.textContent = dataFirstAbility.ability.name;
      //append it to ul List
      abilitiesList.append(liTag);
      //createElement
      var liTag2 = document.createElement("li");
      liTag2.textContent = dataSecondAbility.ability.name;
      //append it to ul List
      abilitiesList.append(liTag2);
      //createElement
      var liTag3 = document.createElement("li");
      liTag3.textContent = dataThirdAbility.ability.name;
      //append it to ul List
      abilitiesList.append(liTag3);      
        });
    };

// Save local | load local (last priority) | Delete Local

// var loadHistory = function() {
//     searchArrray =
// }

// var loadHistory = function() {
//     searchArray = JSON.parse(localStorage.getItem("weatherSearch"));

//     if (searchArray) {
//         searchHistoryArray = JSON.parse(localStorage.getItem("weatherSearch"));
//         for (let i = 0; i < searchArray.length; i++) {
//             var searchHistoryEl = document.createElement('button');
//             searchHistoryEl.className = "btn";
//             searchHistoryEl.setAttribute("data-city", searchArray[i])
//             searchHistoryEl.innerHTML = searchArray[i];
//             historyButtonsEl.appendChild(searchHistoryEl);
//             historyCardEl.removeAttribute("style");
//         }

//     }
// }

//loadHistory();

//on page load call the functions
//fetchPokeData();
var btnGen = document.getElementById("btnGenerate");
btnGen.addEventListener("click", function () {
  var searchText = document.getElementById("characterName").value;
  var showData = document.getElementById("invisible");
  showData.classList.remove("invisible");
  fetchPokeData(searchText);
  characterName.value = "";
});
var enterKey = document.getElementById("enterListener");
function enterSubmit(event) {
  event.preventDefault();
  var searchText = document.getElementById("characterName").value;
  var showData = document.getElementById("invisible");
  showData.classList.remove("invisible");
  fetchPokeData(searchText);
  characterName.value = "";
}
enterKey.addEventListener("submit", enterSubmit);
