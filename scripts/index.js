const mainContainerSelector = document.querySelector('#main-container');

// create the element, manipulate the element, and then place it on page by appending

// create 16 rows
for (let i = 1; i <= 16; i++) {
    const rowCreator = document.createElement('div');
    rowCreator.className = 'row';
    mainContainerSelector.appendChild(rowCreator);
}

const rowSelector = document.querySelector('.row');

// create 16 divs inside each row
for (let i = 1; i <= 16; i++) {
    const divCreator = document.createElement('div');
    divCreator.textContent = 'div';
    divCreator.className = 'box';
    rowSelector.appendChild(divCreator);
}