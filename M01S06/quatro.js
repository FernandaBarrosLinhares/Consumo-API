function salvarInformacaoUsuario(){
    const nome = prompt("Digite seu none");
    const idade = prompt("Digite sua idade");
    const email = prompt("Digite sua email");

    const informacaoUsuario = {
        nome: nome,
        idade: idade,
        email: email
    };

    localStorage.setItem("usuario", JSON.stringify(informacaoUsuario));
}

salvarInformacaoUsuario();