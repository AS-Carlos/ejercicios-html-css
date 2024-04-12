let contenido = document.getElementById("contenido");


function printFecha() {


    let fecha = Date.now();
    let local = Date(fecha);
    
    

    contenido.innerHTML = "Fecha en milisegundos => " + fecha + "<br> Fecha local => " + local;
    
    setTimeout(printFecha, 1000);
}

printFecha();


