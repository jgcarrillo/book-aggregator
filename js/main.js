"use strict";

/* Posibles mejoras
- Añadir formato de entrada de datos mejorado (no concatenar)
- Mejora de CSS
- Añadir animaciones
*/

function nuevoLibro(){
    
    ////// Definición de variables //////
    var campoTexto = document.querySelector("#titulo").value;
    var campoAutor = document.querySelector("#autor").value;
    var campoIsbn = document.querySelector("#isbn").value;
    var libroLista = document.querySelector("#libros_generados");
    var btn = document.querySelector("#btn_libros");
    
    ////// Creacion de alertas al añadir o quitar //////
    var alertaNuevo = document.querySelector("#alerta_libro_nuevo");
    var alertaBorrado = document.querySelector("#alerta_libro_eliminado");

    ////// Control de errores //////
    if((campoTexto && campoAutor && campoIsbn) === ""){
        alert("Por favor, introduce datos váludos");
        return;
    }
    
    ////// Agregacion de nuevos elementos //////
    
    /* TITULO */
    var li = document.createElement("li");
    li.classList.add("nuevo_libro");
    li.style.display = "block";
    li.appendChild(document.createTextNode("Titulo: " + campoTexto + " - " + "Autor: " + campoAutor + " - " + " ISBN: " + campoIsbn));
    libroLista.appendChild(li);
    
    // Creación de alerta para libro añadido
    alertaNuevo.classList.add("libro_nuevo");
    alertaNuevo.innerHTML = "Libro añadido";
    alertaNuevo.style.display = "block";
    
    setTimeout(function(){
        alertaNuevo.style.display = "none";
    }, 2000);
    
    ////// Boton de eliminar "X" //////
    var btn_eliminar = document.createElement("button");
    btn_eliminar.appendChild(document.createTextNode("X"));
    btn_eliminar.classList.add("btn_eliminar");
    li.appendChild(btn_eliminar);
    
    ////// Eliminando libros creados //////
    btn_eliminar.addEventListener("click", function(){
        li.parentNode.removeChild(li);
        
        // Creación de alerta para el borrado
        alertaBorrado.classList.add("libro_eliminado");
        alertaBorrado.innerHTML = "Libro eliminado";
        alertaBorrado.style.display = "block";
        
        setTimeout(function(){
            alertaBorrado.style.display = "none";
        }, 2000);
    });
}
