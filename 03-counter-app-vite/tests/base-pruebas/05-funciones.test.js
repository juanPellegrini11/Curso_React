import { getUser } from "../../src/base-pruebas/05-funciones";
import { getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    
    test('getUsuer debe retornar un objeto', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {

        const name = 'Juan';

        const testUsuarioActivo = ( name ) =>({
            uid: 'ABC567',
            username: name
        });

        const userActivo = getUsuarioActivo(name);

        expect(testUsuarioActivo(name)).toEqual(userActivo);
    });
});