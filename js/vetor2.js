
// criação de um vetor de vetor

let alunos = new Array(5);

// alunos[0] = new Array(2);
// alunos[1] = new Array(2);


// alunos[0][0] = 'Chico';
// alunos[0][1] = 8;
// alunos[1][0] = 'Zé';
// alunos[1][1] = 5;

for (let i = 0; i < alunos.length; i++) {

    alunos[i] = new Array(2);

    alunos[i][0] = prompt('Informe o Nome do aluno: ' + i);
    alunos[i][1] = prompt('Informe a Nota do aluno: ' + i);

}

for (let i = 0; i < alunos.length; i++) {
    for (let j = 0; j < alunos[i].length; j++) {
        alert(alunos[i][j]);
    }

}


/*

 mostrando os alunos e as notas uma a um

 for (let i = 0; i < alunos.length; i++) {

     for (let j = 0; j < alunos[i].length; j++) {

         alert(alunos[i][j]);

     }

 }*/