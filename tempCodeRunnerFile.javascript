const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um número: '));

function validarNumero(numero){
    if(numero > 0){
        console.log('O número é positivo');
    }else if(numero < 0){
        console.log('O número é negativo')
    }else{
        console.log('O número é zero')
    }
};
