let segundos= document.getElementById("segundos");
let tiempo = document.getElementById("tiempo");
let cont=0;
let control=false;


function activa() {

    control=true;
    setTimeout(function() {
        alarma(segundos.value);
    }, 1000);
}


function alarma(sec) {

    cont++;
    console.log(sec);
    tiempo.value = sec - cont;
    tiempo.innerHTML = tiempo.value;
    if (control){
        if (tiempo.value > 0){ 
            activa();
        } else {
            console.log("Sonando");
            reproducirSonido();
            cont=0;
        }
    }
}

function parar(){

    control = false;
    // control==false ? control=true : control=false;
    console.log(control);
    pararSonido();
    
}

function reproducirSonido() {

    let audio = document.getElementById("audio");    
    audio.play();

}

function pararSonido(){
    let audio = document.getElementById("audio");    
    audio.pause();
}



// Coger una fecha local
// Calcular la diferencia. Momento actual.


// console.time("s1");

// setTimeout(()=>{
//     console.timeEnd("s1");
// },2000);
