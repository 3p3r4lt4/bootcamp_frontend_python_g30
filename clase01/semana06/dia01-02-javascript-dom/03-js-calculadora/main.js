// ============================================
// VARIABLES DE ESTADO DE LA CALCULADORA
// ============================================
let numeroActual = '0';          // Número mostrado en pantalla
let operador = '';               // Operador actual (+, -, *)
let operando = '';               // Primer número guardado para operación
let esperandoNuevoNumero = true; // Estado para saber si empezar nuevo número

// ============================================
// ELEMENTOS DEL DOM
// ============================================
const inputDisplay = document.querySelector('#inputDisplay');
const buttons = document.querySelectorAll('.button');

// ============================================
// FUNCIONES DE LA CALCULADORA
// ============================================

/**
 * Actualiza el display con el número actual
 */
function actualizarDisplay() {
    inputDisplay.value = numeroActual;
}

/**
 * Maneja la entrada de números
 * @param {string} numero - Número a ingresar (0-9 o punto)
 */
function ingresarNumero(numero) {
    console.log(`Ingresando número: ${numero}`);
    
    // Si estamos esperando un nuevo número, reemplazar el display
    if (esperandoNuevoNumero) {
        numeroActual = numero;
        esperandoNuevoNumero = false;
    } else {
        // Verificar si ya hay un punto decimal
        if (numero === '.' && numeroActual.includes('.')) {
            console.log('Ya hay un punto decimal, ignorando');
            return;
        }
        
        // Si es 0, reemplazar; si no, concatenar
        if (numeroActual === '0' && numero !== '.') {
            numeroActual = numero;
        } else {
            numeroActual += numero;
        }
    }
    
    actualizarDisplay();
    console.log(`Número actual: ${numeroActual}`);
}

/**
 * Maneja la entrada de operadores
 * @param {string} op - Operador (+, -, *)
 */
function ingresarOperador(op) {
    console.log(`Ingresando operador: ${op}`);
    
    const valorNumero = parseFloat(numeroActual);
    
    // Si no hay operando guardado, guardar el número actual
    if (operando === '' && !isNaN(valorNumero)) {
        operando = valorNumero;
        console.log(`Operando guardado: ${operando}`);
    } 
    // Si ya hay un operador y un operando, calcular primero
    else if (operador) {
        const resultado = calcular();
        numeroActual = String(resultado);
        operando = resultado;
        actualizarDisplay();
        console.log(`Cálculo intermedio: ${resultado}`);
    }
    
    // Guardar el nuevo operador
    operador = op;
    esperandoNuevoNumero = true;
    
    console.log(`Operador actual: ${operador}`);
}

/**
 * Realiza el cálculo basado en el operador y números
 * @returns {number} Resultado de la operación
 */
function calcular() {
    const valorActual = parseFloat(numeroActual);
    console.log(`Calculando: ${operando} ${operador} ${valorActual}`);
    
    // Validar que tenemos números válidos
    if (isNaN(operando) || isNaN(valorActual)) {
        console.log('Error: Números no válidos');
        return valorActual;
    }
    
    let resultado;
    
    // Realizar la operación correspondiente
    switch (operador) {
        case '+':
            resultado = operando + valorActual;
            break;
        case '-':
            resultado = operando - valorActual;
            break;
        case '*':
            resultado = operando * valorActual;
            break;
        default:
            resultado = valorActual;
    }
    
    console.log(`Resultado: ${resultado}`);
    return resultado;
}

/**
 * Limpia la entrada actual (CE)
 */
function limpiarEntrada() {
    console.log('Limpiando entrada actual');
    numeroActual = '0';
    esperandoNuevoNumero = true;
    actualizarDisplay();
}

/**
 * Limpia completamente la calculadora
 */
function limpiarTodo() {
    console.log('Limpiando todo');
    numeroActual = '0';
    operador = '';
    operando = '';
    esperandoNuevoNumero = true;
    actualizarDisplay();
}

/**
 * Realiza la operación igual (=)
 */
function realizarOperacion() {
    console.log('Realizando operación =');
    
    // Solo calcular si tenemos operador y operando
    if (operador && operando !== '' && !esperandoNuevoNumero) {
        const resultado = calcular();
        
        // Formatear el resultado
        numeroActual = String(resultado);
        
        // Redondear si tiene muchos decimales
        if (numeroActual.includes('.')) {
            const decimales = numeroActual.split('.')[1];
            if (decimales.length > 8) {
                numeroActual = parseFloat(resultado).toFixed(8);
            }
        }
        
        actualizarDisplay();
        console.log(`Resultado final: ${numeroActual}`);
        
        // Resetear para la siguiente operación
        operando = '';
        operador = '';
        esperandoNuevoNumero = true;
    } else {
        console.log('No hay operación pendiente');
    }
}

// ============================================
// INICIALIZACIÓN Y EVENT LISTENERS
// ============================================

/**
 * Inicializa la calculadora
 */
function inicializarCalculadora() {
    console.log('Inicializando calculadora...');
    actualizarDisplay();
    
    // Agregar event listeners a todos los botones
    buttons.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            const botonPresionado = event.target;
            const textoBoton = botonPresionado.textContent;
            
            console.log(`Botón clickeado: ${textoBoton}`);
            
            // Determinar qué tipo de botón es
            if (botonPresionado.classList.contains('numero')) {
                ingresarNumero(textoBoton);
            } 
            else if (botonPresionado.classList.contains('operador')) {
                ingresarOperador(textoBoton);
            } 
            else if (textoBoton === '=') {
                realizarOperacion();
            } 
            else if (textoBoton === 'CE') {
                // Doble clic en CE para limpiar todo
                if (event.detail === 2) {
                    limpiarTodo();
                } else {
                    limpiarEntrada();
                }
            }
        });
    });
    
    // Agregar soporte para teclado
    document.addEventListener('keydown', function(event) {
        const tecla = event.key;
        
        console.log(`Tecla presionada: ${tecla}`);
        
        // Números (0-9)
        if (tecla >= '0' && tecla <= '9') {
            ingresarNumero(tecla);
        }
        // Punto decimal
        else if (tecla === '.') {
            ingresarNumero(tecla);
        }
        // Operadores
        else if (tecla === '+' || tecla === '-' || tecla === '*') {
            ingresarOperador(tecla);
        }
        // Enter o = para calcular
        else if (tecla === 'Enter' || tecla === '=') {
            event.preventDefault();
            realizarOperacion();
        }
        // Escape para limpiar todo
        else if (tecla === 'Escape') {
            limpiarTodo();
        }
        // Backspace para CE
        else if (tecla === 'Backspace') {
            limpiarEntrada();
        }
    });
    
    console.log('Calculadora inicializada correctamente');
}

// ============================================
// INICIAR LA CALCULADORA
// ============================================
inicializarCalculadora();