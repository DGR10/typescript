/*
    ===== Código de TypeScript =====
    Documentación Oficial: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Miénteme',
    detalles: {
        autor: 'Tini',
        anio: 2021
    }
}

// Desectructuración de objetos
const autor = 'Maria Becerra';
const {volumen, segundo, cancion, detalles:{autor: autorDetalle}} = reproductor;
// const {autor} = detalles;

// console.log(`El volumen actual es de: ${volumen}`)
// console.log(`El segundo actual es de: ${segundo}`)
// console.log(`La cancion actual es de: ${cancion}`)
// console.log(`El autor es: ${autorDetalle}`)

// Desectructuración de arrays

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
// const [p1, p2, p3 ] = dbz;
const [ , , p3 ] = dbz;

// console.log(`Personaje 1: ${p1}`)
// console.log(`Personaje 2: ${p2}`)
console.log(`Personaje 3: ${p3}`)
