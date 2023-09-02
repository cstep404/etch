const resetBtnSelector = document.querySelector('#reset-btn');
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
            console.log('Please enter a valid number between 16 and 100');
        }
    }
);