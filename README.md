# juego-amigosecreto-Challenge-Kevyn
## Descripción

Este proyecto es una aplicación web que permite a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto". La aplicación está diseñada para fortalecer las habilidades en lógica de programación y manipulación del DOM.

## Funcionalidades

- *Agregar nombres*: Los usuarios pueden escribir el nombre de un amigo en un campo de texto y agregarlo a una lista visible al hacer clic en "Añadir".
- *Validar entrada*: Si el campo de texto está vacío o contiene caracteres no permitidos, se muestra una alerta pidiendo un nombre válido.
- *Visualizar la lista*: Los nombres ingresados aparecen en una lista debajo del campo de entrada.
- *Sorteo aleatorio*: Al hacer clic en el botón "Sortear Amigo", se selecciona aleatoriamente un nombre de la lista y se muestra en la página.

## Estructura del Proyecto
. ├── index.html ├── style.css └── app.js


## Uso

1. *Agregar nombres*:
   - Escribe el nombre de un amigo en el campo de texto.
   - Haz clic en el botón "Añadir".
   - El nombre se agregará a la lista visible en la página.

2. *Sortear amigo secreto*:
   - Haz clic en el botón "Sortear Amigo".
   - Se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

## Validaciones

- El campo de texto solo acepta letras mayúsculas o minúsculas sin caracteres especiales, números o espacios.
- Si el campo de texto está vacío o contiene caracteres no permitidos, se mostrará una alerta pidiendo un nombre válido.

## Código de JavaScript

```javascript
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombreAmigos = []; // Lista que almacena los nombres de amigos
let listaAmigosDisponibles = [];

function agregarAmigo () {
    //Capturar el valor del campo de entrada
    let amigoDeUsuario = document.getElementById('amigo').value;
    console.log(amigoDeUsuario);
    //Validar la entrada
    if (amigoDeUsuario.length === 0) {
        alert("Por favor, inserte un nombre.");
    } else {
        //Actualizar el array de amigos
        listaNombreAmigos.push(amigoDeUsuario);
        console.log(listaNombreAmigos);
        limpiarCaja();
        actualizarListaAmigos();
    }
    return;
}
//actualizar la lista de amigos
function actualizarListaAmigos() {
    //Para obtener la lista del archivo html
    let listaAmigos = document.getElementById("listaAmigos");
    //Para limpiar esa lista
    listaAmigos.innerHTML = "";
    //Recorrer lista de amigos
    for (let i = 0; i < listaNombreAmigos.length; i++) {
        let mostrarAmigo = listaNombreAmigos[i];
        //Crear elemento li
        let elementoLi = document.createElement("li");
        elementoLi.textContent = mostrarAmigo;
        //Agregar el nuevo elemento a la lista HTML
        listaAmigos.appendChild(elementoLi);
    }
}

//Sortear amigo
function sortearAmigo() {
    //Si la lista de amigos disponibles está vacía
    //Se llena con la lista original
    if (listaAmigosDisponibles.length === 0) {
        listaAmigosDisponibles = [...listaNombreAmigos];
    }
    //Revisar nuevamente si hay amigos en la lista
    if(listaAmigosDisponibles.length === 0) {
        alert('Primero agregue amigos para realizar el sorteo.');
        return;
    }
    //Generar un número aleatorio para elegir un índice
    let amigoAleatorio = Math.floor(Math.random()*listaAmigosDisponibles.length);
    let amigoSorteado = listaAmigosDisponibles[amigoAleatorio];

    document.getElementById("resultado").textContent = amigoSorteado;
    //Se elimina el amigo sorteado para que no se repita
    listaAmigosDisponibles.splice(indiceAleatorio, 1);
}

//Limpiar el campo de entrada: 
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
