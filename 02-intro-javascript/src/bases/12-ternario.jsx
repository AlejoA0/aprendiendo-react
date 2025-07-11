

const activo = true;

/* let mensaje = '';

if ( activo ) {
    mensaje = 'Activo';
} else {
    mensaje = 'Inactivo';
} */

/* const mensaje = ( activo ) ? 'Activo' : 'Inactivo'; */
/* const mensaje = ( !activo ) ? 'Activo' : null; */
const mensaje = activo && 'Activo';
// * Este mensaje significaría lo siguiente
// * ( activo === true ) clg('Activo');

console.log( mensaje );


