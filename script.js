const container = document.querySelector('.container');



/**
 * Makes a grid.
 * @param {number} size The number of squares per row / column.
 * Note this number is squared to generate the grid.
 */
function makeGrid(size) {
  let squareLength = 960 / size;
  // goes to size^2
  for (let square = 0; square < (size * size); square++) {
    const div = document.createElement('div');
    div.style.height = `${squareLength}px`;
    div.style.width = `${squareLength}px`;
    div.classList.add('square');
    div.addEventListener('mousemove', (event) => {
      if (event.buttons > 0) {
        div.style.backgroundColor = 'black';
      }
    });
    container.appendChild(div);
  }
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