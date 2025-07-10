
// Funciones en JS

function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar('Alejandro'));

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi123',
    }
}

const user = getUser();
console.log(user);

// Tarea
/* 1. Transformen a una función de flecha */
/* 2. Tiene que retornar un objeto implícito */
/* function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre,
    }
}; */

const getUsuarioActivo = (nombre) => ({uid: 'ABC577', username: nombre});
const usuarioActivo = getUsuarioActivo('Alejandro');
console.log(usuarioActivo)