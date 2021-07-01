/*
    ===== Código de TypeScript =====
    Documentación Oficial: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

let habilidades: string[] = ['Bash', 'Counter'];

interface Personaje {
    nombre: string;
    vida: number;
    habilidades: string[];
    puebloNatal?: string; // ? -> Optional
}

const personaje: Personaje = {
    nombre: 'Carlos',
    vida: 100,
    habilidades: ['Correr', 'Comer'],
};

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);