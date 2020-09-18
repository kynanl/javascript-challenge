// create variable for data from data.js
let tableData = data;


// Get a reference to the table body
let tbody = d3.select("tbody");

// Console.log the ufo sightings data from data.js
console.log(tableData);

// //Loop Through `data` and console.log each ufo sighting 
tableData.forEach(function (sighting) {
    console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function ([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });

});

// Select the button
let button = d3.select("#filter-btn");

//select form and add event handler on change 
let form = d3.selectAll(".filter").on("change", runEnter);
// Create event handlers for button
button.on("click", runEnter);


// Complete the event handler function for the form field 
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#datetime");
    // Get the value property of the input element
    let valueProperty = inputElement.property("value");
    // Use the form input to filter the data by date
    console.log(inputElement);
    console.log(tableData);

    let final = tableData.filter(person => person.datetime == valueProperty);
    let table = d3.select("tbody");

    table.html("");

    final.forEach(function (ufo) {
        console.log(ufo);
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function ([key, value]) {
                console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
        });
    });
};
