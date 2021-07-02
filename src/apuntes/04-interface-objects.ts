/*
    ===== Código de TypeScript =====
    Documentación Oficial: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string,
    pais: string,
    ciudad: string
}
const superHeroe = {
    nombre: 'Batman',
    edad: 30,
    direccion: {
        calle: 'Nueva',
        pais: 'España',
        ciudad: 'Ciudad Real'
    },
    mostrarDireccion() {
        return `${this.nombre}, ${this.direccion.ciudad}, ${this.direccion.pais}`
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion );