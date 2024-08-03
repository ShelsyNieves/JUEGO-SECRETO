let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecrero) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'Acertaste el número dx mzyor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').valuee = '';
}

function generarNúmeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.incluides(numeroGenerado)){
            return generarNúmeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }    
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el númeor aleatorio
    //Inicializar el núemro intentos
    condicionesIniciales();
    //Desahbilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();