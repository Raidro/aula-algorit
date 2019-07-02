//let nome;
//nome = prompt('Digite seu nome: '); // vai pedir uma informação
//alert('Bem Vindo ' + nome); //todo alert espera que tenha um texto dentro dele
//confirm('Deseja sair?'); //cria uma caixa de dialogo para confirmação
//o "+" é usado pra concatenar e somar, depende da informação que foi colocada


//está solicitando valores
const valor1 = parseInt(prompt('Digite Valor1: ')); // o parseInt, converse para interio o que vinher do prompt
const valor2 = parseInt(prompt('Digite Valor2: '));// const é uma constante

let soma = valor1 + valor2; // "**" dois astericos significa potencia  e "%" é o resto
let sub = valor1 - valor2;
let multi = valor1 * valor2;
let div = valor1 / valor2;
let pot = valor1 ** valor2;
let resto = valor1 % valor2;
//alert('Os resultados são: ' + '\n' + 'Soma: ' + soma + '\n' + 'Subtração: ' + sub + '\n' + 'Multiplicação: ' + multi + '\n' + 'Divisão: ' + div + '\n' + 'Potencia: ' + pot + '\n' + 'Resto: ' + resto);
console.log('Os resultados são: ' + '\n\n' + 'Soma: ' + soma + '\n' + 'Subtração: ' + sub + '\n' + 'Multiplicação: ' + multi + '\n' + 'Divisão: ' + div + '\n' + 'Potencia: ' + pot + '\n' + 'Resto: ' + resto);


//--------- armazenamento de informações temporarias ------------//
// Variavel: É um espaço a memoria criado pelo programador para armazenar informação para uso posterior(temporarios)

// var idade, local, fone; // var é usado para declarar variaveis sendo que é variaveis globais
// let escola; // variavel local (recomendação: sempre usar let)
