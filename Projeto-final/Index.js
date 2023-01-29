const prompt = require("prompt-sync")({sigint: true}); // Biblioteca para capturar imputs de textos do usuário no sonsole

// Receber o pedido 
function recebePedido(){
    let pedido = {
        sabor: null,
        confeitos: null,
    };
        //Qual o sabor do bolo?
        pedido.sabor = prompt("Qual o sabor do bolo? ");        
        //Quais confeitos deseja?
        pedido.confeitos = prompt("Quais confeitos deseja? ");
        return pedido;
};

//Preparar o pedido
function prepararPedido(pedido){
    //separar ingredientes
    let ingredientes_base = separarIngredientes(pedido);
    //Misturar bolo
    let tabuleiro = misturarBolo(pedido, ingredientes_base);
    //Colocar no forno
    let bolo = colocarForno(tabuleiro);
    //Confeitar
    bolo = confeitar(pedido, bolo);
    return bolo;

}

function separarIngredientes(pedido){
    let ingredientes_base = "ovos, leite, farinha, fermento";
    return ingredientes_base;
}

function misturarBolo(pedido, ingredientes_base){
    return pedido.sabor + ", " + ingredientes_base;
}

function colocarForno(tabuleiro){
    return "Bolo de " + tabuleiro;
}

function confeitar(pedido, bolo){
    return bolo + ". Confeitado com " + pedido.confeitos;
}
    
//Calcular o preço
function calcularPreco(){
    //Valor dos ingredientes
    let preco_final = calculaIngredientes();
    // Valor da confeiteira
    preco_final = calculaConfeiteira(preco_final);
    //Valor das despesas de produção 
    preco_final = calculaDespesas(preco_final);
    //Valor dos gastos fixos
    preco_final = calculaGastos(preco_final);
    //Valor do lucro
    preco_final = calculaLucro(preco_final);
    //Retornar preço final
    return preco_final;
}

function calculaIngredientes(){
    return 10.00;
}

function calculaConfeiteira(preco_calc){
    return preco_calc += preco_calc * 0.30;
}

function calculaDespesas(preco_calc){
    return preco_calc += 5.00;
}

function calculaGastos(preco_calc){
    return preco_calc += 15.00;
}

function calculaLucro(preco_calc){
    return preco_calc += preco_calc * 0.25;
}

    
//Entregar pedido
function entregaPedido(bolo, preco){
        //Exibir/Entregar bolo para o cliente
        console.log("Pedido pronto!!!");
        console.log("Aproveite o seu " + bolo);
        //Exibir preço para o cliente 
        prompt("Seu pedido ficou em R$: " + preco + ". Qando terminar de comer, clique ENTER para pagar...");
}

//Receber o dinheiro
function recebeerDinheiro(preco){
     //Receber dinheiro do cliente
     let valor_pago = prompt("Digite o valor para pagar: ");
     for(; valor_pago != preco;){
        valor_pago = prompt("Você digitou o valor incorreto, digite o valor correto para pagar!");
     }
    //Fechar o pedido e agradecer
    prompt("Muito obrigado e volte sempre!!!");

}

let pedido = recebePedido();
let bolo = prepararPedido(pedido);
let preco = calcularPreco();
entregaPedido(bolo, preco);
recebeerDinheiro(preco);
