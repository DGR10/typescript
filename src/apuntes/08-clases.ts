/*
    ===== Código de TypeScript =====
    Documentación Oficial: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

class PersonaNormal {
    constructor(
        public nombre: string,
        public direccion: string
    ) {};
}

class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        super( nombreReal, 'New York, USA');
    };
}

const iroman = new Heroe('Iroman', 45, 'Tony');

console.log(iroman);