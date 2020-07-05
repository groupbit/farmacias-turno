class Farmacia{
    constructor(nombre,direccion,fechas) {
        this.nombre = nombre;
        this.direccion= direccion;
        this.fechas = [fechas];
    }
}

module.exports = Farmacia;