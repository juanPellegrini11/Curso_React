import { getHeroeById } from "../../src/base-pruebas/08-imp-exp";
import { getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heores from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {
    
    test('getHeroeaById debe retornar un héroe por ID', () => {
       
        const id = 1;
        const hero = getHeroeById(id);
        
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeaById debe retornar undefined si héroe no existe', () => {
       
        const id = 100;
        const hero = getHeroeById(id);
        
        expect(hero).toBeFalsy();
    });

    test('getHeroesByOwner debe retornar un arreglo con los héroes de DC y Marvel', () => {

        const owner1 = 'DC';
        const owner2 = 'Marvel';

        const heroes1 = getHeroesByOwner(owner1);
        const heroes2 = getHeroesByOwner(owner2);

        expect(heroes1.length).toBe(3);
        expect(heroes2.length).toBe(2);

        expect(heroes1).toEqual(heores.filter( (heroe) => heroe.owner === owner1 ));
        expect(heroes2).toEqual(heores.filter( (heroe) => heroe.owner === owner2 ));
    });
});