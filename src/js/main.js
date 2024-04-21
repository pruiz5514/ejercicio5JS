const numero = 512;

// Ejercicio 1
console.log("Ejercicio 1");
if(numero>=0){
    console.log("El numero es positivo");
}
else{
    console.log("El numero es negativo");
}
// Ejercicio 2
console.log("Ejercicio 2");
if(-3<0){
    console.log("El numero es negativo");
}
else{
    console.log("El numero es positivo");
}

// Ejercicio 3 y 4
console.log("Ejercicio 3 y 4");
if(numero%2===0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar")
}

// Ejercicio 5
console.log("Ejercicio 5");
if(numero%5===0){
    console.log("El numero es multiplo de 5");
}else{
    console.log("El numero no es multiplo de 5")
}

// Ejercicio 6
console.log("Ejercicio 6");
if(numero%5===0){
    console.log("El numero es divisible entre 3");
}else{
    console.log("El numero es divisible entre 3")
}

// Ejercicio 7
console.log("Ejercicio 7");
if(numero>100){
    console.log("El numero es mayor que 100");
}else{
    console.log("El numero es menor o igual que 100")
}

// Ejercicio 8
console.log("Ejercicio 8");
if(numero<-50){
    console.log("El numero es menor que -50");
}else{
    console.log("El numero es mayor que -50")
}

// Ejercicio 9
console.log("Ejercicio 9");
if(numero<=50 && numero>=20){
    console.log("El numero esta en el rango de 20 a 50");
}else{
    console.log("El numero no esta en el rango de 20 a 50")
}

// Ejercicio 10
console.log("Ejercicio 10");
if(numero === 0){
    console.log("El numero es igual a 0");
}else{
    console.log("El numero no es igual a 0")
}

// Ejercicio 11
console.log("Ejercicio 11");
if(numero>-10 && numero<10){
    console.log("El numero es mayor que -10 y menor que 10");
}else{
    console.log("El numero no es mayor que -10 y menor que 10")
}

// Ejercicio 12
console.log("Ejercicio 12");
if(numero&4 === 0){
    console.log("El numero es un año bisiesto");
}else{
    console.log("El numero no es un año bisiesto")
}

// Ejercicio 13
console.log("Ejercicio 13");
if(numero>=18){
    console.log("Es mayor o igual a 18 años");
}else{
    console.log("Es menor a 18 años");
}

// Ejercicio 15
console.log("Ejercicio 15");
const raiz15 = Math.sqrt(numero);

if(Number.isInteger(raiz15)){
    console.log("El número es un cuadrado perfecto");
}else{
    console.log("El número no es un cuadrado perfecto");
}

// Ejercicio 16
console.log("Ejercicio 16");
const fibonacci = [0,1];

for(let i = 0; i<=numero; i++){
    const lenght = fibonacci.length;
    fibonacci.push(fibonacci[lenght-1]+fibonacci[lenght-2]);
}

if(fibonacci.includes(numero)){
    console.log("El numero es un numero de Fibonacci");
}
else{
    console.log("El numero no es un numero de Fibonacci");
}

// Ejercicio 17
console.log("Ejercicio 17");
const pontencias2 = []

for(let i = 0; i<=numero; i++){
    pontencias2.push(Math.pow(2,i));
}
 if(pontencias2.includes(numero)){
    console.log("El número es una potencia de 2")
 }else{
    console.log("El número no es una potencia de 2")
 }

 // Ejercicio 18
console.log("Ejercicio 18");
numeroString = String(numero);
if(numero == numeroString.split('').reverse().join('')){
    console.log("El número es un palíndromo");
}else{
    console.log("El número no es un palíndromo");
}

// Ejercicio 19
console.log("Ejercicio 19");
const mensaje = "JavaScript es un un lenguaje de programacion 4.";

if(mensaje.includes("JavaScript")){
    console.log("La cadena de texto contiene la palabra JavaScript");
}else{
    console.log("La cadena de texto no contiene la palabra JavaScript");
}

// Ejercicio 20
console.log("Ejercicio 20");
const mensajeSinEspacios = mensaje.split(' ').join('');
if(mensajeSinEspacios.length>10){
    console.log("La cadena tiene más de 10 caracteres");
}else{
    console.log("La cadena no tiene más de 10 caracteres");
}

// Ejercicio 21
console.log("Ejercicio 21"); 
if(mensaje == mensaje.toLocaleLowerCase()){
    console.log("La cadena de texto está en minúsculas");
}else{
    console.log("La cadena de texto no está en minúsculas");
}

// Ejercicio 22
console.log("Ejercicio 22"); 
const mensajeANumero = mensaje.split("").filter(palabra=>(palabra!==" ")).map(palabra=>(Number(palabra)));

