
// * Código con promesa
/* const getImagenPromesa = () => 
    new Promise( resolve => resolve('https://fjljfljfljks.com') );
getImagenPromesa().then(console.log); */

// * Código con Await
const getImagen = async () => {

    try {
        const apiKey = 'S3GsbDVmopDEaklJ3lZPQJ4YMH7PyZex';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await respuesta.json();

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        console.warn('Error: ', error);
    }
}

getImagen();
