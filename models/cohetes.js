"use strict";
var Cohete = /** @class */ (function () {
    function Cohete(nombre) {
        this.propulsores = new Array();
        this.nombre = nombre;
    }
    Cohete.prototype.addPropulsor = function (propulsor) {
        this.propulsores.push(propulsor);
    };
    return Cohete;
}());
