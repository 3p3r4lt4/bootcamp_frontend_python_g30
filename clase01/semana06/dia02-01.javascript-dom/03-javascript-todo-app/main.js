

const taskInput = document.getElementById('taskInput')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

console.log(taskList)

// EVENTOS

// ELEMENTO.addEventListener(NOMBRE_EVENTO, CALLBACK)

// CALLBACK: Es una función que usamos como parámetro de otras funciones.

taskAdd.addEventListener('click', function (event) {
    // Se ejecutará cuando hagamos click en el botón 'Añadir tarea'
    console.log('Click!', taskInput.value)

    // MANEJO DEL DOM: Forma de crear elementos dinámicamente con el DOM de Javascript
    // const button = document.createElement('button') // <button></button>
    // button.textContent = 'Hola soy un botón'
    // console.log(button)
    // document.body.appendChild(button)

    // TODO: 01 Añadir el elemento li al elemento con la clase task__list
    const li = document.createElement('li') // <li></li>
    li.textContent = taskInput.value // <li>Valor del input</li>
    taskList.appendChild(li) // Añadir el li a la lista ul.task__list

    // TODO: 02 Añadir el elemento span al elemento li
    const span = document.createElement('span')
    span.textContent = taskInput.value
    li.textContent = ''
    li.appendChild(span)
    // TODO: 03 Añadir el elemento button al elemento li
    const button = document.createElement('button') // <button></button>
    button.textContent = 'Borrar'
    li.appendChild(button)

    // TODO: 04 Añadir un input tipo checkbox al li
//    const checkbox = document.createElement('input')
//    checkbox.setAttribute('type', 'checkbox') // <input type="checkbox" />
//    li.appendChild(checkbox) // Añadiendo el checkbox al li

    // AÑADIR EL ELEMENTO CHECKBOX AL ELEMENTO LI
    const checkbox = document.createElement('input') // <input>
    checkbox.type = 'checkbox' 
    li.insertBefore(checkbox, span) 

    // const checkbox = document.createElement('input')
    // checkbox.setAttribute('type', 'checkbox') // <input type="checkbox" />
    // li.appendChild(checkbox) // Añadiendo el checkbox al li

})



taskList.addEventListener('click', function(event) {
  console.log('Hice click en cualquier parte de la lista ul')

  const target = event.target // Elemento presionado

  console.log({ target})

  if (target.tagName === 'BUTTON') {
    console.log('Eliminando tarea...', { el: target.parentElement }) // Elemento padre

    target.parentElement.remove()
  }

//   // TODO: Mediante el checkbox deber tachar el texto del span para completar la tarea
  if(target.tagName === 'INPUT' && target.type === 'checkbox') {
    target.classList.toggle('checked')
  }
})