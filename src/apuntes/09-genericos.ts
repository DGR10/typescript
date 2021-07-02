/*
    ===== Código de TypeScript =====
    Documentación Oficial: https://www.typescriptlang.org/docs/handbook/basic-types.html
*/

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumber = queTipoSoy(100);
let soyBoolean = queTipoSoy(false);
let soyArray = queTipoSoy([1,2,3,4,5,6,7,8,9,10]);

let soyExplicito = queTipoSoy<number>(100);
