// Definimos una función que calcule el factorial de un número dado
function factorial(num) {
    // Validamos que el número dado sea un entero positivo
    if (typeof num !== 'number' || num < 0 || num % 1 !== 0) {
        return undefined;
    }

    // Inicializamos una variable para almacenar el factorial del número
    let fact = 1;

    // Iteramos desde 1 hasta el número dado
    for (let i = 1; i <= num; i++) {
        // Multiplicamos el valor actual de la variable por el número actual de la iteración
        fact *= i;
    }

    // Retornamos el valor final del factorial
    return fact;
}

// Probar la función con un ejemplo
console.log(factorial(5)); // debería imprimir 120 en la consola