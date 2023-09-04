const btnDivSelector = document.querySelector('#btn-div');
const resetBtnSelector = document.querySelector('#reset-btn');
const mainContainerSelector = document.querySelector('#main-container');
const gridLogSelector = document.querySelector('#grid-log');

const gridLog = document.createElement('h3');

let gridSize = 16;

const generateGrid = (size) => {
    for (i = 1; i <= size; i++) {
        const rowCreator = document.createElement('div');
        rowCreator.className = 'row';
        rowCreator.id = `row${i}`;
        mainContainerSelector.appendChild(rowCreator);
    
        for (j = 1; j <= gridSize; j++) {
            const divCreator = document.createElement('div');
            divCreator.textContent = 'div';
            divCreator.className = 'box';
            rowCreator.appendChild(divCreator);
        }
        
    }
}

generateGrid(gridSize);

const rowSelector = document.querySelectorAll('.box');

// create a hover effect that leaves a trail based on where the mouse goes

rowSelector.forEach((row) => {
    row.addEventListener(
        'mouseover',
        (e) => {
            // highlight the mouseenter target
            e.target.style.backgroundColor = 'lightgreen';
        }
    )
});

resetBtnSelector.addEventListener(
    "click",
    (e) => {
        console.log('Reset button was clicked!');
        const confirmReset = prompt('Enter a number between 16 and 100: ');
        // verify a number between 16 and 100
        if ((Number(confirmReset) < 16) || (Number(confirmReset) > 100)) {
            console.log('Please enter a valid number between 16 and 100.');
            gridLog.textContent = `${Number(confirmReset)} is not a valid option. Please enter a valid number between 16 and 100`;
            gridLogSelector.appendChild(gridLog);
        } else {
            gridLog.textContent = `Setting grid size to: ${Number(confirmReset)}`;
            gridLogSelector.appendChild(gridLog);
            gridSize = Number(confirmReset);
            generateGrid(gridSize);
        }
    }
);

// create the element, manipulate the element, and then place it on page by appending