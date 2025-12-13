// Los elfos han encontrado el código cifrado que protege la puerta del taller de Santa 🔐. El PIN tiene 4 dígitos, y está escondido dentro de bloques como estos:

// [1++][2-][3+][<]
// Escribe una función que descifre el PIN a partir del código.

// El código está formado por bloques entre corchetes [...] y cada bloque genera un dígito del PIN.

// Un bloque normal tiene la forma [nOP...], donde n es un número (0-9) y después puede haber una lista de operaciones (opcionales).

// Las operaciones se aplican en orden al número y son:

// + suma 1
// - resta 1
// El resultado siempre es un dígito (aritmética mod 10), por ejemplo 9 + 1 → 0 y 0 - 1 → 9.

// También existe el bloque especial [<], que repite el dígito del bloque anterior.

// Si al final hay menos de 4 dígitos, se debe devolver null.

// 🧩 Ejemplos

decodeSantaPin('[1++][2-][3+][<]')
// "3144"
console.log(decodeSantaPin('[1++][2-][3+][<]')); 

decodeSantaPin('[9+][0-][4][<]')
// "0944"
console.log(decodeSantaPin('[9+][0-][4][<]')); 

decodeSantaPin('[1+][2-]')
// null (solo 2 dígitos)
console.log(decodeSantaPin('[1+][2-]')); 


/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */

function decodeSantaPin(code) {
    // Extraer bloques usando match
    const blocks = code.match(/\[([^\]]+)\]/g);

    // Si no hay al menos 4 bloques, retornar null
    if (!blocks || blocks.length < 4) {
        return null;
    }

    const pinDigits = [];

    // Procesar cada bloque
    for (let i = 0; i < blocks.length && pinDigits.length < 4; i++) {
        // Quitar los corchetes
        const content = blocks[i].slice(1, -1);

        if (content === '<') {
            // Bloque especial: repetir dígito anterior
            if (i === 0) return null;
            pinDigits.push(pinDigits[pinDigits.length - 1]);
        } else {
            // Bloque normal: [nOP...]
            const firstChar = content[0];

            // Validar que el primer carácter sea dígito
            if (!/\d/.test(firstChar)) return null;

            let digit = parseInt(firstChar, 10);

            // Aplicar operaciones
            for (let j = 1; j < content.length; j++) {
                const op = content[j];
                if (op === '+') {
                    digit = (digit + 1) % 10;
                } else if (op === '-') {
                    digit = (digit - 1 + 10) % 10;
                } else {
                    return null; // Operación inválida
                }
            }

            pinDigits.push(digit);
        }
    }

    // Si no tenemos 4 dígitos, retornar null
    return pinDigits.length === 4 ? pinDigits.join('') : null;
}