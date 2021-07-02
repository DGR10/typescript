/*
    ===== Código de TypeScript =====
    Documentación Oficial: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

import { calculaISV, Producto } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
    {
        descripcion: 'Telefono 1',
        precio: 420
    },
    {
        descripcion: 'Telefono 2',
        precio: 741
    },
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total: ', total);
console.log('ISV: ', isv);