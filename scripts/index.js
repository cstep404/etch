const mainContainerSelector = document.querySelector('#main-container');

// create the element, manipulate the element, and then place it on page by appending

// // create row 1
// const rowOne = document.createElement('div');
// rowOne.className = 'row';
// rowOne.id = 'row1';
// mainContainerSelector.appendChild(rowOne);

// // create divs in row
// for (i = 1; i <= 16; i++) {
//     const divCreator = document.createElement('div');
//     divCreator.textContent = 'div';
//     divCreator.className = 'box';
//     rowOne.appendChild(divCreator);
// }

// // create row 2
// const rowTwo = document.createElement('div');
// rowTwo.className = 'row';
// rowTwo.id = 'row2';
// mainContainerSelector.appendChild(rowTwo);

// // create divs in row
// for (i = 1; i <= 16; i++) {
//     const divCreator = document.createElement('div');
//     divCreator.textContent = 'div';
//     divCreator.className = 'box';
//     rowTwo.appendChild(divCreator);
// }

for (i = 1; i <= 16; i++) {
    const rowCreator = document.createElement('div');
    rowCreator.className = 'row';
    rowCreator.id = `row${i}`;
    mainContainerSelector.appendChild(rowCreator);

    for (j = 1; j <= 16; j++) {
        const divCreator = document.createElement('div');
        divCreator.textContent = 'div';
        divCreator.className = 'box';
        divCreator.id = `div${i}`;
        rowCreator.appendChild(divCreator);
    }
    
}