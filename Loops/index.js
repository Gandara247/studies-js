// Lista de produtos 
let produtos = [
    {
        codigo: 1,
        validade: new Date("2050-08-07")//criando uma data  em JS
    },
    {
        codigo: 2,
        validade: new Date("2050-08-08")
    },
    {
        codigo: 3,
        validade: new Date("2050-08-06")
    },
    {
        codigo: 4,
        validade: new Date("2050-04-08")
    },
    {
        codigo: 5,
        validade: new Date("2050-08-10")
    },
    {
        codigo: 6,
        validade: new Date("2050-05-08")
    }
];

//Verificar a validade de cada produto da lista

for(let i = 0; i < produtos.length; i++){
    if(produtos[i].codigo == 4){
        continue;
    }
    if(produtos [i].validade < new Date("2050-08-01")){
        console.log("Código " + produtos[i].codigo + ": Produto vencido");
        break;//para imediatamente
    }else{
        console.log("Código " + produtos[i].codigo +": Produto dentro do prazo de validade");
    }
}

// Essa forma abaixo é a forma que não devo fazer, pois
// criaria uma pilha de códico para cada produdo
// devemos usar o FOR e dentro do FOR usar o i conforme acima

// if(produtos[0].validade < new Date("2050-08-01")){
//     console.log("Produto vencido");
// }else{
//     console.log("Produto dentro do prazo de validade");
// }

// if(produtos[1].validade < new Date("2050-08-01")){
//     console.log("Produto vencido");
// }else{
//     console.log("Produto dentro do prazo de validade");
// }