let contenido = document.getElementById("contenido");
let contador = 0;

function printFecha() {


    let fecha = new Date;

    contenido.innerHTML = fecha;
    contador++;
    
    setTimeout(printFecha, 1000);
}

printFecha();


