/**Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe calcular el factorial del número recibido utilizando recursión.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, 
en caso contrario debe mandar un mensaje de error y volver a solicitar el dato. */

// Le pide al usuario que ingrese un numero y lo guarda en una variable numero
let numero = prompt('Ingrese el Número');

// La pasamos de cadena a valor
numero = parseFloat(numero);

// Verificamos que sea un numero
function factorial(numero) {
    if (isNaN(numero)) {
        console.log(`Error. Ingrese un número válido`);
        return;
    }

    // Se realiza las operaciones
    if (numero === 0) {
        return 1;
    } else {
        // Aquí hay un pequeño error, la variable se llama 'numero' no 'number'
        let resultado = numero * factorial(numero - 1);
        console.log(`El factorial de ${numero} es ${resultado}`);
        return resultado; // Agregamos el return para devolver el resultado
    }
}







