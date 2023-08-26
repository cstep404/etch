const mainContainerSelector = document.querySelector('#main-container');

// create the element, manipulate the element, and then place it on page by appending

for (i = 1; i <= 16; i++) {
    const rowCreator = document.createElement('div');
    rowCreator.className = 'row';
    rowCreator.id = `row${i}`;
    mainContainerSelector.appendChild(rowCreator);

    for (j = 1; j <= 16; j++) {
        const divCreator = document.createElement('div');
        divCreator.textContent = 'div';
        divCreator.className = 'box';
        rowCreator.appendChild(divCreator);
    }
    
}