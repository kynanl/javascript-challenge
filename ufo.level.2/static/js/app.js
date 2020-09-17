// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo sightings data from data.js
console.log(tableData);

// //Loop Through `data` and console.log each sighting and append html tags
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

var form = d3.selectAll(".filter").on("change", runEnter);
// Create event handlers 
button.on("click", runEnter);
//form.on("change", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElementDate = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");
    // Get the value property of the input element
    filters = {
        datetime: d3.select("#datetime").property("value"),
        city: d3.select("#city").property("value"),
        state: d3.select("#state").property("value"),
        country: d3.select("#country").property("value"),
        shape: d3.select("#shape").property("value")
    }
    var final = tableData.map(x => x)
    Object.entries(filters).map(([key, value]) => {
        if (value.length > 0) {
            final = final.filter(row => row[key] === value)
        }
    })


    // if (inputElementDate.property("value").length > 0) {
    //    var valuePropertyDate = inputElementDate.property("value")
    
    // };

    // if (inputElementCity.property("value").length > 0) {
    //     var valuePropertyCity = inputElementCity.property("value")};
    // if (inputElementState.property("value").length > 0) {
    //         var valuePropertyState = inputElementState.property("value")};
    // if (inputElementCountry.property("value").length > 0) {
    //             var valuePropertyCountry = inputElementCountry.property("value")};
    // if (inputElementShape.property("value").length > 0) {
//     var valuePropertyShape = inputElementShape.property("value")
// };
// Use the form input to filter the data by date
// console.log(valuePropertyDate);
// console.log(valuePropertyCity);
// console.log(valuePropertyState)
// console.log(valuePropertyCountry)
// console.log(valuePropertyShape)
// console.log(tableData);

// var filters = [{datetime: ["valuePropertyDate"], city: ["valuePropertyCity"], state: ["valuePropertyState"], 
// country: ["valuePropertyCountry"], shape: ["valuePropertyShape"]}];

// var final = tableData.filter(filters);

// var final = tableData.filter(person => person.datetime == valuePropertyDate || person.city == valuePropertyCity
// || person.state == valuePropertyState || person.country == valuePropertyCountry || person.shape == valuePropertyShape);

// var final = tableData.filter(person => person.datetime == valuePropertyDate && person.city == valuePropertyCity
//     && person.state == valuePropertyState && person.country == valuePropertyCountry && person.shape == valuePropertyShape);


//     console.log(final)

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
