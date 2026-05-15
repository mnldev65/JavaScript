// Verificador de Maioridade
// Objetivo:
// Criar um programa que receba a idade de uma pessoa e informe:
//     "Menor de idade"
//     "Maior de idade"
// Regras
//     Menor que 18 → menor
//     18 ou mais → maior
const perfil = {
    nome:"Arthur",
    idade: 19
}

if (perfil.idade >= 18) {
    console.log(`O ${perfil.nome} é maior de idade, pois possui ${perfil.idade} anos`)
}else{
    console.log(`O ${perfil.nome} é menor de idade, pois possui ${perfil.idade} anos`)
}