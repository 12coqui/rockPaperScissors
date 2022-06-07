// JUGADA DE LA MAQUINA

function computerPlay () {
    let = computerSelection = Math.random() * 3;
    switch (true) {
        case computerSelection < 1: computerSelection = 'piedra';
        break;
        case computerSelection < 2: computerSelection = 'papel';
        break;
        default: computerSelection = 'tijera'};


       
return computerSelection }

const rdo = document.querySelector('#rdo');
const roca = document.querySelector('#imgRock')
const papel = document.querySelector('#imgPaper')
const tijera = document.querySelector('#imgScissor')
let playerSelection = ''
roca.addEventListener('click', (e) => {playerSelection = 'piedra'})
papel.addEventListener('click', (e) => {playerSelection = 'papel'})
tijera.addEventListener('click', (e) => {playerSelection = 'tijera'})
rdo.textContent = playerSelection;


// JUGAR UNA RONDA

function playRound (computerSelection, playerSelection){
    computerSelection = computerPlay();
    playerSelection = prompt('Piedra, Papel o Tijera? ').toLowerCase();
   
    if (playerSelection == 'piedra'){
        if (computerSelection == playerSelection){
            alert('Empataron')
        }
        else if (computerSelection == 'tijera') {
            alert('Ganaste, Piedra le gana a Tijera!')
        }
        else {alert('Perdiste, Papel le gana a Piedra!')}
    }
    else if (playerSelection == 'tijera'){
        if (computerSelection == playerSelection){
            alert('Empataron')
        }
        else if (computerSelection == 'papel') {
            alert('Ganaste, Tijera le gana a Papel!')
        }
        else {alert('Perdiste, Piedra le gana a Tijera!')}
    }
    else if (playerSelection == 'papel'){
        if (computerSelection == playerSelection){
            alert('Empataron')
        }
        else if (computerSelection == 'tijera') {
            alert('Perdiste, Tijera le gana a Papel!')
        }
        else {alert('Ganaste, Papel le gana a Piedra!')}
    }
    
} 

// JUGAR UNA PARTIDA DE 5 RONDAS

function game () { 
    for (let i = 0; i < 5; i++) {
        playRound ()};
        alert('Game finished!')}; 



/* const rock = document.querySelector('#imgRock')
rock.addEventListener('click', game) */

        
/* let arrayProductos = [
    {id: 1, nombre: 'Remera', precio: '2000'},
    {id: 2, nombre: 'buzo', precio: '1000'},
    {id: 3, nombre: 'jean', precio: '3000'},
    {id: 4, nombre: 'campera', precio: '4000'},
    {id: 5, nombre: 'saco', precio: '5000'},
]

let carrito = []

function agregarAlCarrito (productoId){

    let producto = arrayProductos.find((cocoloco) => cocoloco.id === productoId)
    console.log (producto)
    carrito.push (producto)
}

agregarAlCarrito (3)
agregarAlCarrito (1)
agregarAlCarrito (5)

carrito.forEach ( (loco) => {
    console.log(loco)
}) */

















    





















