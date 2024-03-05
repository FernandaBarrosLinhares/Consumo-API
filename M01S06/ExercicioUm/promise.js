
//Exercício 1 

function numeroPar(numero){
    return new Promise((resolve, reject) => {
        if (numero % 2 === 0) { 
            resolve(`Número validado é par`);
``
        } else { 
            reject(new Error('Error:número informado é impar'));
    }
    });

}

    numeroPar(10)
      .then((mensagem) => {
        console.log(mensagem)
     })
     .catch((erro)=> {
       console.error(error.menagem)
     })
    


