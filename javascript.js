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


//===Eventos===//
/*botonBuscar.addEventListener("click", function(){
    console.log("Hiciste click al botón"); //Imprime mensaje a la consola 
    //alert("Hiciste click al boton") //Alerta arrriba del navegador
    botonBuscar.classList.add("rojo");
});*/

//===Variables ejercicio===//
var mas = document.getElementById("mas");
var verTodos = document.getElementById("verTodos");
var verFotos = document.getElementById("verFotos");
var posts = document.getElementById("posts");
var imagenes = document.getElementById("imagenes");
var entero = 0;
var fondos = ["url('imagenes/arnel-hasanovic-MNd-Rka1o0Q-unsplash.jpg')",
    "url('imagenes/jukka-aalho-OaPksPcVp50-unsplash.jpg')",
    "url('imagenes/rachel-coyne-mTsotT-gMrY-unsplash.jpg')",
    "url('imagenes/soundtrap-n30_i7mx62o-unsplash.jpg')",
    "url('https://i.mdel.net/i/db/2022/12/1839401/1839401-800w.jpg')"];
var indice = 0

//=== función para cambiar el fondo===//
function cambiarFondo(){
    let fondo = document.getElementById("bg5");
    console.log(fondo)
    //===Cambiar imagen de fondo con un difuminado===//
    fondo.style.backgroundImage = fondos[indice];
    if (indice >= fondos.length - 1){
        indice = 0;
    } else {
        indice++;
    }
}


//===Al hacer click en el botón + se añade 1 al contador===//
mas.addEventListener("click", function(){
    entero = entero + 1;
    console.log(entero);
    document.getElementById("contador").innerHTML = "Likes: " + entero;
});


//===Al hacer click en see all posts, muestra u oculta los posts===//
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

// Variable para almacenar el ID del intervalo
let fondoIntervalo = null;

//===Al pasar el mouse sobre see all, muestra imágenes diferentes en un intervalo===//
verFotos.addEventListener("mouseover", function(){
    if (fondoIntervalo == null) {
        fondoIntervalo = window.setInterval(cambiarFondo, 1000);
    }
})

//===Al quitar el mouse de see all, se detiene el intervalo===//
verFotos.addEventListener("mouseout", function(){
    if (fondoIntervalo != null) {
        window.clearInterval(fondoIntervalo);
        fondoIntervalo = null;
    }
})

//===buscador de articulos===//
var barraBusqueda = document.getElementById("barraBusqueda");
var botonBuscar = document.getElementById("botonBuscar");
console.log(botonBuscar);

//===Al hacer click en el botón de buscar, muestra u oculta el input de buscar===//
botonBuscar.addEventListener("click", function(){
    console.log("Mostrando input de buscar...")
    console.log("Hiciste click al botón"); //Imprime mensaje a la consola 
    //alert("Hiciste click al boton") //Alerta arrriba del navegador
    
    if (barraBusqueda.classList.contains("ocultar")){
        barraBusqueda.classList.remove("ocultar");
        posts.classList.add("mostrar")

        botonBuscar.classList.add("rojo");
        barraBusqueda.focus();
    } else {
        barraBusqueda.classList.add("ocultar");
        posts.classList.remove("mostrar")

        botonBuscar.classList.remove("rojo");
        barraBusqueda.value = "";
        document.querySelectorAll(".tarjeta").forEach(function(t){
            t.classList.remove("ocultar");
        });
    }
});

//===Al escribir en la barra de búsqueda, filtra los artículos con clase tarjeta===//
if (barraBusqueda) {
    barraBusqueda.addEventListener("input", function(){
        const textoBusqueda = (barraBusqueda.value || "").trim().toLowerCase();

        // seleccionar todas las tarjetas
        const articulos = document.querySelectorAll(".tarjeta");
        articulos.forEach(function(articulo) {
            const texto = (articulo.textContent || "").toLowerCase();
            if (textoBusqueda === "" || texto.includes(textoBusqueda)) {
                articulo.classList.remove("ocultar");
            } else {
                articulo.classList.add("ocultar");
            }
        });
    });
}

//===Modo oscuro===//
var botonDarkMode = document.getElementById("botonDarkMode");
var contenedor = document.getElementById("contenedor");
var elementos = contenedor.getElementsByTagName("*");
var coloresOriginales = [];
for (var i = 0; i < elementos.length; i++) {
    coloresOriginales.push({
        backgroundColor: elementos[i].style.backgroundColor
    });
}

botonDarkMode.addEventListener("click", function(){
    if (contenedor.classList.contains("dark")){
        contenedor.classList.remove("dark");
        document.body.classList.remove("dark");

        //restaurar los colores originales
        var elementos = contenedor.getElementsByTagName("*");
        for (var i = 0; i < elementos.length; i++) {
            elementos[i].style.backgroundColor = coloresOriginales[i].backgroundColor;
            elementos[i].style.color = "black";
        }

    } else {
        contenedor.classList.add("dark");
        document.body.classList.add("dark");

        //obtener todos los elementos del container y oscurecerlos
        var elementos = contenedor.getElementsByTagName("*");
        for (var i = 0; i < elementos.length; i++) {
            elementos[i].style.backgroundColor = "slategray";
            elementos[i].style.color = "white";
        }
    }
});