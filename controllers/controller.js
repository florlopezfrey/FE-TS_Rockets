"use strict";
// valores a mostrar en el HTML
var displayCohete1 = document.getElementById('displayCohete1');
var displayNombreCohete = document.getElementById('displayNombreCohete');
var displayCantPropulsores = document.getElementById('displayCantPropulsores');
var displayPotenciasPropulsores = document.getElementById('displayPotenciasPropulsores');
var displayPotenciaTotal = document.getElementById('displayPotenciaTotal');
// datos de los models
var cohete;
var propulsor;
// variables para usar en las funciones
var potenciaInicial = 0;
var cantProp = 0;
var todasLasPotencias;
var potenciasAceleradas; // acá se va actualizando el valor de la potencia de cada propulsor
function createRocket() {
    var nombreCohete = (document.getElementById('nombreCohete').value).toUpperCase();
    cantProp = Number(document.querySelector('input[name="cantPropulsores"]:checked').value);
    if (nombreCohete == '') {
        alert('Debes completar el nombre del cohete y elegir la cantidad de propulsores');
        return;
    }
    else if (cantProp === 3) {
        todasLasPotencias = [10, 30, 80];
        potenciasAceleradas = [0, 0, 0];
    }
    else if (cantProp === 6) {
        todasLasPotencias = [30, 40, 50, 50, 30, 10];
        potenciasAceleradas = [0, 0, 0, 0, 0, 0];
    }
    cohete = new Cohete(nombreCohete);
    propulsor = new Propulsor(cantProp, todasLasPotencias);
    displayCohete1.setAttribute("style", "visibility: visible;");
    displayNombreCohete.innerHTML = cohete.nombre;
    displayCantPropulsores.innerHTML = propulsor.cantidad + ' ';
    displayPotenciasPropulsores.innerHTML = todasLasPotencias + '.';
    displayPotenciaTotal.innerHTML = '0';
}
function addPower() {
    // check si está creado el cohete antes de acelerar la potencia
    if (typeof cohete == "undefined") {
        alert('No se puede acelerar un cohete antes de crearlo.');
        return;
    }
    else {
        potenciaInicial += 10;
        // check si las potencias aceleradas igualan a todas las potencias para saber si seguir aumentando o no
        if ((potenciasAceleradas.sort().every(function (value, index) {
            return value === todasLasPotencias.sort()[index];
        })) == true) {
            alert('No se puede acelerar más el cohete ' + cohete.nombre + '; has llegado a la máxima potencia.');
            return;
        }
        else {
            potenciasAceleradas.forEach(function (elemento, index) {
                if (potenciaInicial <= todasLasPotencias[index]) {
                    potenciasAceleradas[index] = elemento + 10;
                }
                else {
                    potenciasAceleradas[index] = elemento;
                }
            });
        }
    }
    // print el total de las potencias en el HTML
    displayPotenciaTotal.innerHTML = (potenciasAceleradas.reduce(function (acumulador, items) { return acumulador += items; })) + '.';
}
function removePower() {
    if (potenciaInicial == 0) {
        alert('No se puede desacelerar porque la velocidad está en 0. Primero debes acelerar el cohete');
        return;
    }
    else {
        potenciaInicial -= 10;
        potenciasAceleradas.forEach(function (elemento, index) {
            if (elemento > 0) {
                potenciasAceleradas[index] = elemento - 10;
            }
            else if (elemento == 0) {
                potenciasAceleradas[index] = elemento;
            }
            else {
                alert('algo ha fallado');
            }
        });
    }
    // print el total de las potencias en el HTML
    displayPotenciaTotal.innerHTML = (potenciasAceleradas.reduce(function (acumulador, items) { return acumulador += items; })) + '.';
}
// para mostrar por pantalla los diferentes cohetes que voy generando, puedo hacer un array con estos cohetes y printearlos
