const elPalabra = document.querySelector('.ahorcado__palabra')
const elBotones = document.querySelector('.ahorcado__botones')
const elResultado = document.querySelector('.ahorcado__resultado')
const elReiniciar = document.querySelector('.ahorcado__reiniciar')

// elPalabra.textContent = 'HOLA'

const PALABRA_RESPUESTA = 'JAVASCRIPT'

let letrasAdivinadas = ''

const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')  // Arreglo

const renderizarAlfabeto = () => {
  ALFABETO.forEach(letra => {
    const boton = document.createElement('button')

    boton.textContent = letra

    boton.className = 'bg-blue-500 p-2 text-white font-bold text-2xl cursor-pointer hover:bg-blue-600 duration-300 rounded'

    boton.addEventListener('click', (event) => {
      letrasAdivinadas += letra

      elPalabra.textContent = PALABRA_RESPUESTA
        .split('')
        .map(letra => letrasAdivinadas.includes(letra) ? letra : '_')
        .join('')
      
      if (!elPalabra.textContent.includes('_')) {
        console.log('GANASTE!')
        
        elResultado.classList.toggle('hidden')
        elReiniciar.classList.toggle('hidden')
      }
    })

    elBotones.appendChild(boton)
  })

}

// Función para reiniciar el juego
const reiniciarJuego = () => {
  // Restablecer variables
  letrasAdivinadas = ''
  
  // Ocultar resultado y botón de reinicio
  elResultado.classList.add('hidden')
  elReiniciar.classList.add('hidden')
  
  // Restablecer la palabra a guiones bajos
  elPalabra.textContent = '_'.repeat(PALABRA_RESPUESTA.length)
  
  // Restablecer todos los botones del alfabeto
  const botones = document.querySelectorAll('.ahorcado__botones button')
  botones.forEach(boton => {
    boton.disabled = false
    boton.classList.remove('bg-gray-400', 'cursor-not-allowed')
    boton.classList.add('bg-blue-500', 'hover:bg-blue-600', 'cursor-pointer')
  })
}

// Función para actualizar la visualización de la palabra
const actualizarPalabra = () => {
  elPalabra.textContent = PALABRA_RESPUESTA
    .split('')
    .map(letra => letrasAdivinadas.includes(letra) ? letra : '_')
    .join('')
  
  // Verificar si el jugador ganó
  if (!elPalabra.textContent.includes('_')) {
    elResultado.classList.remove('hidden')
    elReiniciar.classList.remove('hidden')
  }
}

// Función para manejar el clic en una letra
const manejarClicLetra = (letra, boton) => {
  // Solo procesar si la letra no ha sido presionada antes
  if (!letrasAdivinadas.includes(letra)) {
    letrasAdivinadas += letra
    
    // Deshabilitar el botón y cambiar su estilo
    boton.disabled = true
    boton.classList.remove('bg-blue-500', 'hover:bg-blue-600')
    boton.classList.add('bg-gray-400', 'cursor-not-allowed')
    
    actualizarPalabra()
  }
}

// TODO: Reiniciar el juego al presionar el boton '¡Empezar de nuevo!
// Agregar event listener al botón de reinicio
elReiniciar.addEventListener('click', reiniciarJuego)
renderizarAlfabeto()
actualizarPalabra() // Inicializar con guiones bajos