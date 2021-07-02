/*
    ===== Código de TypeScript =====
    Documentación Oficial: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

interface Producto {
    descripcion: string,
    precio: number
}

const telefono: Producto = {
    descripcion: 'Samsung S10',
    precio: 850
}

const tableta: Producto = {
    descripcion: 'Samsung 5',
    precio: 750
}

function calculaISV(productos: Producto[]): [number, number] {
    let total = 0;

   productos.forEach(({precio}, i, arr) => {
       total += precio;
   });
   
   return [total, total * 0.15];
}

const productos = [telefono, tableta];

const [total, isv] = calculaISV(productos);

console.log('Total: ', total);
console.log('ISV: ', isv);