function getUserInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userInfo = {
                nome: 'Fernanda',
                idade: 43,
                email: 'fernanda@email.com'
            };
            resolve(userInfo);
        }, 2000); // Simulando um tempo de espera de 2 segundos
    });
}

// Função que utiliza getUserInfo para obter informações do usuário e exibe-as no console
async function exibirUserInfo() {
    try {
        const userInfo = await getUserInfo();
        console.log('Informações do usuário:', userInfo);
    } catch (error) {
        console.error('Erro ao obter informações do usuário:', error);
    }
}

// Chamada da função para exibir as informações do usuário
exibirUserInfo();