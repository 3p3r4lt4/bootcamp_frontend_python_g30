// FUNCIONES (Son bloques de código que podemos reutilizar)

// Declaración
function nombreDeLaFuncion() {
  // Cuerpo de la función y aquí va la lógica a ejecutar y las que vamos a reutlizar
  console.log('Hola soy una función')
  console.log('Soy un bloque de código')
}

// Ejecutar, estamos llamando a la función
nombreDeLaFuncion()
nombreDeLaFuncion()

// Funciones sin parámetros

function imprimirMiNombre() {
  console.log('¡Hola soy Victor!')
  console.log('Y soy fullstack')
}

imprimirMiNombre()

// Funciones con parámetros y valores por defecto

function imprimirUnNombre(nombre, nivel = 'el mejor') {
  // if (!nivel) { ❌
  //   nivel = 'el mejor'
  // }

  console.log('¡Hola soy ' + nombre + '!')
  console.log('Y soy ' + nivel)
}

imprimirUnNombre() // ¡Hola soy undefined! ❓
imprimirUnNombre('David', 'Fullstack') // ¡Hola soy David! Y soy Fullstack 😎
imprimirUnNombre('Diego') // ¡Hola soy Diego! Y soy el mejor 😎

// EJERCICIOS

// 1. Usando funciones determinar si la edad de una persona es mayor o menor de edad mostrando 'Mayor de edad' o 'Menor de edad.

function esMayorOMenorDeEdad(edad) {
  if (edad >= 18) { // si es true se ejecuta
    console.log('Mayor de edad')
  } else { // si es false se ejecuta
    console.log('Menor de edad')
  }
}

esMayorOMenorDeEdad(39) // Mayor de edad
esMayorOMenorDeEdad(8)  // Menor de edad
esMayorOMenorDeEdad(17)  // Menor de edad

// 2. Retornar true si un numero es primo sino devolver false
// Pista: un numero primo es divisible por sí mismo y por 1

// 7 -> 1 (2 3 4 5 6) 7

function esNumeroPrimo(numero) {
  if (numero <= 1) {
    return false
  }

  for (let posibleDivisor=2; posibleDivisor < numero; posibleDivisor++) {
    console.log('esNumeroPrimo', posibleDivisor)
    if (numero % posibleDivisor === 0) {
      return false
    }
  }

  return true
}

console.log(esNumeroPrimo(7)) // true
console.log(esNumeroPrimo(10)) // false
console.log(esNumeroPrimo(15)) // false

// FUNCIONES SIN RETORNO

function esMayorOMenorDeEdadSinRetorno(edad) {
  if (edad >= 18) { // si es true se ejecuta
    console.log('Mayor de edad')
  } else { // si es false se ejecuta
    console.log('Menor de edad')
  }

  // FUNCION QUE NO RETORNA NADA === undefined
}

esMayorOMenorDeEdadSinRetorno(39)

// FUNCIONES CON RETORNO

function esMayorOMenorDeEdadConRetorno(edad) {
  if (edad >= 18) { // si es true se ejecuta
    return 'Mayor de edad'
  } else { // si es false se ejecuta
    return 'Menor de edad'
  }
}

const resultado = esMayorOMenorDeEdadConRetorno(39)

console.log('RESULTADO:', resultado)

// MÉTODOS DE CADENAS

const welcome = ' Hola Javascript '

console.log(welcome)
console.log(welcome.length)
console.log(welcome.toUpperCase())
console.log(welcome.toLowerCase())
console.log(welcome.trim()) // Remueve los espacios en blanco al inicio y al final de la cadena

const avatar = 'Hola @me'

console.log(avatar)
console.log(avatar.concat('victorvzn')) // Hola @mevictorvzn
console.log(avatar.replace('me', 'victorvzn')) // Hola @victorvzn
console.log(avatar.slice(0, 5)) // Retorno una parte de la cadena tomando la posición/índice de inicio y final en los parámetros
console.log(welcome.indexOf('script')) // 10

// Split y join para cadenas

console.log('frutas'.split('')) // Convierte en un arreglo y separa cada letra de la cadena
console.log('frutas'.split('').join(','))
console.log('frutas'.split('').join(''))


// TIPOS DE DATOS NO PRIMITIVOS (ARRAYS, OBJECTS)

// ARRAYS

// Un arreglo va a contener elementos de cualquier tipo de dato: cadenas, números, booleans, null, undefined, funciones, arrays, objetos, etc.

// Declarar un arreglo
const arregloVacio = []
const arregloConNombres = ['Victor', 'Liliana', 'Marcial', 'Mariana']
const listaConValores = [1, 2, 3, 'Victor', 'Villazón', true, null, undefined, [6, 7, 8]]

const listaConFunciones = [
  function () {
    console.log('Hola función')
  },
  'edad',
  123
]

console.log(arregloVacio)
console.log(arregloConNombres)
console.log(listaConValores)
console.log(listaConFunciones)

// Lectura de los elementos de un arreglo

console.log(arregloConNombres[0]) // Victor
console.log(arregloConNombres[3]) // Mariana

