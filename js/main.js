"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<div>' + coffee.name + '</div>';
    html += '<div class="text-left">' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}

// function renderCoffee(coffee) {
//     var expectedResponse = coffees.preloadResponse("coffees");
//     var html = '<textarea class ="coffee">';
//     html += '<p>'+ coffee.roast + '</p>';
//     html += '<p>'+ coffee.name + '</p>';
//     html += '<textarea>' + coffee.id + '</textarea>';
//     html += '</textarea>';
//
//     return html;
// }




function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
// var coffeeOrder = function () {
//     document.getElementById("coffees");
//     coffeeOrder.innerHTML = coffees.reverse();
// }
var input = document.querySelector("input");
var log = document.getElementById("coffees");
input.addEventListener("input", updateCoffeeOrder);
function coffeeOrder(coffees) {
    var html2 = "";
    for (var i = 1; i <= coffees.length; ++i) {
        html2 += coffeeOrder(coffees[i]);
    }
    return html2;
}

function updateCoffeeOrder(e) {
    e.preventDefault();
    var textInput = updateCoffees
    var searchInput = [];
    coffees.forEach(function (coffee) {
        if (textInput === updateCoffees) {
            searchInput.push(coffee)
        }
        log.textContent = e.target.value;
    });
     coffeeOrder(searchInput);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];




var tbody = document.querySelector('#coffees');



var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