const cantidadNumeros = mensajeANumero.filter(elemento => (!isNaN(elemento)));

if(cantidadNumeros.length>0){
    console.log("La cadena de texto contiene al menos un número");
} else{
    console.log("La cadena de texto contiene no contiene un número");
}

// Ejercicio 23
console.log("Ejercicio 23"); 
if(mensaje[mensaje.length-1]==="."){
    console.log("La cadena de texto termina con un punto");
}else{
    console.log("La cadena de texto no termina con un punto");
}

// Ejercicio 24
console.log("Ejercicio 24"); 

const pangrama = "Pack my box with five dozen liquor jugs"
const mensajeMinuscula = pangrama.toLocaleLowerCase();
const abededario = "abcdefghijklmnopqrstuvwxyz";
let letraEsta = true;

for(let i = 0; i<abededario.length; i++){
    if(!mensajeMinuscula.includes(abededario[i])){
        letraEsta = false;
        break;
    }
}

if(letraEsta){
    console.log("La cadena de texto es un pangrama");
}else{
    console.log("La cadena de texto no es un pangrama");
}

// Ejercicio 25
console.log("Ejercicio 25"); 
const dia = "lunes";

if(dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes"){
    console.log("El dia es laboral");
}else{
    console.log("El dia no es laboral");
}

// Ejercicio 26
console.log("Ejercicio 26"); 
const diaFN = "sabado";

if(diaFN === "sabado" || diaFN === "domingo"){
    console.log("El dia es de un fin de semana");
}else{
    console.log("El dia no es de un fin de semana");
}

// Ejercicio 27
console.log("Ejercicio 27"); 

const meses = [1,2,3,4,5,6,7,8,9,10,11,12];
const mes = 1;

if (meses.includes(mes)){
    console.log("número representa un mes válido");
}else{
    console.log("número no representa un mes válido");
}

// Ejercicio 28
console.log("Ejercicio 28"); 

const horas = ["9 AM", "10 AM", "11 AM", "12 PM" , "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM"];
const hora = "1 PM";

if (horas.includes(hora)){
    console.log("La hora esta dentro del rango 9 AM a 6 PM.");
}else{
    console.log("La hora esta fuera del rango 9 AM a 6 PM.");
}

// Ejercicio 29
console.log("Ejercicio 29"); 
const edad = 45;

if(edad>65){
    console.log("La persona es mayor de 65 años");
}else if(edad<18){
    console.log("La persona es menor de 18 años");
}else{
    console.log("La persona tiene entre 65 y 18 años");
}

// Ejercicio 30, 31 y 32
console.log("Ejercicio 30, 31 y 32"); 
const lado1 = 5;
const lado2 = 5;
const lado3 = 5;

if(lado1 == lado2 && lado1 == lado3){
    console.log("El triagulo es equilatero");
}else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
    console.log("El triagulo es isosceles");
}else{
    console.log("El triagulo es escaleno");
}

// Ejercicio 33
console.log("Ejercicio 33"); 
const numero1 = 4;
const numero2 = 8;

if(numero1>(numero2*2)){
    console.log("El numero es mayor que el doble de otro número");
}else{
    console.log("El numero no es mayor que el doble de otro número");
}

// Ejercicio 34
console.log("Ejercicio 34");

if((numero1+numero2)>100){
    console.log("La suma de los dos números es mayor que 100");
}else{
    console.log("La suma de los dos números es menor que 100");
}

// Ejercicio 35
console.log("Ejercicio 35");

if((numero1-numero2)<50){
    console.log("La resta de los dos números es menor que 50");
}else{
    console.log("La resta de los dos números es mayor que 50");
}

// Ejercicio 36
console.log("Ejercicio 36");

if((numero1==(numero2*2)) || (numero2 == (numero1*2))){
    console.log("Un número es el doble del otro número");
}else{
    console.log("Ningun número es el doble del otro número");
}

// Ejercicio 37
console.log("Ejercicio 37");

if(((numero1*2)==(numero2*3)) || ((numero2*2) == (numero1*3))){
    console.log("El doble de un número es igual al triple del otro número");
}else{
    console.log("El doble de un número no es igual al triple del otro número");
}

// Ejercicio 38
console.log("Ejercicio 38");
if((numero1+numero2)==50){
    console.log("La suma de dos números es igual a 50");
}else{
    console.log("La suma de dos números no es igual a 50");
}

// Ejercicio 39
console.log("Ejercicio 39");
if((numero1*numero2)>500){
    console.log("El producto de dos números es mayor que 500");
}else{
    console.log("El producto de dos números es menor que 500");
}

// Ejercicio 40
console.log("Ejercicio 40");
if((numero1/numero2)<10){
    console.log("La división de dos números es menor que 10");
}else{
    console.log("La división de dos números es mayor que 10");
}