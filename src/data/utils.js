const widthGameField = 10;
const heightGameField = 10;
const quantityBombs = 20;

let gameField = [];

const createGameField = (field, w, h) => {
  for (let i = 0; i < w; i++) {
    field[i] = [];
  }

  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      field[i][j] = '-';
    }
  }
}

const printGameField = (field, w, h) => {
  let s = ``;
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      s += `${field[i][j]}  `;
    }
    console.log(s)
    s = '';
  }
}

const randomInteger = (min, max) => {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// const fillGameFieldWithBombs = (field, w, h, quantity) => {
//   let x, y, countBomb = 0;
//   while (countBomb < quantity) {
//     x = randomInteger(0, w - 1);
//     y = randomInteger(0, h - 1);
//     if(field[x][y] === 0) {
//       field[x][y] = 9;
//       countBomb += 1;
//     }
//   }
// }

const fillGameFieldWithBombs = (field, w, h, quantity, clickX, clickY) => {
  let bombX, bombY, countBomb = 0;
  while (countBomb < quantity) {
    bombX = randomInteger(0, w - 1);
    bombY = randomInteger(0, h - 1);
    if(field[bombX][bombY] === '-') {
      if ((Math.abs(clickX - bombX) > 1)||(Math.abs(clickY - bombY) > 1)) {
        field[bombX][bombY] = 9;
        countBomb += 1;
      }
    }
  }
}

const checkBombsAroundElement = (field, x, y, w, h) => {
  let countBombsAroundElement = 0;
  if ((x-1 >= 0)&&(y-1 >= 0)) { 
    if (field[x-1][y-1] === 9) { 
      countBombsAroundElement += 1; 
    } 
  }

  if (y-1 >= 0) {
    if (field[x][y-1] === 9) {
      countBombsAroundElement += 1; 
    }
  }

  if ((x+1 < w)&&(y-1 >= 0)) {
    if (field[x+1][y-1] === 9) {
      countBombsAroundElement += 1;
    }
  }

  if (x-1 >= 0) {
    if (field[x-1][y] === 9) {
      countBombsAroundElement += 1;
    }
  }

  if (x+1 < w) {
    if (field[x+1][y] === 9) {
      countBombsAroundElement += 1;
    }
  }

  if ((x-1 >= 0)&&(y+1 < h)) {
    if (field[x-1][y+1] === 9) {
      countBombsAroundElement += 1;
    }
  }
  
  if (y+1 < h) {
    if (field[x][y+1] === 9) {
      countBombsAroundElement += 1;
    }
  }
  
  if ((x+1 < w)&&(y+1 < h)) {
    if (field[x+1][y+1] === 9) {
      countBombsAroundElement += 1;
    }
  }

  return countBombsAroundElement;
}

// const fillGameFieldWithNumbers = (field, w, h) => {
//   for (let i = 0; i < w; i++) {
//     for (let j = 0; j < h; j++) {
//       if (field[i][j] === '-') {
//         field[i][j] = checkBombsAroundElement(field, i, j, w, h)
//       }
//     }
//   }
// }

const convertStringToArray = (s = '', char) => {
  return s.split(char).map(elem => +elem);
}

const renderEmptyElement = (field, x, y, w, h) => {
  let setOneStep = new Set();
  field[x][y] = 0;
  setOneStep.add(`${x}:${y}`);

  for (let item of setOneStep) {
    [x, y] = convertStringToArray(item, ':');
    // console.log(`${x}, ${y}`) 

    if ((x-1 >= 0)&&(y-1 >= 0)) {
      field[x-1][y-1] = checkBombsAroundElement(field, x-1, y-1, w, h);
      if (field[x-1][y-1] === 0) {
        setOneStep.add(`${x-1}:${y-1}`);
      }
    }
  
    if (y-1 >= 0) {
      field[x][y-1] = checkBombsAroundElement(field, x, y-1, w, h);
      if (field[x][y-1] === 0) {
        setOneStep.add(`${x}:${y-1}`);
      }
    }
  
    if ((x+1 < w)&&(y-1 >= 0)) {
      field[x+1][y-1] = checkBombsAroundElement(field, x+1, y-1, w, h);
      if (field[x+1][y-1] === 0) {
        setOneStep.add(`${x+1}:${y-1}`);
      }
    }
  
    if (x-1 >= 0) {
      field[x-1][y] = checkBombsAroundElement(field, x-1, y, w, h);
      if (field[x-1][y] === 0) {
        setOneStep.add(`${x-1}:${y}`);
      }
    }
  
    if (x+1 < w) {
      field[x+1][y] = checkBombsAroundElement(field, x+1, y, w, h);
      if (field[x+1][y] === 0) {
        setOneStep.add(`${x+1}:${y}`);
      } 
    }
  
    if ((x-1 >= 0)&&(y+1 < h)) {
      field[x-1][y+1] = checkBombsAroundElement(field, x-1, y+1, w, h);
      if (field[x-1][y+1] === 0) {
        setOneStep.add(`${x-1}:${y+1}`);
      } 
    }
    
    if (y+1 < h) {
      field[x][y+1] = checkBombsAroundElement(field, x, y+1, w, h);
      if (field[x][y+1] === 0) {
        setOneStep.add(`${x}:${y+1}`);
      }
    }
    
    if ((x+1 < w)&&(y+1 < h)) {
      field[x+1][y+1] = checkBombsAroundElement(field, x+1, y+1, w, h);
      if (field[x+1][y+1] === 0) {
        setOneStep.add(`${x+1}:${y+1}`);
      }
    }

    // console.log(`${x}, ${y}`);
    // console.log(setOneStep);
  }

  console.log(setOneStep)
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



createGameField(gameField, widthGameField, heightGameField);
fillGameFieldWithBombs(gameField, widthGameField, heightGameField, quantityBombs, 2, 2);
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
renderEmptyElement(gameField, 2, 2, widthGameField, heightGameField);
printGameField(gameField, widthGameField, heightGameField);

// renderEmptyElement(gameField, 1, 2, widthGameField, heightGameField);
// printGameField(gameField, widthGameField, heightGameField);