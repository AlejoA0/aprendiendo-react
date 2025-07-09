
// Desestructuración
// Asignación desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

/* const { nombre, edad, clave } = persona; */

/* console.log(nombre);
console.log(edad);
console.log(clave); */

const useContext = ({ nombre, edad, rango = 'Capitán', clave }) => {

    /* console.log( nombre, edad, rango ); */

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.321312,
            lng: -1232.213,
        }
    }

}

const { nombreClave, anios, latlng} = useContext(persona);
const { lat, lng } = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);

