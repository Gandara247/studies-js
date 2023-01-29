//Validando com função
const title = 'Gama';
const age = 18;

if (isString(title)){
    console.log('ok');
};

/**
 * 
 * 
 * @param {string} value recebe um valor e retorna tru caso seja uma string
 * @example const name = '';IsString(name)
 * @returns 
 */
function isString(value){
    if (typeof value !== 'string') return true;
};

//Função anônima / Arrow Functions
const IsNumber = (value) => {
    if (typeof value === 'number') return true;

};


if (IsNumber(age)){
    console.log('ok')
}

//Função auto-executavel
(() => {
    console.log('Olá')
})();

