// import { heroes } from './data/heroes.js';
/* import { heroes } from './data/heroes.js'; */

import heroes, { owners } from '../data/heroes';

/* console.log(owners); */

export const getHeroeById = (id) => heroes.find( ( heroe ) => heroe.id === id );

/* console.log( getHeroeById(2) ); */

// find no sirve en este caso - usar filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner);
/* console.log( getHeroesByOwner('DC') ); */

