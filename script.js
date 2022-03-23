// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
const table = document.querySelector('table');

// Add a row
function addR() {
    const newRow = document.createElement('tr');
    if(numRows === 0) {
        const newCell = document.createElement('td');
        newRow.appendChild(newCell);
        numRows++;
        numCols++;
    } else {
        for(let i = 0; i < numCols; i++) {
            const newCell = document.createElement('td');
            newRow.appendChild(newCell);
            numRows++;
            console.log(numRows);
        }
    }
    table.appendChild(newRow);
}

// Add a column
function addC() {
    if(numRows === 0) {
        const newRow = document.createElement('tr');
        const newCell = document.createElement('td');
        newRow.appendChild(newCell);
        numRows++;
        numCols++;
        table.appendChild(newRow);
    } else {
        const allRows = document.querySelectorAll('tr');
        allRows.forEach((row) => {
            const newCell = document.createElement('td');
            row.appendChild(newCell);
        })
        numCols++;
    }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}