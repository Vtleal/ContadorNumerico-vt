let valor = document.getElementById('valor');

let contador = 0; 
 
function adicionar() {
    contador = (valor.innerText);
    contador ++
    valor.innerText = contador;
}

function diminuir() {
    contador = (valor.innerText);
    contador --
    valor.innerText = contador;
}

function reiniciar() {
    valor.innerText = '0';
}