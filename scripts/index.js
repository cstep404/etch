// selectors
const btnDivSelector = document.querySelector('#btn-div');
const resetBtnSelector = document.querySelector('#reset-btn');
const mainContainerSelector = document.querySelector('#main-container');
const gridLogSelector = document.querySelector('#grid-log');

// create the gridlog which lets the user know the current grid size or if there is an error creating the grid
const gridLog = document.createElement('h3');

// set starting grid size to 16
let gridSize = 16;

// generate grids
const generateGrid = (size) => {
    for (i = 1; i <= size; i++) {
        const rowCreator = document.createElement('div');
        rowCreator.className = 'row';
        rowCreator.id = `row${i}`;
        mainContainerSelector.appendChild(rowCreator);
    
        for (j = 1; j <= size; j++) {
            const divCreator = document.createElement('div');
            divCreator.textContent = 'div';
            divCreator.className = 'box';
            rowCreator.appendChild(divCreator);
        }
        
    }
}

// generate the initial 16 size grid
generateGrid(gridSize);

// function to remove grid when reset button is clicked
const removeGrid = () => {
    mainContainerSelector.innerHTML = "";
}

// function to handle draw effect
const handleDraw = (e) => {
    if (e.target.classList.contains('box')) {
        e.target.style.backgroundColor = 'lightgreen';
    }
}

const draw = () => {
    mainContainerSelector.addEventListener('mouseover', handleDraw);
}

// call the initial draw function
draw();

// select the classes with the name box
const rowSelector = document.querySelectorAll('.box');

// when the reset button is clicked it asks the user to enter a number between 16 and 100 and generate a grid size based on that number. if the grid is less than 16 or greater than 100, it will throw an error and the grid will not be reset. if the grid size is valid, the existing grid will be removed and a new grid created
resetBtnSelector.addEventListener(
    "click",
    (e) => {
        console.log('Reset button was clicked!');
        const confirmReset = prompt('Enter a number between 16 and 100: ');
        // verify a number between 16 and 100
        if ((Number(confirmReset) < 16) || (Number(confirmReset) > 100)) {
            console.log('Please enter a valid number between 16 and 100.');
            gridLog.textContent = `${Number(confirmReset)} is not a valid option. Please enter a valid number between 16 and 100.`;
            gridLogSelector.appendChild(gridLog);
        } else {
            gridLog.textContent = `Setting grid size to: ${Number(confirmReset)}`;
            gridLogSelector.appendChild(gridLog);
            gridSize = Number(confirmReset);
            removeGrid();
            generateGrid(gridSize);
            draw();
        }
    }
);

// create the element, manipulate the element, and then place it on page by appending