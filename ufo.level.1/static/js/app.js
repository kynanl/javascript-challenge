// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo sightings data from data.js
console.log(tableData);

// //Loop Through `data` and console.log each weather report object
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
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select(".form-control");

// Create event handlers 
button.on("click", runEnter);
form.on("event", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var valueProperty = inputElement.property("value");
    // Use the form input to filter the data by date
    console.log(inputElement);
    console.log(tableData);

    var final = tableData.filter(person => person.datetime == valueProperty);
    var table = d3.select("tbody");

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
