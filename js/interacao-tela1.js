
function calcular() {

    //é um procedimento pois não retorna nada/ uma função retorna algo
    let numero1 = document.getElementById('valor1').value;
    //let numero1 = parseInt(document.getElementById('valor1').value);
    numero1 = validaCampo(numero1, 'mensagem1', 'Campo Invalido! Tem que ser numero');

    let numero2 = document.getElementById('valor2').value;
    //let numero2 = parseInt(document.getElementById('valor2').value);
    numero2 = validaCampo(numero2, 'mensagem2', 'Campo Invalido! Tem que ser numero');

    let resultado = numero1 + numero2;

    document.getElementById('resultado').value = resultado;
}

function ehNumero(numero) {
    return !isNaN(numero);
}

function validaCampo(valor, id, mensagem) {

    document.getElementById(id).innerHTML = '';

    if (ehNumero(valor)) {
        return parseInt(valor);

    } else {
        //let mensagem = id + 'deve ser numero'
        document.getElementById(id).style.color = 'red';
        document.getElementById(id).innerHTML = mensagem;// innerHTML é entre as tags
    }
    return 0;

}
