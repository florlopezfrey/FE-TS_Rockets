class Cohete {
    nombre: string;
    propulsores: Propulsor[] = new Array();

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    addPropulsor(propulsor: Propulsor): void {
        this.propulsores.push(propulsor);
    }
}

