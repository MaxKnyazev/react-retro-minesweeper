// const widthGameField = 10;
// const heightGameField = 10;
// const quantityMines = 20;

// let gameField = [];

export const createGameField = (w, h) => {
  let field = [];
  for (let i = 0; i < w; i++) {
    field[i] = [];
  }

  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      field[i][j] = -1;
    }
  }
  return field;
}

// const printGameField = (field, w, h) => {
//   let s = ``;
//   for (let i = 0; i < w; i++) {
//     for (let j = 0; j < h; j++) {
//       s += `${field[i][j]}  `;
//     }
//     console.log(s)
//     s = '';
//   }
// }

const randomInteger = (min, max) => {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// const fillGameFieldWithMines = (field, w, h, quantity) => {
//   let x, y, countMine = 0;
//   while (countMine < quantity) {
//     x = randomInteger(0, w - 1);
//     y = randomInteger(0, h - 1);
//     if(field[x][y] === 0) {
//       field[x][y] = 9;
//       countMine += 1;
//     }
//   }
// }

export const fillGameFieldWithMines = (field, w, h, quantity, clickX, clickY) => {
  // let field = JSON.parse(JSON.stringify(gF));
  let mineX, mineY, countMine = 0;
  while (countMine < quantity) {
    mineX = randomInteger(0, w - 1);
    mineY = randomInteger(0, h - 1);
    if(field[mineX][mineY] === -1) {
      if ((Math.abs(clickX - mineX) > 1)||(Math.abs(clickY - mineY) > 1)) {
        field[mineX][mineY] = 9;
        countMine += 1;
      }
    }
  }
  return field;
}

export const checkMinesAroundElement = (field, x, y, w, h) => {
  let countMinesAroundElement = 0;
  if ((x-1 >= 0)&&(y-1 >= 0)) { 
    if (field[x-1][y-1] === 9) { 
      countMinesAroundElement += 1; 
    } 
  }

  if (y-1 >= 0) {
    if (field[x][y-1] === 9) {
      countMinesAroundElement += 1; 
    }
  }

  if ((x+1 < w)&&(y-1 >= 0)) {
    if (field[x+1][y-1] === 9) {
      countMinesAroundElement += 1;
    }
  }

  if (x-1 >= 0) {
    if (field[x-1][y] === 9) {
      countMinesAroundElement += 1;
    }
  }

  if (x+1 < w) {
    if (field[x+1][y] === 9) {
      countMinesAroundElement += 1;
    }
  }

  if ((x-1 >= 0)&&(y+1 < h)) {
    if (field[x-1][y+1] === 9) {
      countMinesAroundElement += 1;
    }
  }
  
  if (y+1 < h) {
    if (field[x][y+1] === 9) {
      countMinesAroundElement += 1;
    }
  }
  
  if ((x+1 < w)&&(y+1 < h)) {
    if (field[x+1][y+1] === 9) {
      countMinesAroundElement += 1;
    }
  }

  return countMinesAroundElement;
}

// const fillGameFieldWithNumbers = (field, w, h) => {
//   for (let i = 0; i < w; i++) {
//     for (let j = 0; j < h; j++) {
//       if (field[i][j] === -1) {
//         field[i][j] = checkMinesAroundElement(field, i, j, w, h)
//       }
//     }
//   }
// }

const convertStringToArray = (s = '', char) => {
  return s.split(char).map(elem => +elem);
}

export const renderEmptyElement = (field, w, h, x, y) => {
  let setOneStep = new Set();
  field[x][y] = 0;
  setOneStep.add(`${x}:${y}`);

  for (let item of setOneStep) {
    [x, y] = convertStringToArray(item, ':');
    // console.log(`${x}, ${y}`) 

    if ((x-1 >= 0)&&(y-1 >= 0)) {
      field[x-1][y-1] = checkMinesAroundElement(field, x-1, y-1, w, h);
      if (field[x-1][y-1] === 0) {
        setOneStep.add(`${x-1}:${y-1}`);
      }
    }
  
    if (y-1 >= 0) {
      field[x][y-1] = checkMinesAroundElement(field, x, y-1, w, h);
      if (field[x][y-1] === 0) {
        setOneStep.add(`${x}:${y-1}`);
      }
    }
  
    if ((x+1 < w)&&(y-1 >= 0)) {
      field[x+1][y-1] = checkMinesAroundElement(field, x+1, y-1, w, h);
      if (field[x+1][y-1] === 0) {
        setOneStep.add(`${x+1}:${y-1}`);
      }
    }
  
    if (x-1 >= 0) {
      field[x-1][y] = checkMinesAroundElement(field, x-1, y, w, h);
      if (field[x-1][y] === 0) {
        setOneStep.add(`${x-1}:${y}`);
      }
    }
  
    if (x+1 < w) {
      field[x+1][y] = checkMinesAroundElement(field, x+1, y, w, h);
      if (field[x+1][y] === 0) {
        setOneStep.add(`${x+1}:${y}`);
      } 
    }
  
    if ((x-1 >= 0)&&(y+1 < h)) {
      field[x-1][y+1] = checkMinesAroundElement(field, x-1, y+1, w, h);
      if (field[x-1][y+1] === 0) {
        setOneStep.add(`${x-1}:${y+1}`);
      } 
    }
    
    if (y+1 < h) {
      field[x][y+1] = checkMinesAroundElement(field, x, y+1, w, h);
      if (field[x][y+1] === 0) {
        setOneStep.add(`${x}:${y+1}`);
      }
    }
    
    if ((x+1 < w)&&(y+1 < h)) {
      field[x+1][y+1] = checkMinesAroundElement(field, x+1, y+1, w, h);
      if (field[x+1][y+1] === 0) {
        setOneStep.add(`${x+1}:${y+1}`);
      }
    }

    // console.log(`${x}, ${y}`);
    // console.log(setOneStep);
  }

  return field;
}

export const gameOverDefeat = (field, w, h) => {
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (field[i][j] === -1) {
        field[i][j] = checkMinesAroundElement(field, i, j, w, h)
      }

      // if (field[i][j] === 9) {

      // }
    }
  }
}

export const isItVictory = (field, w, h) => {
  let countEmptyElements = 0;
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (field[i][j] === -1) {
        countEmptyElements += 1;
      }
    }
  }
  return !countEmptyElements;
}

// const compareGameFieldWithTestField = (field, testField, w, h) => {
//   for (let i = 0; i < w; i++) {
//     for (let j = 0; j < h; j++) {
//       if (field[i][j] !== testField[i][j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }



// createGameField(gameField, widthGameField, heightGameField);
// fillGameFieldWithMines(gameField, widthGameField, heightGameField, quantityMines, 2, 2);
// fillGameFieldWithNumbers(gameField, widthGameField, heightGameField);
// printGameField(gameField, widthGameField, heightGameField);

// gameField = [
//   [9, 1, 0, 1, 9],
//   [1, 1, 0, 1, 1],
//   [0, 0, 0, 0, 0],
//   [1, 1, 0, 1, 1],
//   [9, 1, 0, 1, 9]
// ];
// console.log(gameField[2][0])
// renderEmptyElement(gameField, 2, 2, widthGameField, heightGameField);
// printGameField(gameField, widthGameField, heightGameField);

// renderEmptyElement(gameField, 1, 2, widthGameField, heightGameField);
// printGameField(gameField, widthGameField, heightGameField);