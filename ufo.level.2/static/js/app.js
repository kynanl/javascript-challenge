// get ufo sighting data from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo sightings data from data.js
console.log(tableData);

// //Loop Through `data` and console.log each sighting and append html tags so in can be displayed index.html
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

// Select all form fields and add event handler on change 

var form = d3.selectAll(".filter").on("change", runEnter);
// Create event handler for filter button 
button.on("click", runEnter);


// Complete the event handler function for the forms so that 
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input elements and get the raw HTML node
    var inputElementDate = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");
    // Get the value property of the input elements as object
    filters = {
        datetime: d3.select("#datetime").property("value"),
        city: d3.select("#city").property("value"),
        state: d3.select("#state").property("value"),
        country: d3.select("#country").property("value"),
        shape: d3.select("#shape").property("value")
    }
    //filter data
    var final = tableData.map(x => x)
    Object.entries(filters).map(([key, value]) => {
        if (value.length > 0) {
            final = final.filter(row => row[key] === value)
        }
    })

    //create table variable 
    var table = d3.select("tbody");

    //clear table
    table.html("");

    //add filtered resutls to table

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
