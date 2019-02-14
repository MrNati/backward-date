"use strict";

// Get date 24hrs back e.g 14/02/19 becomes 13/02/19.

function setDate() {
    // create DOM element
    let createH1 = document.createElement("h1");

    // assign attribute to DOM element
    createH1.setAttribute("id", "demo");

    // assign DOM element to the DOM body
    document.body.appendChild(createH1);

    // create new backward date
    let day = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
        // simplify date format
        day = day.toDateString();

    // assign day variable to the element created early
    document.getElementById("demo").innerHTML = `${day}`;
}
// call function
setDate();