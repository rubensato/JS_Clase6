/*****************************************************
/*****************************************************
-- Lenguajes de Programación para la Administración --

---------- Ejercicios de JavaScript Basico -----------

Descripción
-----------

Se deben resolver cada uno de los siguientes ejercicios y subirlos todos juntos 
a un nuevo repositorio en Github.
Por favor resolverlos en el orden planteado y hacer un commit por cada 
ejercicio resuelto.
Agregar el enunciado de cada ejercicio como comentario en la solución del mismo.

/*----------------------------------------------------

/*****************************************************
******************************************************
*************   A T E N C I O N ! ! !  ***************
******************************************************
******************************************************
***                                                ***
***     Para observar los resultados, abrir la     ***
***     pagina index.html, y abrir la vista de     ***     
***     consola en el navegador (en Chrome, ir     ***
***     a "inspeccionar" y abrir la vista de       ***
***     consola).                                  ***
***                                                ***
***     La pagina index.html ejecuta el            ***
***     archivo ejercicios.js en su apertura.      ***
***                                                ***
***     En la pagina index.html, tambien se        ***
***     observarán los cuadros de alerta de        ***
***     los ejercicios que lo propongan.           ***
***                                                ***
******************************************************
******************************************************
**************   A T E N C I O N ! ! !  **************
******************************************************
******************************************************

/*----------------------------------------------------
Listado de ejercicios:
----------------------
*/

/*>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 1  <<<<<<<<<<<<<<<<<<<<<<<<<*/

/*1.- Completar las condiciones de los if del siguiente script para que los mensajes de los
alert se muestren de forma correcta.*/

    var num1 = 5;
    var num2 = 8;

    if( num1 <= num2 ) {
        alert("num1 no es mayor que num2");
        console.log('1.a) num1 es: ' + num1 + ', y num2 es: ' + num2 + 
        ', num1 no es mayor que num2');
    }

    if( num2 >= 0 ) {
        alert("num2 es positivo");
        console.log('1.b) num2 es: ' + num2 + ', num2 es positivo');
    }

    if( num1 < 0 || num1 != 0 ) {
        alert("num1 es negativo o distinto de cero");
        console.log('1.c) num1 es: ' + num1 + ', num1 es negativo o distinto de cero');
    }

    //cambio el valor de num1 para que se muestre el alerta
    num1 = 7.18;

    if( ( num1 + 1 ) > num2 ) {
        alert("Incrementar en 1 unidad el valor de num1 lo hace mayor que num2");
        console.log('1.d) num1 es: ' + num1 + ', y num2 es: ' + num2 + 
        '. Incrementar en 1 unidad el valor de num1 lo hace mayor que num2');
    }




/*>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 2  <<<<<<<<<<<<<<<<<<<<<<<<<*/

/*2.- Crear un Array que contenga al menos 3 nombres de frutas y utilizar el bucle for in
para recórrelo y mostrar dichos valores con la función console.log*/

    var frutas = ["uva", "manzana", "banana", "pera", "frutilla"];
        
    console.log('2) Los elementos del array son: ' + frutas);

    for (var i = 0; i < frutas.length; i++) {
        console.log('La fruta en el orden ' + i + ' del array frutas es: ' + frutas[i]);
    }




/*>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 3  <<<<<<<<<<<<<<<<<<<<<<<<<*/

/*3.- Al Array del ejercicio anterior utilizarlo para:/*

/*    a.- Ordenar el array alfabéticamente y mostrar el resultado (método sort).*/

    var frutas = ["uva", "manzana", "banana", "pera", "frutilla"];
            
    //muestro los elementos del array
    console.log('3.a) Los elementos del array son: ' + frutas);
        
    //ordeno los elementos del array
    frutas.sort();
        
    //muestro los elementos ordenados del array
    console.log('Los elementos del array frutas son: ' + frutas);



/*    b.- Agregar un elemento al final y al principio del arreglo (métodos push y
        unshift).*/

    var frutas = ["uva", "manzana", "banana", "pera", "frutilla"];
        
    //muestro los elementos del array
    console.log('3.b) Los elementos del array son: ' + frutas);
        
    //Agrego un elemento al final del array
    frutas.push("ananá");
        
    //Quito un elemento al principio del array
    frutas.unshift("maracuyá");

    //muestro los elementos ordenados del array
    console.log('Los elementos del array frutas, agregando al principio y al final, son: ' + frutas);

        
    
