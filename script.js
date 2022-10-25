let currentSize = 32;
let penColor = 'black';

const container = document.querySelector('.container');

const blackButton = document.querySelector('#black-button');
blackButton.onclick = () => penColor = 'black';

const rainbowButton = document.querySelector('#rainbow-button');
rainbowButton.onclick = () => penColor = 'rainbow';

const eraserButton = document.querySelector('#eraser-button');
eraserButton.onclick = () => penColor = 'white';

const resetButton = document.querySelector('#reset-button');
resetButton.onclick = () => {
  clearGrid();
  return makeGrid(currentSize);
}

const smallButton = document.querySelector('#small-button');
smallButton.onclick = () => {
  clearGrid();
  return makeGrid(16);
}

const mediumButton = document.querySelector('#medium-button');
mediumButton.onclick = () => {
  clearGrid();
  return makeGrid(32);
}

const largeButton = document.querySelector('#large-button');
largeButton.onclick = () => {
  clearGrid();
  return makeGrid(64);
}

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

function makeGrid(size) {
  currentSize = size;
  let squareLength = 960 / size;
  for (let square = 0; square < (size * size); square++) {
    const div = document.createElement('div');
    div.style.height = `${squareLength}px`;
    div.style.width = `${squareLength}px`;
    div.classList.add('square');
    div.id = square;
    div.addEventListener('mouseover', (event) => {
      if (event.buttons > 0) {
        draw(div, event);
      }
    });
    div.addEventListener('mousedown', (event) => {
      draw(div, event);
    });
    div.ondragstart = () => {
      return false;
    }
    container.appendChild(div);
  }
}

function draw(div, event, color = setPenColor()) {
  div.style.backgroundColor = color;
}

function clearGrid() {
  container.querySelectorAll('div').forEach(div => {
    div.removeEventListener('mousedown', (event) => draw(div, event));
  });
  container.innerHTML = '';
}

makeGrid(currentSize);