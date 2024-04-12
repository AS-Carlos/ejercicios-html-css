let contenido = document.querySelectorAll(".now");


function printFecha() {

    
    let fecha = new Date;    

    contenido.forEach((element) => element.innerHTML = "Fecha local => " + fecha);    
    
    
    setTimeout(printFecha, 1000);
}

printFecha();
console.log(contenido);


