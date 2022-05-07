/**
 *  Archivo para las variables que utiliza mi videojuego!!!
 *  declaramos aqui el canvas y su ctx
 */
// _owner : ObjectId

const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

//
let frames = 0 ;
const gravity = 0.1;

//pipes  = array = [{...},{...},{....},{....}]
const pipes=[];

//points
let points = 0;

//los extras
let dificutad = 1; //es un ejemplo

let requestId; // este nos va a servir para detener el juego!!!!

// audio!!! en la tarde colocaremos la musica del mal!
const audio = new Audio()
//audio.src = ""
//audio.loop = true 


// si quieren resetear al heroe!!

let dylanDefault = {
    vida: 3,
    status: "pequeño",
    monedas: 0,
    x:100,
    y:10
}