console.log(listaConValores[0]) // 1
console.log(listaConValores[4]) // Villazón
console.log(listaConValores[5]) // true
console.log(listaConValores[100]) // undefined
console.log(listaConValores[8]) // (3) [6, 7, 8] -> Devolvio un arreglo
console.log(listaConValores[8][1]) // 7 -> Así accedemos a un elemento de un arreglo dentro de otro arreglo

console.log(listaConFunciones[0]) // Aquí devuelve la declaración de la función sin ejecutarla
console.log(listaConFunciones[0]()) // Estamos ejecutando la función que está en el índice 0 del arreglo

// ¿Cómo sabemos la longitud de un arreglo?

console.log(arregloConNombres.length) // 4 elemento
console.log(listaConValores.length) // 9 elementos

// Escritura en arreglos

console.log(listaConValores[0]) // 1
listaConValores[0] = 'Grethel'
listaConValores[4] = 'Juan'
console.log(listaConValores) // ['Grethel', ...]

// OPERACIONES SOBRE LOS ARREGLOS

// Insertar nuevos elementos al final del arreglo

arregloConNombres.push('Javascript')
arregloConNombres.push('CSS')

console.log(arregloConNombres)

// Remover elementos del final del arreglo

arregloConNombres.pop()

console.log(arregloConNombres)

// Insertar un elemento en una posición determinada

const arreglo = [...arregloConNombres] // Copia o Clone del arregloNombres

console.log(arreglo)
arreglo.splice(1, 0, 'HTML') // insertar en la posición 1, 0 elementos a eliminar, 'HTML' elemento a insertar
console.log(arreglo)
console.log(arregloConNombres) // Queda intacto

// Eliminar un elemento

console.log(arregloConNombres)
arregloConNombres.splice(2, 1) // Eliminar en la posición 2, 1 elemento
console.log(arregloConNombres)

// Otras funciones: slice (Investiguen)
const nuevoArreglo = arregloConNombres.slice(1, 4) // Crea un nuevo arreglo desde la posición 1 hasta la 4 (sin incluir el 4)
console.log(nuevoArreglo)
console.log(arregloConNombres) // Queda intacto

// EJERCICIOS

// EJERCICIO: Lista de Invitados

// Tienen un arreglo con los nombres de las personas invitadas a una fiesta.

// 01 - Declara el arreglo con 5 nombres.
let invitados = ["Ana", "Luis", "María", "Pedro", "Carla"];

// 02 - Muestra en consola todos los nombres.
console.log('Lista de Invitados',invitados);


// 03 - Agrega un nuevo invitado al final de la lista.
invitados.push("Jorge");
console.log('Después de agregar un invitado',invitados);
// 04 - Inserta un invitado al inicio de la lista.
invitados.unshift("Sofía");
console.log('Después de insertar un invitado al inicio',invitados);
// 05 - Elimina al último invitado de la lista.
invitados.pop();
console.log('Después de eliminar al último invitado',invitados);
// 06 - Elimina al primer invitado de la lista.
invitados.shift();
console.log('Después de eliminar al primer invitado',invitados);
// 07 - Muestra cuántos invitados hay actualmente.
console.log('Número de invitados actuales:', invitados.length);
// 08 - Reemplaza el segundo invitado de la lista por otro nombre.
invitados[1] = "Fernando";
console.log('Después de reemplazar el segundo invitado',invitados);


// EJERCICIOS DE ALGORITMOS

// 1. Encontrar el mayor número
// Dado un arreglo de números, encuentra el número más grande sin usar Math.max.

const valores = [3, 10, 2, 8]

function encontrarMayor(numeros) {
  let mayor = numeros[0]

  for(let i = 1; i < numeros.length; i++) {
    console.log(i, numeros[i])
    if (numeros[i] > mayor) {
      mayor = numeros[i]
    }
  }

  console.log(mayor)
  return mayor
}

console.log(encontrarMayor(valores)) // 10

// 2. Contar pares e impares
// Dado un arreglo de números, muestra cuántos son pares y cuántos son impares.

function contarParesImpares(numeros) {
  let pares = 0 // Acumulador
  let impares = 0 // Acumulador

  for(let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) { // Es un numero par
      pares = pares + 1
    } else {
      impares = impares + 1
    }
  }

  console.log(pares, impares)
  return [pares, impares]
}

console.log(contarParesImpares(valores)) // [3, 1]

// 3. Invertir un arreglo
// Dado un arreglo, crea otro arreglo con los elementos en orden inverso sin usar .reverse().
// 👉 Pista: usa un bucle desde el final hacia el inicio.
function invertirArreglo(numeros) {
  const arregloInvertido = []   
    for(let i = numeros.length - 1; i >= 0; i--) {
        arregloInvertido.push(numeros[i])
    }
    return arregloInvertido

}

console.log(invertirArreglo(valores)) // [8, 2, 10, 3]

// 4. Buscar un elemento
// Pide un nombre y verifica si está en el arreglo de invitados.
// Si está, muestra el índice donde se encuentra; si no, indica que no existe.

