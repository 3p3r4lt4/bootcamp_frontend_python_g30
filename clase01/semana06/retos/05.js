// ¡Es hora de decorar el árbol de Navidad 🎄! Escribe una función que reciba:

// height → la altura del árbol (número de filas).
// ornament → el carácter del adorno (por ejemplo, "o" o "@").
// frequency → cada cuántas posiciones de asterisco aparece el adorno.
// El árbol se dibuja con asteriscos *, pero cada frequency posiciones, el asterisco se reemplaza por el adorno.

// El conteo de posiciones empieza en 1, desde la copa hasta la base, de izquierda a derecha. Si frequency es 2, los adornos aparecen en las posiciones 2, 4, 6, etc.

// El árbol debe estar centrado y tener un tronco # de una línea al final. Cuidado con los espacios en blanco, nunca hay al final de cada línea.

// 🧩 Ejemplos

drawTree(5, 'o', 2)
//     *
//    o*o
//   *o*o*
//  o*o*o*o
// *o*o*o*o*
//     #

drawTree(3, '@', 3)
//   *
//  *@*
// *@**@
//   #

drawTree(4, '+', 1)
//    +
//   +++
//  +++++
// +++++++
//    #





/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
  let result = [];
  let totalWidth = 2 * height - 1;
  let positionCounter = 1;

  for (let row = 1; row <= height; row++) {
    let rowLength = 2 * row - 1;
    let rowChars = [];

    for (let i = 1; i <= rowLength; i++) {
      if (positionCounter % frequency === 0) {
        rowChars.push(ornament);
      } else {
        rowChars.push('*');
      }
      positionCounter++;
    }

    let spaces = ' '.repeat((totalWidth - rowLength) / 2);
    result.push(spaces + rowChars.join(''));
  }

  // Trunk
  let trunkSpaces = ' '.repeat((totalWidth - 1) / 2);
  result.push(trunkSpaces + '#');

  return result.join('\n');
}

console.log(drawTree(5, 'o', 2));
console.log("---");
console.log(drawTree(3, '@', 3));