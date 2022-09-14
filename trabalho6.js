let numero
let media = 0
let cont = 0
let soma = 0

do {

    numero = Number(prompt('escreva um numero: ')); 
    soma = soma + numero;

    if (numero % 3==0){
        cont++
    }

} while (numero !=0 );

media = soma / (cont - 1);

 console.log (`Média dos multiplos de 3: ${media}`);