

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

function somaVetor(vetor) {

    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {

        if (ehNumero(vetor[i])) {
            soma += parseFloat(vetor[i]);
        }

    }
    return soma;

}

let v = ['mateus', 5, 10, 'mahs', 'jhdhjhdj'];
let soma = somaVetor(v);
alert(soma);




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
