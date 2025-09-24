//=====Variables=====//
var entero = 0; /*tambien se puede usar let*/ 
let booleano = true;
var cadena = "Hola Mundo"
var arreglo = [1, 2, 3, 4, 5]
var arreglo2 = ["hola"]

//====Constantes=====//
const PI = 3.1416;

//====Funciones====//
function suma(x, y){
    return x + y;
}

function imprimirMensaje(mensaje){
    console.log("Este es mi mensaje " + mensaje)
}

//===Metodos===//
imprimirMensaje("Hola")
imprimirMensaje(booleano)

//===Elementos de la pagina como variables===//
var botonBuscar = document.getElementById("botonBuscar");
console.log(botonBuscar);

//===Eventos===//
botonBuscar.addEventListener("click", function(){
    console.log("Hiciste click al botón"); //Imprime mensaje a la consola 
    //alert("Hiciste click al boton") //Alerta arrriba del navegador
    botonBuscar.classList.add("rojo");
});

//===Variables ejercicio===//
var mas = document.getElementById("mas");
var verTodos = document.getElementById("verTodos");
var verFotos = document.getElementById("verFotos");
var posts = document.getElementById("posts");
var imagenes = document.getElementById("imagenes")

function cambiarFondo(){
    fondo = document.getElementById("bg5");
    console.log(fondo)
    fondo.style.backgroundImage = URL("");
    alert("holi");
}


mas.addEventListener("click", function(){
    alert("Sección en progreso")
    //mostrar alerta en boton de +
});

verTodos.addEventListener("click", function(){
    if (posts.classList.contains("ocultar")){
        posts.classList.add("mostrar")
        posts.classList.remove("ocultar")
    } 
    else{
        posts.classList.remove("mostrar")
        posts.classList.add("ocultar")
    }
}) 

verFotos.addEventListener("click", function(){
    window.setInterval(cambiarFondo, 1000);
})
