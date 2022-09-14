
let cont = 0
let cont1 = 0 

for(let i = 0; i < 10; i++){
   let numero1 =prompt ('digite o numero: ');
    let numero = Number (numero1);
    if (numero % 2 == 0){
        cont++
    }
    else if (numero % 2 == 1){
        cont1++
        
    }
}
   document.write(` São ${cont} pares`);
   document.write(`<br> São ${cont1} impares`);