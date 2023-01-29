// Definir minhas variáveis 
let Jarra = 100;
let cafeteira = {
    po: true,
    agua: true,
    ligada: true,
    cafe_pronto: true,
}
let xicara = 100;

// Fazer café 
if(100 > Jarra){ //preciso fazer café
    console.log("Fazendo um novo café quantinho... :)");
    if(cafeteira.po == false){
        cafeteira.po = true;
    }
    if(cafeteira.agua == false){
        cafeteira.agua = true;
    }
    // cafeteira.ligada = true;
    // cafeteira.po = true;
    // cafeteira.agua = true
    if(cafeteira.ligada){ //if(cafeteira.ligada && cafeteira.po && cafeteira.agua)
        console.log("Ligando a cafeteira ...");
        cafeteira.ligada = true;
    }

    cafeteira.cafe_pronto = true;
    Jarra = 100;    

}else if(xicara == 0){ // tomar café
    //encher xicara
    if(cafeteira.cafe_pronto){
        xicara = 100;
        Jarra -=100;
    }
    console.log("Café quantinho na xícara, que tal um golinho de felicidade?")
}else if(Jarra > 100){ //jarra derramando
    //elerta de jarra derramando
    console.log("Jarra está cheia demais, cuidado...");
}else{ //manter café quante
    //aquecer café
    cafeteira.ligada = true;
    console.log("Estamos mantendo o seu café quentinho... :)")
}




