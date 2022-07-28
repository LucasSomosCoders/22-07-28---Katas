let array=[]
function contador(){
    for(i = 0; i <= 100; i++){
    let div3 = (i % 3) == 0;
    let div5 = (i % 5) == 0;
    if(div3 && div5){
    array[i] = "fizzbuzz"
   }
    else if(div5){
   array[i] = "fizz"
    }
    else if(div3){
    array[i] = "buzz"
    }
    else { 
        array[i]=i
    }
  }
}
contador()
console.log(array)

function verificarFizzbuzz(numero) {
    let resultado = '';
    
    if(numero % 3 === 0){
      resultado = 'fizz';
    }

    if(numero % 5 === 0){
      resultado += 'buzz'
    }
    
    if(resultado === '')
      	resultado = numero;
    
    return resultado;
}

for(i = 0; i <= 100; i++){
  console.log(verificarFizzbuzz(i));
}

