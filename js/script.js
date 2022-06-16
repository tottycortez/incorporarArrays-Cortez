// Pedimos al usuario que ingrese sus canciones que se irán agregando a la lista.
let cancion = prompt("Ingrese su canción: ");
// lista vacia con la cual llenaremos de las canciones.
const lista = [];
// Bucle donde se repite la consigna hasta que el usuario presione la opción indicada. 
while (cancion != 'ESC') {
    // Empuja la cancíon agregada a la lista.
    lista.push(cancion);
    // Solicita al usuario ingresar otra canción o finalizar el bucle.
    cancion = prompt("Ingrese otra canción o presione ESC para salir.");
}
for (let i = 0; i < lista.length; i++) {
    alert("Se posicionó " + i + ". " + lista[i]);
}