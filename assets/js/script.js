var apiNames = "https://fungenerators.com/name/pokemon/";
fetch(apiNames).then(function (namesResponse) {
  return namesResponse.json();
});



// Fetch Abilities Function

var apiStats = "https://pokeapi.co/";
fetch(apiStats).then(function (statsResponse) {
  return statsResponse.json();
});
// Display Name Function - Youre doing this one Austin
let pokeDiv = document.ElementById("pokename");
let getPokeName = function() {
    pokeDiv.classList.add("font-bold", "text-xl", "mb-2");
    pokeDiv.innerHTML = 'Name: <p id="pokename"></p>';
};
//append html to display name
pokeDiv.append(getPokeName);
//End of Austin work
//Austin note
    /*
    var hours = [“09”, “10", “11”, “12", “13”, “14", “15”, “16", “17”];
    // for each of the hours listed above
    // creates a div with classes and inner html generated for each hour
    // template literals ${hour} apply to each row
    
    let containerEl = document.ElementById("pokename")
    hours.forEach(function (hour) {
      
    var pokeDiv = document.createElement(“div”);
    let getPokeName = function() {
        pokeDiv.classList.add(“font-bold”, “text-xl”, "mb-2");
        pokeDiv.innerHTML = `Name: <p id="pokename"></p>'
    }
      <textarea class=“col-md-10 description ${timeColor(hour)}“>${
        localStorage.getItem(hour) || “”
      
      
      </textarea>
      <button data-hour=“${hour}” class=“btn saveBtn col-md-1” onclick=“saveText(this)“>
        <i class=“fas fa-save”></i>
      </button>`;
      // appends to container
      pokeDiv.append(getPokeName);
    }); 
    */
//End Austin note
// Fetch Abilities Function 

var apiStats = "https://pokeapi.co/"
// Global Variables
var pokeListItems = document.querySelectorAll('.list-item');
var pokeTypeOne = document.querySelector('.poke-type-one');
var pokeTypeTwo = document.querySelector('.poke-type-two');

// Grab pokemon by name Fetch Name Function -- Jem
var fetchPokeData = function(pokeName) {
    var pokeName = "https://pokeapi.co/api/v2/pokemon/pikachu"
    fetch(
            pokeName
        )
        .then(function(pokeDataresponse) {
            return pokeDataresponse.json();
        })
        .then(function(pokeDataresponse) {
            console.log(pokeDataresponse)
            resetScreen();

            var dataTypes = data['types'];
            var dataFirstType = dataTypes[0];
            var dataSecondType = dataTypes[1];
            pokeTypeOne.textContent = capitalize(dataFirstType['type']['name']['abilities']);
            if (dataSecondType) {
                pokeTypeTwo.classList.remove('hide');
                pokeTypeTwo.textContent = capitalize(dataSecondType['type']['name']['abilities']);
            } else {
                pokeTypeTwo.classList.add('hide');
                pokeTypeTwo.textContent = '';
            }
            mainScreen.classList.add(dataFirstType['type']['name']);

            pokeName.textContent = capitalize(data['name']);
            pokeId.textContent = '#' + data['id'].toString().padStart(3, '0');
            pokeWeight.textContent = data['weight'];
            pokeHeight.textContent = data['height'];
            pokeFrontImage.src = data['sprites']['front_default'] || '';
            pokeBackImage.src = data['sprites']['back_default'] || '';
        });
};


// Display Name Function -- Jem


// Fetch Abilities Function -- Jem

var apiStats = "https://pokeapi.co/api/v2/pokemon/25"
main
fetch(
        apiStats
    )
    .then(function(statsResponse) {
        return statsResponse.json();
    });


// Display Abilities function -- Jem

var abilitiesList = document.getElementById("abilities");
var moves = ["Static", "Lightning Rod"];
// for each of the moves listed above
// creates a div with classes and inner html generated for each move
// template literals ${move} apply to each row
moves.forEach(function (move) {
  var moveListEl = document.createElement("li");
  //   moveListEl.classList.add("text-gray-l");
  moveListEl.innerHTML = `${move}`;
  // appends to container
  abilitiesList.append(moveListEl);
  console.log(this);
});

// Event listener for Generate, Save, Delete -- TBD

<button id="rounded-md shadow">Generate</button>
document.getElementById("mybtn").addEventListener("click", function() {
    
})

element.addEventListener("click", buttonClickhandler);
function buttonClickhandler(event) {
    console.log('Button Clicked');
}
const btn= document.querySelector('.btn');
btn.addEventListener('click', buttonClickhandler);


// var formSubmitHandler = function(event) {
//     event.preventDefault();
//     // get city name value from input element
//     var cityname = cityNameInputEl.value.trim();

//     // Set city name in local storage and generate search history
//     if (cityname) {
//         searchHistoryArray.push(cityname);
//         localStorage.setItem("weatherSearch", JSON.stringify(searchHistoryArray));
//         var searchHistoryEl = document.createElement('button');
//         searchHistoryEl.className = "btn";
//         searchHistoryEl.setAttribute("data-city", cityname)
//         searchHistoryEl.innerHTML = cityname;
//         historyButtonsEl.appendChild(searchHistoryEl);
//         historyCardEl.removeAttribute("style")
//         getWeatherInfo(cityname);
//         cityNameInputEl.value = "";
//     } else {
//         alert("Please enter a City name");
//     }

// }

// Function to grab local image (for now)

// Look in assets folder append to child probably div and create the img

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
