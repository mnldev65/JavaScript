// Aprovação Escolar
// Objetivo:
// Receber a nota de um aluno e informar:

// - Aprovado
// - Recuperação
// - Reprovado

// Regras
//     Nota >= 7 → aprovado
//     Nota entre 5 e 6.9 → recuperação
//     Nota < 5 → reprovado

const dadosAlunos = [
    {
        nome: "Rodrigo",
        nota: 10
    },

    {
        nome: "Any",
        nota: 5
    },

    {
        nome: "Logan",
        nota: 0
    }
];

//Rodrigo
if (dadosAlunos[0].nota >= 7) {
    console.log(`O aluno ${dadosAlunos[0].nome} foi aprovado, pois tirou uma nota ${dadosAlunos[0].nota}`)
} else if (dadosAlunos[0].nota >= 5 && dadosAlunos[0].nota <= 6.9) {
    console.log(`O aluno ${dadosAlunos[0].nome} está de recuperação, pois tirou uma nota ${dadosAlunos[0].nota}`)
} else {
    console.log(`O aluno ${dadosAlunos[0].nome} está reprovado, pois tirou uma nota ${dadosAlunos[0].nota}`)
}

//Any
if (dadosAlunos[1].nota >= 7) {
    console.log(`A aluna ${dadosAlunos[1].nome} foi aprovada, pois tirou uma nota ${dadosAlunos[1].nota}`)
} else if (dadosAlunos[1].nota >= 5 && dadosAlunos[1].nota <= 6.9) {
    console.log(`A aluna ${dadosAlunos[1].nome} está de recuperação, pois tirou uma nota ${dadosAlunos[1].nota}`)
} else {
    console.log(`A aluna ${dadosAlunos[1].nome} está reprovada, pois tirou uma nota ${dadosAlunos[1].nota}`)
}

//Logan
if (dadosAlunos[2].nota >= 7) {
    console.log(`O aluno ${dadosAlunos[2].nome} foi aprovado, pois tirou uma nota ${dadosAlunos[2].nota}`)
} else if (dadosAlunos[2].nota >= 5 && dadosAlunos[2].nota <= 6.9) {
    console.log(`O aluno ${dadosAlunos[2].nome} está de recuperação, pois tirou uma nota ${dadosAlunos[2].nota}`)
} else {
    console.log(`O aluno ${dadosAlunos[2].nome} está reprovado, pois tirou uma nota ${dadosAlunos[2].nota}`)
}