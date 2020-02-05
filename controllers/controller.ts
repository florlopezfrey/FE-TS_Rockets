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
var potenciasAcumuladas = 0; // esta variable acumula la suma de aceleres/desaceleres



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
    potenciaTotal.innerHTML = potenciasAcumuladas + '.';
    
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
    
        
    potenciasAcumuladas = potenciasAceleradas.reduce((acumulador, items) => acumulador += items);
    potenciaTotal.innerHTML = potenciasAcumuladas + '.';


    
    // **** ESTO FUNCIONA PERO A VER ******
    // potenciasAceleradas = todasLasPotencias.map(
    //     function(valorArray) {
    //         if (potenciaInicial <= valorArray) { 
    //             return potenciaInicial;
    //         } else {
    //             return valorArray;
    //         }
    //     }
    // );

}



function removePower(){
    console.log('al desacelerar inicio las potAcum son: '+potenciasAcumuladas);
    if (potenciaInicial == 0) {
        alert('No se puede desacelerar porque la velocidad está en 0. Primero debes acelerar el cohete');
        return;
    }

    // var mapFP = potenciasAceleradas.map(
    //     function(valorArray) {
    //         if (valorArray >= 10) {
    //             return valorArray -=10;
    //         } else {return 0;}
    //     }
    // );

    // console.log('map: '+mapFP);
    // potenciasAcumuladas -= (mapFP.reduce((acumulador, items) => acumulador += items));
    // potenciaTotal.innerHTML = potenciasAcumuladas + '.';

    // console.log('al desacelerar fin las por acum: '+potenciasAcumuladas);

     // ******>>>>>>>> probar de hace run foreach en vez de un map, porque el map genera un nuevo array mientras que el foreach aplica la funcion a cada item del array. Aca no necesito un nuevo array sino modficar el existente <<<<<<<<<<<<<<<<<<<<<<<

     potenciasAceleradas.forEach(function(item) {
         item = item - 10;
        return item;
      })

      console.log(potenciasAceleradas);
      var numerosFP =      [1,2,3,4];
    
      numerosFP.forEach((elemento, index) => numerosFP[index] = elemento+10);

      console.log('array for each: '+numerosFP);
      
  
}



//cohete = new Cohete('LDSFJA32');
