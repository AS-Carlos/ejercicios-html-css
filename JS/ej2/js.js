let contenido = document.getElementById("contenido");
let contador = 0;

function cambiarColor() {
    let color;
    if (contador === 0) color = "red";
    if (contador === 1) color = "green";
    if (contador === 2) color = "blue";
    if (contador > 2) {
        color = "white";
        contador = 0; 
    }
    contenido.style.backgroundColor = color;
    contador++;
    // console.log(color);
    setTimeout(cambiarColor, 1000);
}

cambiarColor(); 



