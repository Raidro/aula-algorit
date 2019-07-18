


function calcular() {
    //é um procedimento pois não retorna nada/ uma função retorna algo
    let numero1 = document.getElementById('valor1').value;
    //let numero1 = parseInt(document.getElementById('valor1').value);
    numero1 = parseInt(numero1);

    let numero2 = document.getElementById('valor2').value;
    //let numero2 = parseInt(document.getElementById('valor2').value);
    numero2 = parseInt(numero2);


    let resultado = numero1 + numero2;

    document.getElementById('resultado').value = resultado;
}