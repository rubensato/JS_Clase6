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

    if(...) {
        alert("num1 no es mayor que num2");
    }

    if(...) {
        alert("num2 es positivo");
    }

    if(...) {
        alert("num1 es negativo o distinto de cero");
    }

    if(...) {
        alert("Incrementar en 1 unidad el valor de num1 lo hace mayor que num2");
    }




/*>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 2  <<<<<<<<<<<<<<<<<<<<<<<<<*/

/*2.- Crear un Array que contenga al menos 3 nombres de frutas y utilizar el bucle for in
para recórrelo y mostrar dichos valores con la función console.log*/




/*>>>>>>>>>>>>>>>>>>>>>>  EJERCICIO 3  <<<<<<<<<<<<<<<<<<<<<<<<<*/

/*3.- Al Array del ejercicio anterior utilizarlo para:/*

/*    a.- Ordenar el array alfabéticamente y mostrar el resultado (método sort).*/


/*    b.- Agregar un elemento al final y al principio del arreglo (métodos push y
        unshift).*/
    
    
/*    c.- Eliminar un elemento al final y al principio del arreglo (métodos pop y
        shift).*/
    
    
/*    d.- Invertir el orden de los elementos en el array (método reverse).*/


/*    e.- Recorrer el array utilizando el bucle while (usar la propiedad length del array
        en la condición) y guardar los valores en una variable del tipo string
        concatenandolos. Mostrar el valor de la variable al final.*/


/*    f.- Recorrer el array utilizando el bucle for y mostrar cada uno de los valores
        convirtiéndolos a mayúsculas (método toUpperCase de la clase String).*/





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



