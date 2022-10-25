let currentSize = 32;
let penColor = 'black';

const container = document.querySelector('.container');

const blackButton = document.querySelector('#black-button');
blackButton.addEventListener('click', (event => {
  penColor = 'black';
}));

const rainbowButton = document.querySelector('#rainbow-button');
rainbowButton.addEventListener('click', (event => {
  penColor = 'rainbow';
}));

const eraserButton = document.querySelector('#eraser-button');
eraserButton.addEventListener('click', (event => {
  penColor = 'white';
}));

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', (event) => {
  clearGrid();
  return makeGrid(currentSize);
});

const smallButton = document.querySelector('#small-button');
smallButton.addEventListener('click', (event) => {
  clearGrid();
  return makeGrid(16);
});

const mediumButton = document.querySelector('#medium-button');
mediumButton.addEventListener('click', (event) => {
  clearGrid();
  return makeGrid(32);
});

const largeButton = document.querySelector('#large-button');
largeButton.addEventListener('click', (event) => {
  clearGrid();
  return makeGrid(64);
});

/**
 * 
 * @param {string} color The color to set the 'pen' the user will write on the etch a sketch with. Accepts either 'black' or 'rainbow'. Defaults to black.
 * @returns Either black or a random color from ROYGBIV.
 */
function setPenColor(color = penColor) {
  if (color == 'black') {
    return 'black';
  } else if (color == 'white') {
    return 'white';
  } else if (color == 'rainbow') {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }
}

/**
 * Makes a grid.
 * @param {number} size The number of squares per row / column.
 * Note this number is squared to generate the grid.
 */
function makeGrid(size) {
  currentSize = size;
  let squareLength = 960 / size;
  // goes to size^2
  for (let square = 0; square < (size * size); square++) {
    const div = document.createElement('div');
    div.style.height = `${squareLength}px`;
    div.style.width = `${squareLength}px`;
    div.classList.add('square');
    div.id = square;
    div.addEventListener('mousemove', (event) => draw(div, event));
    container.appendChild(div);
  }
}

function draw(div, event, color = setPenColor()) {
  if (event.buttons > 0) {
    div.style.backgroundColor = color;
  }
}

function clearGrid() {
  container.querySelectorAll('div').forEach(div => {
    div.removeEventListener('mousemove', (event) => draw(div, event));
  });
  container.innerHTML = '';
}


makeGrid(64);
/* 

- set squareLength var = to pixels per square
- use loop to make each square
- loop will iterate ${size} times
- at each iteration:
  - make a div
  - set div:
    - height
    - width
    - background color
    - display
  - append div to container
*/


/* 

Features:
  - buttons to change grid size
  - buttons to be in black / rainbow / eraser / clear

*/















/* 

- 

*/


// function makeGrid(size) {
//   const gridDivs = [];
//   for (let i = 0; i < size * size; i++) {
//       window[`box${i}`] = document.createElement('div');
//       window[`box${i}`].width = `${960/size}px`;
//       window[`box${i}`].height = `${960/size}px`;
//       window[`box${i}`].display = 'inline-block';
//       window[`box${i}`].backgroundColor = 'black';
//       window[`box${i}`].innerHTML = '&nbsp';
//       container.appendChild(window[`box${i}`]);
//       gridDivs.push(window[`box${i}`]);
//     }
// }

// container.style.height = `${5 * 100}px`;

// makeGrid(16);