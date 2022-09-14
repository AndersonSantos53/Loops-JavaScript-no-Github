let i = 0;
let pCalmas = 0;
let pNervosas = 0;
let pAgressivos = 0;
let pOCalmos = 0;
let pNervosos40 = 0;
let pCalmos18 = 0;


while (i < 150) {
  const idadeS = prompt('Digite a idade: ');
  const idade = Number(idadeS);
  console.log('Escolha o Sexo entre:\n\n');
  console.log('1 - Homem\n');
  console.log('2 - Mulher\n');
  console.log('3 - Outros\n');
  const sexoS = prompt('Escolha a o sexo: ');
  const sexo = Number(sexoS);
  console.log('Escolha um humor entre:\n\n');
  console.log('1 - Calmo\n');
  console.log('2 - Nervoso\n');
  console.log('3 - Agressivo\n');
  const humorS = prompt('Escolha a o humor: ');
  const humor = Number(humorS);

  if (humor == 1) {
    pCalmas++;
  }

  if (sexo == 2 && humor == 2) {
    pNervosas++;
  }

  if (sexo == 1 && humor == 3) {
    pAgressivos++;
  }

  if (sexo == 3 && humor == 1) {
    pOCalmos++;
  }

  if (humor == 2 && idade > 40) {
    pNervosos40++;
  }

  if (humor == 1 && idade < 18) {
    pCalmos18++;
  }

  i++;
}

console.log(`\nO total de pessoas calmas é: ${pCalmas}`);

console.log(`\nO total de mulheres nervosas é: ${pNervosas}`);

console.log(`\nO total de homens agressivos é: ${pAgressivos}`);

console.log(`\nO total de outros calmos é: ${pOCalmos}`);

console.log(`\nO total de nervosos com mais de 40 anos é: ${pNervosos40}`);

console.log(`\nO total de calmos até 18 anos é:  ${pCalmos18}`);