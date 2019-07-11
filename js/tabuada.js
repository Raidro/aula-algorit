



let numero = parseInt(prompt('Entre com a Tabuada: '));
let resultado = ''; // começa com vazio


for (var i = 1; i <= 9; i++) {
    let mult = numero * i;
    resultado += numero + ' X ' + i + ' = ' + mult + '\n'; // resultado recebe uma string, tudo que tpa depois do "+=" "vai ser sting"

}
alert(resultado);
