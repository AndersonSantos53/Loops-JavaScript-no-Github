

let idade, idademenor = 0, idedemaior = 0

while(idade != -99){
    idade = Number(prompt('Idade: '));

    if(idade < 21 && idade > 0){
        idademenor++;
    }else if(idade > 50){
        idedemaior++;
    }
}
console.log(`\nTotal de Idades menores que 21: ${idademenor}`);
console.log(`Total de Idades maiores que 50: ${idedemaior}`);
