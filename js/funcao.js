

function olah() {

    return 'Olá Mundo!';

}

function digite(texto) {

    let nome = prompt(texto);

    return nome;
}

function soNumero(texto) {

    let numero = parseFloat(prompt(texto));

    if (isNaN(numero)) {
        return 0;

    }
    return numero;

}

function soNumero1(texto) {

    let numero = '';

    do {
        numero = parseFloat(prompt(texto));

        if (!isNaN(numero)) {
            return numero;
        }

    } while (isNaN(numero));

}

function ehNumero(numero) {
    return !isNaN(numero);
}

function somaVetor(vetor) { // codigo de um somatorio de numeros dentro de um vetor

    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {

        if (ehNumero(vetor[i])) {
            soma += vetor[i];
        }

    }
    return soma;

}

function fatorial(numero) { //codigo fatorial não recursivo
    let resultado = 1;
    if (ehNumero(numero)) {
        for (let i = numero; i > 0; i--) {

            resultado *= i;
        }
        return resultado;
    }
    return 0;
}


function fatorialR(numero) { // codigo recursivo

    if (numero == 1) {
        return 1;

    } else {
        return numero * fatorialR(numero - 1);
    }

}

// function fatorialR(numero) {
//     return numero == 1 ? 1 : numero * fatorialR(numero - 1);
// }



// let v = ['mateus', 5, 10, 'mahs', 'jhdhjhdj'];
// let soma = somaVetor(v);
// alert(soma);


// alert(fatorialR(4));

/* Area de testar as funções */

// let texto = olah();
// alert(texto);

// alert(olah());

// let texto = digite('Diga seu nome: ');

// let numero = soNumero('Diga um numero: ');
// alert(numero);

// let numero1 = soNumero1('Diga o numero 1: ');
// let nuemro2 = soNumero1('Diga o numero 2: ')
// alert(numero1 + nuemro2)
