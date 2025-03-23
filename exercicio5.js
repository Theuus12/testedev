function converter() {
    var metros = document.getElementById('metros').value;
    
    // Verifica se o campo está vazio
    if (metros === "") {
        alert("Por favor, informe um valor em metros.");
        return;
    }
    
    // Realiza a conversão de metros para centímetros
    var centimetros = metros * 100;
    
    // Exibe o resultado na página
    document.getElementById('resultado').innerHTML = metros + " metros é igual a " + centimetros + " centímetros.";
}
