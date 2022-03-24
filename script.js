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
        //set color to whatever is selected
        newCell.addEventListener('click', () => {
            newCell.style.backgroundColor = colorSelected;
        })
        newRow.appendChild(newCell);
        numRows++;
        numCols++;
    } else {
        for(let i = 0; i < numCols; i++) {
            const newCell = document.createElement('td');
            //set color to whatever is selected
            newCell.addEventListener('click', () => {
                newCell.style.backgroundColor = colorSelected;
            })
            newRow.appendChild(newCell);
        }
        numRows++;
    }
    table.appendChild(newRow);
}

// Add a column
function addC() {
    if(numRows === 0) {
        const newRow = document.createElement('tr');
        const newCell = document.createElement('td');
        //set color to whatever is selected
        newCell.addEventListener('click', () => {
            newCell.style.backgroundColor = colorSelected;
        })
        newRow.appendChild(newCell);
        numRows++;
        numCols++;
        table.appendChild(newRow);
    } else {
        const allRows = document.querySelectorAll('tr');
        allRows.forEach((row) => {
            const newCell = document.createElement('td');
            //set color to whatever is selected
            newCell.addEventListener('click', () => {
                newCell.style.backgroundColor = colorSelected;
            })
            row.appendChild(newCell);
        })
        numCols++;
    }
}

// Remove a row
function removeR() {
    if(numRows !== 0) {
        table.removeChild(table.lastChild);
        if(numRows === 1) {
            numCols = 0;
        }
        numRows--;
    }
}

// Remove a column
function removeC() {
    if(numCols !== 0) {
        const allRows = document.querySelectorAll('tr');
        allRows.forEach((row) => {
            row.removeChild(row.lastChild);
        })
        if(numCols === 1) {
            allRows.forEach((row) => {
                table.removeChild(row);
            })
            numRows = 0;
        }
        numCols--;
    }
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
    let numRows = document.getElementsByTagName("tr");
    for (let row of numRows) {
      for (let col of row.childNodes) {
        console.log(col);
        col.style.backgroundColor = colorSelected;
      }
    }
}

// Clear all cells
function clearAll(){
    let numRows = document.getElementsByTagName("tr");
    for (let row of numRows) {
      for (let col of row.childNodes) {
        col.style.backgroundColor = "white";
      }
    }
}