//Exercicio 2

function getUserInfo (){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const userInfo ={
                nome: 'Fernanda',
                idade: 43,
                email: 'fernanda@email.com'
            };
            resolve(userInfo);
        }, 2000); 
      
     });
 }
async function exibirUserInfo(){
    try{
        const userInfo = await getUserInfo();
        console.log('Informações do usuário:', userInfo);
    }catch (error){
        console.error('Erro ao obter informações do usuário:',error);
    }
}

exibirUserInfo();


