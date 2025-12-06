//COMENTARIOS:
// clase01/semana05/dia-01-javascript-basico/main.js

/* DFDFDFDF
SDSD DFDFDFFFFF */


/* DFDDDDDDDDDDDDDDD  SHILF + ALT +A
JJJJJJJJJJ */
console.log("Hola, mundo!!!!!");

console.log(232344);

console.log(12.50);

console.log(typeof 12.50);

console.log(typeof false);

console.log(typeof null);

console.log(typeof {});

console.log(typeof []);

console.log(typeof function parent(){});

// STRING o Cadenas de texto

console.log('Sebastian')
console.log("Sebastian")
console.log('Sebastian\'s')

// undefined , lo asigna JS automaticamente a una variable que no tiene valor
let variableSinValor;
console.log(variableSinValor);
console.log(typeof variableSinValor);

// null , es un valor que le asignamos nosotros a una variable
let variableConValorNulo = null;
console.log(variableConValorNulo);
console.log(typeof variableConValorNulo); // tipo objeto, es un error de JS



// VARIABLES Y CONSTANTES

// Nos sirven para guardar datos en memoria y reutilizarlos o modificarlos durante el tiempo que nuestro programa se esté ejecutando.

// ECMASCRIPT 6 === ES6
// const, para valores fijos
// let, se usa cuando el valor cambia

// ECMASCRIPT 5 === ES5
// var -> Forma de declarar una variable pero no es recomendable su uso actualmente ❌

// CONST -> ES6 (Si es recomendable usar actualmente)

const edad = 55 // Es obligatorio inicializarlo
const _edad = 25
const edadDeMiHijo = 17  // Estamos usando el estilo camelCase. Hay otros PascalCase, snake_case, kebab-case
const PI = 3.14
const nombre2 = "Victor"

// edad = 33 // ❌ Uncaught TypeError: Assignment to constant variable.
// edad-de-mi-hijo = 33 // ❌ Uncaught SyntaxError: Invalid left-hand side in assignment

console.log(edad)
console.log(edad)

// LET -> ES5 (Si es recomendable usar actualmente)

let edad2 = 35 // Nota: no es obligatorio inicializarlo

edad2 = 89    // Lo sobreescribe con el mismo tipo, number
edad2 = "36" // Lo sobreescribe con un tipo de dato nuevo, string
edad2 = true
edad2 = 87

console.log(edad2)
console.log(typeof edad2)

///OPERADORES ARITMÉTICOS

console.log(edad2 + 3) // Suma
console.log(edad2 - 3) // Resta
console.log(edad2 * 3) // Multiplicación
console.log(edad2 / 3) // División
console.log(edad2 % 3) // Módulo o residuo

console.log(edad2 ** 3) // Exponente o potencia

console.log(Math.pow(2,3)) // Exponente o potencia

// OPERADORES DE ASIGNACIÓN
// OPERADORES DE COMPARACIÓN

// Operador de igualdad no estricta (==)
// Devuelve un valor boolean (true o false)
// Este operador no toma en cuenta el tipo de dato al comparar sino solo sus valores

console.log(1 == 1) // true
console.log(1 == '1') // true ❓
console.log(1 != '1') // false ❓

// Operador de igualdad estricta (===)
// Devuelve un valor boolean (true o false)
// Este operador toma en cuenta el tipo de dato y sus valores al comparar

console.log(1 === 1) // true
console.log(1 === '1') // false ✅
console.log(1 !== '1') // true ✅

// OPERADORES LÓGICOS (AND, OR, NEGACIÓN)

console.log(true && false) // false -> AND (Se tienen que cumplir los dos lados de la comparación)
console.log(true && true) // true -> AND (Se tienen que cumplir los dos lados de la comparación)

console.log(true || true) // true -> OR (Se tiene que cumplir solo un lado de la comparación o ambos lados)
console.log(true || false) // true -> OR (Se tiene que cumplir solo un lado de la comparación o ambos lados)
console.log(false || true) // true -> OR (Se tiene que cumplir solo un lado de la comparación o ambos lados)
console.log(false || false) // false -> OR (Se tiene que cumplir solo un lado de la comparación o ambos lados)

console.log(!false) // true -> Negación (Transforma el valor a su contrario)

const saludo = "Hola"
const nombrecompleto = "Sebastián"
const edad4=55
console.log(saludo + " " + nombrecompleto + " tienes " + edad4 + " años.")

// EJERCICIOS

// 1. Retorna true si dos strings tienen la misma longitud sino devolver false


const cadena1 ='codigo'
const cadena2 ='facilito'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length===cadena2.length)


// 2. Retornar true si un numero es menor que 40 sino devolver false
const numero1 = 75
console.log('EJERCICIO 2',numero1<40)

// 3. Retornar True si un numero es menor que 60 sino devolver False
const numero2 = 15
console.log('EJERCICIO 3',numero2<60)
// 4. Retornar True si un numero es par sino devolver False
const numero3 = 8
console.log(numero3 % 2 === 0)

// 5. Retornar True si un numero es impar sino devolver
const numero4 = 11
console.log(numero4 % 2 !== 0)

// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
const base = 5
const altura = 10
const areaTriangulo = (base * altura) / 2
console.log("El área del triángulo es: " + areaTriangulo)

// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.

const numero5 = 345
const cifra1 = Math.floor(numero5 / 100)           // Centenas
const cifra2 = Math.floor((numero5 % 100) / 10)    // Decenas
const cifra3 = numero5 % 10    

const sumaCifrasAlCubo = (cifra1 + cifra2 + cifra3) ** 3
console.log("La suma de las cifras elevada al cubo es: " + sumaCifrasAlCubo)

// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 50%


const montoTotal = 1000
const porcentajeSocioA = 0.30
const porcentajeSocioB = 0.20
const porcentajeSocioC = 0.50

const montoSocioA = montoTotal * porcentajeSocioA
const montoSocioB = montoTotal * porcentajeSocioB
const montoSocioC = montoTotal * porcentajeSocioC   
console.log("Monto para el Socio A: " + montoSocioA)
console.log("Monto para el Socio B: " + montoSocioB)
console.log("Monto para el Socio C: " + montoSocioC)


