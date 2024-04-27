function autenticar() {
    let usuario = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;
    
    if (usuario === "usuario" && senha === "123") {
        document.getElementById('mensagem').innerHTML = "Você foi autênticado.";
    } else {
        document.getElementById('mensagem').innerHTML = "Autênticação inválida.";
    }
}