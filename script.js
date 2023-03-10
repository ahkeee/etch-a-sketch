const grid = document.querySelector('.gridContainer');
const userInput = document.getElementById('quantity');
const resetButton = document.querySelector('.reset');

function createGrid() {
    for(i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
}

function updateGrid() {
    grid.innerHTML = "";
    grid.style.setProperty(
      "grid-template-columns",
      `repeat(${userInput.value}, 2fr)`
    );
    grid.style.setProperty(
      "grid-template-rows",
      `repeat(${userInput.value}, 2fr)`
    );
    for (let i = 0; i < userInput.value * userInput.value; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        grid.appendChild(div);
    }
    console.log(userInput.value);
}

// const square = document.querySelector("div");
grid.addEventListener("mouseover", function(event) {
//   event.target.classList.replace("square", "color");
    event.target.style.backgroundColor = '#808080';

   
});




userInput.addEventListener('change', updateGrid);

resetButton.addEventListener('click', function() {
    grid.innerHTML = '';
    userInput.value = '';
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid();
});

createGrid();
