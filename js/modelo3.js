async function consultarDados(){
    var consultaNome = document.getElementById('consultaNome').value

    
    try {
        // Carrega os dados do JSON local
        const response = await fetch('/js/db.json');
        const data = await response.json();

        // Procura pelo registro
        const resultado = buscaRegistro(data, consultaNome);

        // Verifica se o resultado foi encontrado
        if (resultado) {
            exibirDados(resultado);
        } else {
            alert('Registro não encontrado');
        }
    } catch (error) {
        console.error('Erro ao carregar dados do JSON:', error);
    }
}

function buscaRegistro(data, nome){

    return  data.find(item => item.nome.toLowerCase().includes(nome.toLowerCase()));
}

function exibirDados(registro){
    console.log(registro)
    
    document.getElementById('nome').innerText = registro.nome;
    document.getElementById('email').innerText = registro.email;
    document.getElementById('telefone').innerText = registro.telefone;
    document.getElementById('telefone2').innerText = registro.telefone2;
    document.getElementById('cargo').innerText = registro.cargo
}