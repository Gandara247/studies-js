// Calculo dos ingredientes
function calculoIgredientes() {
    let ing1 = 1.00;
    let ing2 = 2.00;
    let ing3 = 3.00;

    let preco_ing = ing1 + ing2 + ing3;
    console.log("Valor Ingredientes: ", preco_ing);

    return preco_ing;
}

//Calculo da porcentagem da confeitera 
function calculoConfeiteira(preco_conf) {
    let porc_conf = 30;
    preco_conf += preco_conf * porc_conf / 100;
    console.log("Valor confeiteira: ", preco_conf);

    return preco_conf;
}

//Calculo das despesas de produção 
function calculaDespesdas(preco_desp) {
    preco_desp += 5;
    console.log("Valor das despesas: ", preco_desp);

    return preco_desp;
}

//Calculo dos custos fixos Function convencional
// function calculoCustosFixos(preco_cust) {
//     preco_cust += 10;
//     console.log("Valor custos: ", preco_cust);

//     return preco_cust;
// }

// Calculo de custos Function Arrow

calculoCustosFixos = (preco_cust) => preco_cust += 10;



//Calculo do Lucro Function convencional 
// function calculoLucro(preco_lucro) {
//     let lucro = 0.25;
//     preco_lucro += preco_lucro * lucro;
//     console.log("Valor do Lucro: ", preco_lucro);

//     return preco_lucro;
// }

// Calculo de lucro Function Arrow nesse caso abaixo não vele a pena, a quantidade de linhas é a mesma 

calculoLucro = (preco_lucro) => {
    let lucro = 0.25;
    preco_lucro += preco_lucro * lucro; 
    console.log("Valor do Lucro: ", preco_lucro);
    return preco_lucro;    
}




let preco_final = calculoIgredientes();
preco_final = calculoConfeiteira(preco_final);
preco_final = calculaDespesdas(preco_final);
preco_final = calculoCustosFixos(preco_final);
console.log("Valor custos: ", preco_final);
preco_final = calculoLucro(preco_final);

// Retornar o preço final
console.log("Preço final de venda: ", preco_final);