/*    c.- Eliminar un elemento al final y al principio del arreglo (métodos pop y
        shift).*/
    
    var frutas = ["uva", "manzana", "banana", "pera", "frutilla"];
    
    //muestro los elementos del array
    console.log('3.c) Los elementos del array son: ' + frutas);
        
    //Quito un elemento al final del array
    frutas.pop();
        
    //Quito un elemento al principio del array
    frutas.shift();

    //muestro los elementos ordenados del array
    console.log('Los elementos del array frutas, sin el primero y el último, son: ' + frutas);

        
    
/*    d.- Invertir el orden de los elementos en el array (método reverse).*/

    var frutas = ["uva", "manzana", "banana", "pera", "frutilla"];
                
    //muestro los elementos del array
    console.log('3.d) Los elementos del array son: ' + frutas);
        
    //Invierto el orden de los elementos del array
    frutas.reverse();
        
    //muestro los elementos ordenados del array
    console.log('Los elementos del array frutas, inviertiendo su orden, son: ' + frutas);



/*    e.- Recorrer el array utilizando el bucle while (usar la propiedad length del array
        en la condición) y guardar los valores en una variable del tipo string
        concatenandolos. Mostrar el valor de la variable al final.*/

    var frutas = ["uva", "manzana", "banana", "pera", "frutilla"];
    
    console.log('3.e) Los elementos del array son: ' + frutas);

    var i = 0;
    var cadenaFrutas = "";
    
    while (i < frutas.length) {
        cadenaFrutas += frutas[i];
        i ++;
    }

    console.log('El contenido de la variable cadenaFrutas es: ' + cadenaFrutas);



/*    f.- Recorrer el array utilizando el bucle for y mostrar cada uno de los valores
        convirtiéndolos a mayúsculas (método toUpperCase de la clase String).*/

        var frutas = ["uva", "manzana", "banana", "pera", "frutilla"];
        
        console.log('3.f) Los elementos del array son: ' + frutas);
        
        console.log('Convirtiendo todos los valores en mayúsculas, obtenemos:');
        
        for (var i = 0; i < frutas.length; i++) {
            console.log('La fruta en el orden ' + i + ' del array frutas es: ' + frutas[i].toUpperCase());
        }
    
    






/*>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 4  <<<<<<<<<<<<<<<<<<<<<<<<<*/

/*4.- Crear una variable que contenga el valor 'La Manzana es Verde' y utilizarlo para:*/

/*    a.- Convertirlo a minúscula y mostrar el resultado (método toLowerCase).*/


/*    b.- Obtener los últimos 4 caracteres del string (método substring).*/


/*    c.- Obtener los caracteres 3, 4 y 5 del string (método substring).*/


/*    d.- Obtener un array con las palabras que hay en el string, asumiendo que cada
        palabra termina cuando se encuentra el carácter espacio (método split).*/





/*>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 5  <<<<<<<<<<<<<<<<<<<<<<<<<*/

/*5.- Crear una función que reciba como parámetro un string y que devuelva ese mismo
string con la primera letra convertida a mayúscula.*/





/*>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 6  <<<<<<<<<<<<<<<<<<<<<<<<<*/

/*6.- Crear una función que reciba como parámetro un string y que devuelva ese mismo
string con la primera letra DE CADA PALABRA convertida a mayúscula.*/






/*>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 7  <<<<<<<<<<<<<<<<<<<<<<<<<*/

/*7.- Crear una función que reciba como parámetro un string y que devuelva la cantidad
de vocales que posee.*/





/*>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 8  <<<<<<<<<<<<<<<<<<<<<<<<<*/

/*8.- Dado el siguiente código determinar qué valores poseerán las variables miNumero y
miArray al final del script.*/

    function miFuncion(unNumero, unArray){
        ++unNumero;
        unArray.pop();
    }
    var miNumero = 15;
    var miArray = ['Un texto', true, 4, 5];
    miFuncion(miNumero, miArray);



