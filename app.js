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
