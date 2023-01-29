//string
let container_verde = "texto";
console.log("container_verde: " + typeof (container_verde));
//Inteiro
let container_azul = 10;
console.log("contaiber_azul: " + typeof (container_azul));
//Float
let container_branco = 1.25;
console.log("contaiber_branco: " + typeof (container_branco));
//Boolean
let container_amarelo = true;
console.log("contaiber_amarelo: " + typeof (container_amarelo));
let container_amareloclaro = false;
console.log("contaiber_amareloclaro: " + typeof (container_amareloclaro));
//Array
let navio = [];
navio[0] = container_verde;
navio.push(container_azul);
navio.push(container_branco);
navio.push(container_amarelo);
navio.push(container_amareloclaro);
console.log("Navio " + typeof (navio));
//Object
let carro = {};
carro = {
    cor: "preto",
    marca: "ford",
    modelo: "focus",
    ano: "2009",
};
console.log("Carro " + typeof (carro));
navio.push(carro);
//Null
container_azul = null;
console.log("container_azul: " + typeof (container_azul));
//Undefined
let container_preto;
console.log("container_preto " + typeof (container_preto));
// navio.push(container_preto); como não tem valor, na impresão estava aparecendo apenas , por isso está comentada 

//Array 1.2.0
console.log("Navio: " + navio);
console.log("Carro");
console.log(navio[5]);

let focus = navio.pop();
console.log("Navio: " + navio);
console.log("Focus: ");
console.log(focus);

// Object
console.log("Focus ano: ");
console.log(focus.ano); 
// adicionando item no object
focus.placa = "xxx-xxx";
console.log("Focus: ");
console.log(focus);
// alterando iten já exixtente no object
focus.ano = "2023";
console.log("Focus: ");
console.log(focus);