function buscarInvitado(invitados, nombreBuscado) {
  for (let i = 0; i < invitados.length; i++) {
    if (invitados[i] === nombreBuscado) {
      return `El invitado ${nombreBuscado} se encuentra en el índice ${i}.`
    }
  }
    return `El invitado ${nombreBuscado} no existe en la lista.`
}
console.log(buscarInvitado(invitados, 'María')) // El invitado María se encuentra en el índice 2.
console.log(buscarInvitado(invitados, 'Jorge')) // El invitado Jorge no existe en la lista.

// 5. Eliminar duplicados
// Dado un arreglo con nombres repetidos, crea un nuevo arreglo sin duplicados.
// 👉 Pista: usa un arreglo auxiliar y verifica antes de insertar.

function eliminarDuplicados(nombres) {
    const nombresUnicos = []
    for (let i = 0; i < nombres.length; i++) {
        if (!nombresUnicos.includes(nombres[i])) {
            nombresUnicos.push(nombres[i])
        }
    }
    return nombresUnicos
}
const nombresConDuplicados = ['Ana', 'Luis', 'María', 'Ana', 'Pedro', 'Luis']
console.log(eliminarDuplicados(nombresConDuplicados)) // ['Ana', 'Luis', 'María', 'Pedro']

// 6. Palíndromo con arreglos
// Verifica si una palabra es palíndroma (se lee igual al derecho y al revés).
// 👉 Pista: conviértela en arreglo de letras y compárala con su inverso.
function esPalindromo(palabra) {
    const letras = palabra.split('') // Convierte la palabra en un arreglo de letras
    const letrasInvertidas = invertirArreglo(letras) // Usa la función de invertir arreglo
    for (let i = 0; i < letras.length; i++) {
        if (letras[i] !== letrasInvertidas[i]) {
            return false
        }
    }
    return true
}
console.log(esPalindromo('radar')) // true
console.log(esPalindromo('odoo')) // false


// 7. Suma de todos los elementos
// Dado un arreglo de números, calcula la suma total de sus elementos sin usar reduce.
// 👉 Pista: acumula con un for.
function sumarElementos(numeros) {
    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i]
    }
    return suma
}
num = [3, 10, 2, 8,7,2,0,3,5,1,2,3]
console.log(sumarElementos(num)) // 30

// 8. Número más repetido
// Dado un arreglo de números, encuentra cuál aparece más veces.
// 👉 Pista: usa un contador para cada número.

function numeroMasRepetido(numeros) {
    const contador = {}
    let maxRepeticiones = 0
    let numeroMasFrecuente = null
    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i]
        contador[numero] = (contador[numero] || 0) + 1
        if (contador[numero] > maxRepeticiones) {
            maxRepeticiones = contador[numero]
            numeroMasFrecuente = numero
        }
    }
    return numeroMasFrecuente
}
console.log(numeroMasRepetido([3, 10, 2, 3, 8, 2, 3, 10, 3])) // 3
    


// 9. Ordenar un arreglo (básico)
// Ordena un arreglo de números de menor a mayor sin usar .sort().
// 👉 Pista: algoritmo de burbuja (intercambiar elementos si están desordenados).
function ordenarArreglo(numeros) {
    const arregloOrdenado = [...numeros] // Clonar el arreglo original
    const n = arregloOrdenado.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arregloOrdenado[j] > arregloOrdenado[j + 1]) {  
                // Intercambiar
                const temp = arregloOrdenado[j]
                arregloOrdenado[j] = arregloOrdenado[j + 1]
                arregloOrdenado[j + 1] = temp
            }
        }
    }
    return arregloOrdenado
}
console.log(ordenarArreglo([3, 10, 2, 8, 5])) // [2, 3, 5, 8, 10]


// 10. Intercalar dos arreglos
// Dado dos arreglos [1,2,3] y ['a','b','c'], crea uno nuevo: [1,'a',2,'b',3,'c'].
// 👉 Pista: usa un for que recorra en paralelo.

function intercalarArreglos(arr1, arr2) {
    const arregloIntercalado = []
    const longitudMaxima = Math.max(arr1.length, arr2.length)
    for (let i = 0; i < longitudMaxima; i++) {
        if (i < arr1.length) {
            arregloIntercalado.push(arr1[i])
        }
        if (i < arr2.length) {
            arregloIntercalado.push(arr2[i])
        }
    }
    return arregloIntercalado
}
console.log(intercalarArreglos([1, 2, 3], ['a', 'b', 'c'])) // [1, 'a', 2, 'b', 3, 'c']


// TODO: Investiguen cada uno de los métodos de arreglos que muestro en la siguiente línea

// MÉTODOS DE ARREGLOS (includes, map, filter, reduce, every, some, flat, flatMap, sort,forEach, etc.)
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
// https://www.w3schools.com/js/js_array_methods.asp
// https://www.freecodecamp.org/espanol/news/los-10-metodos-de-arreglos-javascript-mas-utilizados-con-ejemplos/
// https://www.javascripttutorial.net/javascript-array-methods/
