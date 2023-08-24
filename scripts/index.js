const mainContainerSelector = document.querySelector('#main-container');

// create the element, manipulate the element, and then place it on page by appending

for (let i = 1; i <= 16; i++) {
    const squareCreator = document.createElement('div');
    squareCreator.textContent = `Box ${i}`
    squareCreator.style.border = '2px solid black';
    mainContainerSelector.appendChild(squareCreator);
}