// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//console.log(amigos);

function agregarAmigo(){
    let nameAmigoSecreto = document.getElementById('amigo').value;
    
    if (nameAmigoSecreto.trim() === '') {
        alert('Por favor, ingresa un nombre valido');
        
    }else{
        amigos.push(nameAmigoSecreto);
        document.getElementById('amigo').value = '';
       
        //console.log('Array actua', amigos);

        listarAmigos();
    }
    

}

function listarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
      const li = document.createElement('li');
      li.textContent = amigos[i];

      listaAmigos.appendChild(li);
    }

}


function sortearAmigo() {
    if (amigos.length === 0){
        alert('No hay nombres para sortear')
        return;
    }

    const indexAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indexAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const li = document.createElement('li');
    li.textContent = `El amigo secreto sorteado es: ${nombreSorteado}`;

    resultado.appendChild(li);

    amigos = [];
    listarAmigos();

}