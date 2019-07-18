


function calcular() {

    //é um procedimento pois não retorna nada/ uma função retorna algo
    let numero1 = document.getElementById('valor1').value;
    //let numero1 = parseInt(document.getElementById('valor1').value);
    numero1 = validaCampo(numero1, 'valor1');

    let numero2 = document.getElementById('valor2').value;
    //let numero2 = parseInt(document.getElementById('valor2').value);
    numero1 = validaCampo(numero2, 'valor2');

    let resultado = numero1 + numero2;

    document.getElementById('resultado').value = resultado;
}

function ehNumero(numero) {
    return !isNaN(numero);
}

function validaCampo(valor, id) {

    if (ehNumero(valor)) {
        valor = parseInt(valor);
        return valor;
    } else {
        let mensagem = id + 'deve ser numero'
        document.getElementById('mensagem').innerHTML = mensagem;// innerHTML é entre as tags
    }
    return 0;

}
