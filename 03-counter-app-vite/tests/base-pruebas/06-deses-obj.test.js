import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
    
    test('usContext debe retornar un objeto', () => {
        
        const clave = 'Ironman';
        const name = 'Juan';
        const rango = 'Capitán';
        const edad = 45;
        const latlng = {
            lat: 14.1232,
            lng: -12.3232
        };

        const usContexto = usContext({clave, name, edad, rango});

        expect({nombreClave: clave, anios: edad, latlng}).toEqual(usContexto);
    });
});