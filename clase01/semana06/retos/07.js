// Los elfos han construido un reno 🦌 robot aspirador (@) para limpiar un poco el taller de cara a las navidades.

// El reno se mueve sobre un tablero para recoger cosas del suelo (*) y debe evitar obstáculos (#).

// Recibirás dos parámetros:

// board: un string que representa el tablero.
// moves: un string con los movimientos: 'L' (izquierda), 'R' (derecha), 'U' (arriba), 'D' (abajo).
// Reglas del movimiento:

// Si el reno recoge algo del suelo (*) durante los movimientos → devuelve 'success'.
// Si el reno se sale del tablero o choca contra un obstáculo (#) → devuelve 'crash'.
// Si el reno no recoge nada ni se estrella → devuelve 'fail'.
// Ten en cuenta que si el reno recoge algo del suelo, ya es 'success', indepentientemente de si en movimientos posteriores se chocase con un obstáculo o saliese del tabler.

// Importante: Ten en cuenta que en el board la primera y última línea están en blanco y deben descartarse.

// Ejemplo:

const board = `
.....
.*#.*
.@...
.....
`

moveReno(board, 'D')
// ➞ 'fail' -> se mueve pero no recoge nada

moveReno(board, 'U')
// ➞ 'success' -> recoge algo (*) justo encima

moveReno(board, 'RU')
// ➞ 'crash' -> choca contra un obstáculo (#)

moveReno(board, 'RRRUU')
// ➞ 'success' -> recoge algo (*)

moveReno(board, 'DD')
// ➞ 'crash' -> se choca con la parte de abajo del tablero

moveReno(board, 'UUU')
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

moveReno(board, 'RR')
// ➞ 'fail' -> se mueve pero no recoge nada

/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  // 1. Preparar el tablero
  const lines = board.trim().split('\n');
  
  // Si hay líneas en blanco al principio/final del string, las quitamos
  // según el enunciado, la primera y última línea están en blanco y deben descartarse
  // Pero trim() ya quita espacios al inicio y fin, así que usamos filter
  const grid = lines.map(line => line.split(''));
  
  // 2. Encontrar posición inicial del reno
  let row, col;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '@') {
        row = i;
        col = j;
        break;
      }
    }
  }
  
  // Variables para tracking
  let hasCollected = false;
  
  // 3. Ejecutar movimientos
  for (const move of moves) {
    // Calcular nueva posición
    let newRow = row;
    let newCol = col;
    
    switch (move) {
      case 'L': newCol--; break;
      case 'R': newCol++; break;
      case 'U': newRow--; break;
      case 'D': newRow++; break;
    }
    
    // Verificar si está fuera del tablero
    if (newRow < 0 || newRow >= grid.length || 
        newCol < 0 || newCol >= grid[0].length) {
      // IMPORTANTE: Si ya recogió algo, es success aunque se salga
      return hasCollected ? 'success' : 'crash';
    }
    
    // Verificar si choca con obstáculo
    if (grid[newRow][newCol] === '#') {
      return hasCollected ? 'success' : 'crash';
    }
    
    // Verificar si recoge algo
    if (grid[newRow][newCol] === '*') {
      hasCollected = true;
      // Recoger: marcamos como vacío
      grid[newRow][newCol] = '.';
    }
    
    // Actualizar posición
    row = newRow;
    col = newCol;
  }
  
  // 4. Resultado final
  return hasCollected ? 'success' : 'fail';
}

// Prueba todos los casos del ejemplo
console.log("D ->", moveReno(board, 'D'));        // fail
console.log("U ->", moveReno(board, 'U'));        // success
console.log("RU ->", moveReno(board, 'RU'));      // crash
console.log("RRRUU ->", moveReno(board, 'RRRUU'));// success
console.log("DD ->", moveReno(board, 'DD'));      // crash
console.log("UUU ->", moveReno(board, 'UUU'));    // success
console.log("RR ->", moveReno(board, 'RR'));      // fail