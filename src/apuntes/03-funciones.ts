/*
    ===== Código de TypeScript =====
    Documentación Oficial: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

const resultado = multiplicar(5);

console.log(resultado);

interface PersonajeLOR {
    nombre: string;
    vida: number;
    mostrarVida: () => void;
};

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.vida += curarX;
};

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Carlos',
    vida: 50,
    mostrarVida(): void {
        console.log('Puntos de vida: ', this.vida);
    }
};

curar(nuevoPersonaje, 35);
nuevoPersonaje.mostrarVida();