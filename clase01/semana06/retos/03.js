// En el taller de Santa hay un elfo becario que está aprendiendo a envolver regalos 🎁.

// Le han pedido que envuelva cajas usando solo texto… y lo hace más o menos bien.

// Le pasan dos parámetros:

// size: el tamaño del regalo cuadrado
// symbol: el carácter que el elfo usa para hacer el borde (cuando no se equivoca 😅)
// El regalo debe cumplir:

// Debe ser un cuadrado de size x size.
// El interior siempre está vacío (lleno de espacios), porque el elfo "aún no sabe dibujar el relleno".
// Si size < 2, devuelve una cadena vacía: el elfo lo intentó, pero se le perdió el regalo.
// El resultado final debe ser un string con saltos de línea \n.
// Sí, es un reto fácil… pero no queremos que despidan al becario. ¿Verdad?

// 🧩 Ejemplos

const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
console.log(g4)
// ""  pobre becario…

/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
    // Caso especial: si size < 2, devolvemos string vacío
    if (size < 2) {
        return '';
    }
    
    // Array para almacenar las líneas del regalo
    const lines = [];
    
    // 1. Primera línea: tamaño completo de símbolos
    const topLine = symbol.repeat(size);
    lines.push(topLine);
    
    // 2. Líneas del medio (si hay más de 2)
    if (size > 2) {
        // Para cada línea intermedia
        for (let i = 0; i < size - 2; i++) {
            // Construir la línea: símbolo + espacios + símbolo
            const middleLine = symbol + ' '.repeat(size - 2) + symbol;
            lines.push(middleLine);
        }
    }
    
    // 3. Última línea: igual que la primera
    if (size > 1) {
        lines.push(symbol.repeat(size));
    }
    
    // Unir todas las líneas con saltos de línea
    return lines.join('\n');
}