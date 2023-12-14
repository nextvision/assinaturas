document.getElementById('consultaNome').addEventListener('keyup', acionarInput);

async function acionarInput(event) {
    // Verifica se a tecla pressionada é "Enter" (código 13)
    if (event.key === 'Enter') {
        await consultarDados();
    }
}


async function consultarDados(){
    var consultaNome = document.getElementById('consultaNome').value
    
    
    try {
         
        const response = await fetch('../js/db.json');
        const data = await response.json();

         
        const resultado = buscaRegistro(data, consultaNome);

         
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
    
    document.getElementById('nome').innerText = registro.nome;
    document.getElementById('email').innerText = registro.email;
    document.getElementById('telefone').innerText = registro.telefone;
    document.getElementById('telefone2').innerText = registro.telefone2;
    document.getElementById('cargo').innerText = registro.cargo

    if(cargo.textContent.trim() === ''){
        document.getElementById('cargo').style.display = 'none'

    }else{
        document.getElementById('cargo').innerText = registro.cargo
    }
}
 