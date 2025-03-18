let amigos = [];
let sorteados = [];

function adicionarParticipante() {
    const inputAmigo = document.getElementById("amigo"); 
    let nome = inputAmigo.value.trim(); 

    if (amigos.includes(nome)) {
        alert("Este participante já foi escolhido! Coloque outro nome para continuar.");
        return;
    }
    
    if (nome === "" || !isNaN(nome)) { 
        alert("Favor inserir um nome válido.");
        return;
    }
   
    amigos.push(nome);
    inputAmigo.value = ""; 
    inputAmigo.focus();
    atualizarLista();
} 

function atualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo + " ";

        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.onclick = function() {
            removerAmigo(index);
        };

        item.appendChild(botaoRemover);
        listaAmigos.appendChild(item);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione um amigo antes de sortear!");
        return;
    }
    
    if (amigos.length < 3) {
        alert("Adicione pelo menos 3 amigos para sortear!");
        return;
    }

    if (sorteados.length === amigos.length) {
        sorteados = []; // Reseta a lista se todos já foram sorteados
    }

    let amigoSorteado;
    do {
        amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (sorteados.includes(amigoSorteado));

    sorteados.push(amigoSorteado);
    
    document.getElementById("resultado").innerHTML = 
        "<li>O amigo secreto sorteado é: " + amigoSorteado + "!</li>";
}

function limparLista() {
    document.getElementById("listaAmigos").innerHTML = ""; 
    document.getElementById("resultado").innerHTML = "";  
    amigos = [];
    sorteados = [];
}

//Botão novo sorteio
document.getElementById("novoSorteio").addEventListener("click", limparLista);