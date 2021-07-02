/*
    ===== Código de TypeScript =====
    Documentación Oficial: https://www.typescriptlang.org/docs/handbook/basic-types.html
    Decoradores: https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators
*/

interface Pasajero {
    nombre: string,
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: 'Carlos'
}

const pasajero2: Pasajero = {
    nombre: 'Manuel',
    hijos: ['Daniel', 'María']
}

function imprimeHijos( pasajero: Pasajero): void {
    const numeroHijos = pasajero.hijos?.length || 0;

    console.log(numeroHijos);
}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);