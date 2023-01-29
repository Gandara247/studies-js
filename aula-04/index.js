// x = (a + b - c) / d * e
// se x for par soma 1, se não subtrair 1

// Definindo variáveis
let a = 1151;
let b = 2641; 
let c = 387841;
let d = 45561;
let e = 551651;

// Soma
let x = a + b;
console.log("Soma " + "(" + a + " + " + b + "):", x);

// Subtração
let old_x = x;
x -= c; // forma basica de anotação x = x - c;
console.log("Subritração " + "(" + old_x + " - " + c + "):", x );

//Divisão

old_x = x;
x /= d; // forma básica de anotação x = x /d;
console.log("Divisão " + "(" + old_x + "/" + d + "):", x),

//Multiplicação

old_x = x;

x *= e;
console.log("Multiplicação " + " ( " + old_x + " * " + e + " ): ", x);

//Módulo (resto)
x = parseInt(x); // Ganrate que o valor será inteiro, retira a vírgula

let mod = x % 2;
console.log("Módulo " + " ( " + x + " % 2):", mod);


// incremento e decremento
old_x = x
if( mod === 0){ // o x é par
    //incremento    
    x++; //ou x = x +1 // ou x += 1
    console.log("Incremento " + " ( " + old_x + " ++):", x);
}else{ // o x é impar 
    //decremento
    x--; // x = x -1 // ou x -= 1
    console.log("Decremento " + " ( " + old_x + " --):", x);
}

console.log("Resultado Final ",  x);



