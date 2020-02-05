var cohete1 = <HTMLInputElement>document.getElementById('cohete1');
var nombreCohete = <HTMLInputElement>document.getElementById('nombreCohete');
var cantPropulsores = <HTMLInputElement>document.getElementById('cantPropulsores');
var potenciasPropulsores = <HTMLInputElement>document.getElementById('potenciasPropulsores');
var potenciaTotal  = <HTMLInputElement>document.getElementById('potenciaTotal');

var cohete:Cohete ;
var propulsor:Propulsor;

var potenciaInicial: number = 0;
var cantProp = 3;
var todasLasPotencias = [10,30,80];
var potenciasAceleradas = [0,0,0]; // acá se va actualizando el valor de la potencia de cada propulsor



function createRocket(){
    // para cuando cree el BTN
    // var nombre = ((<HTMLInputElement>document.getElementById('nombre')).value).toUpperCase( );
    // var propulsores = ((<HTMLInputElement>document.getElementById('propulsores')).value).toUpperCase( );

    cohete = new Cohete('32WESSDS'); 

    propulsor = new Propulsor(cantProp,todasLasPotencias); 
    
    cohete1.setAttribute("style", "visibility: visible;");;
    nombreCohete.innerHTML = cohete.nombre;
    cantPropulsores.innerHTML = propulsor.cantidad + ' ';
    potenciasPropulsores.innerHTML = propulsor.potencia[0] + ', ' + propulsor.potencia[1] + ', ' + propulsor.potencia[2] + '.';
    potenciaTotal.innerHTML = '0';
    
}


function addPower(){
    // check si está creado el cohete antes de acelerar la potencia
    if (typeof cohete == "undefined") {
        alert('No se puede acelerar un cohete antes de crearlo.');
        return;
    } else {
        potenciaInicial += 10;
    }

    // check si las potencias aceleradas igualan a todas las potencias para saber si seguir aumentando o no
    if ( (potenciasAceleradas.sort().every(function(value, index) {
        return value === todasLasPotencias.sort()[index] }) ) == true ) {
        alert('No se puede acelerar más el cohete; has llegado a la máxima potencia.');
        return;
    } else {
        potenciasAceleradas.forEach(function(elemento, index) {
            if (potenciaInicial <= todasLasPotencias[index]) { 
                potenciasAceleradas[index] = elemento+10;
            } else {
                potenciasAceleradas[index] = elemento;
            }
        })
    }
    
    // print el total de las potencias en el HTML
    potenciaTotal.innerHTML = (potenciasAceleradas.reduce((acumulador, items) => acumulador += items)) + '.';

}



function removePower(){
    if (potenciaInicial == 0) {
        alert('No se puede desacelerar porque la velocidad está en 0. Primero debes acelerar el cohete');
        return;
    } else {
        potenciaInicial -= 10;

        potenciasAceleradas.forEach(function(elemento, index) {
            if (potenciasAceleradas[index] > 0) {
                potenciasAceleradas[index] = elemento - potenciaInicial;
        
            } else if (potenciasAceleradas[index] == 0) {
                potenciasAceleradas[index] = 0;
            } else {
                alert('No se puede desacelerar porque la velocidad está en 0');
            }
        })
    }

    // corregir los números negativos de las potencias
    

    // print el total de las potencias en el HTML
    potenciaTotal.innerHTML = (potenciasAceleradas.reduce((acumulador, items) => acumulador += items)) + '.';
  
}



//cohete = new Cohete('LDSFJA32');
