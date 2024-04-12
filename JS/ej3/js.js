let contenido = document.getElementById("contenido");


function printFecha() {


    let fecha = new Date;

    contenido.innerHTML = fecha;    
    
    setTimeout(printFecha, 1000);
}

printFecha();


