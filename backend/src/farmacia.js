class Farmacia{
    constructor(nombre,estado,direccion,fechas) {
        this.nombre = nombre;
        this.deTurno = estado;
        this.direccion= direccion;
        this.fechas = [];
    }
}

module.exports = Farmacia;