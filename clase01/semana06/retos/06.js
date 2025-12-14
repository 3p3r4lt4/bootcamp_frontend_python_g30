// Santa 🎅 quiere saber cuál es la primera letra no repetida en el nombre de un juguete 🎁.

// Escribe una función que reciba un string y devuelva la primera letra que no se repite, ignorando mayúsculas y minúsculas al contar, pero devolviendo la letra tal como aparece en el string.

// Si no hay ninguna, devuelve una cadena vacía ("").

// Ejemplos:

findUniqueToy('Gift') // 'G'
// ℹ️ La G es la primera letra que no se repite
// y la devolvemos tal y como aparece

findUniqueToy('sS') // ''
// ℹ️ Las letras se repiten, ya que no diferencia mayúsculas

findUniqueToy('reindeeR') // 'i'
// ℹ️ La r se repite (aunque sea en mayúscula)
// y la e también, así que la primera es la 'i'

// Más casos:
findUniqueToy('AaBbCc') // ''
findUniqueToy('abcDEF') // 'a'
findUniqueToy('aAaAaAF') // 'F'
findUniqueToy('sTreSS') // 'T'
findUniqueToy('z') // 'z'


function findUniqueToy(toy) {
  if (toy.length === 0) return '';
  
  // Contar ocurrencias ignorando mayúsculas/minúsculas
  const counts = new Map();
  
  // Primera pasada: contar
  for (let i = 0; i < toy.length; i++) {
    const lowerChar = toy[i].toLowerCase();
    counts.set(lowerChar, (counts.get(lowerChar) || 0) + 1);
  }
  
  // Segunda pasada: encontrar el primero con conteo = 1
  for (let i = 0; i < toy.length; i++) {
    const lowerChar = toy[i].toLowerCase();
    if (counts.get(lowerChar) === 1) {
      return toy[i]; // Devolver tal como aparece
    }
  }
  
  return '';
}

console.log(findUniqueToy('Gift'));      // 'G'
console.log(findUniqueToy('sS'));        // ''
console.log(findUniqueToy('reindeeR'));  // 'i'
console.log(findUniqueToy('AaBbCc'));    // ''
console.log(findUniqueToy('abcDEF'));    // 'a'
console.log(findUniqueToy('aAaAaAF'));   // 'F'
console.log(findUniqueToy('sTreSS'));    // 'T'
console.log(findUniqueToy('z'));         // 'z'