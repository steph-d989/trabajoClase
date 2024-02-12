/*Ejercicio 1
Crea una función que pida un número por parámetro y guarde su tabla de multiplicar en un array. El array será el valor devuelto por la función
Ejemplo --> Tabla del 3 --> ["3x1=3","3x2=6","3x3=9","3x4=12","3x5=15","3x6=18","3x7=21","3x8=24","3x9=27","3x10=30"]*/
/*
function tablaMultiplicar(num){
 let numero = 0;
 let tabla =[];
 for(i=0;i<=12; i++){
    numero=num*1;
    tabla.push(num+'x'+i+'='+numero);
 }
 return tabla;
}

console.log(tablaMultiplicar(5));
*/

/*Ejercicio 2
Crea una función que pida números por teclado (prompt) y mételos en un array. Cuando el usuario meta un 0, dejaremos de insertar(habrá que usar 
un bucle que pregunte constantemente). Por último, ordena los números ordenados de menor a mayor y devuelve el array. Prompt() devuelve un string. 
hay que convertirlo a entero con parseInt() https://www.tutorialspoint.com/how-to-convert-a-string-into-integer-in-javascript*/

function ingresaConsola(){

    let array=[];
    while (numero != 0);
    do {

        let array[i] = prompt('Ingresa el numero: ')
        for (let i = 0; i < array.length; i++) {
            array.push(numero);
            }
    } 
    
    }

/*Ejercicio 3
Escriba un programa que pida un año y que escriba si es bisiesto o no. Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos 
de 100 no lo son, aunque los múltiplos de 400 sí. (editado) */