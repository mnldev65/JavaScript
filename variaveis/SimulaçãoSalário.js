// Simulação de salário líquido
// Crie:

// - salário bruto
// - desconto de 12% de imposto
// - mostre salário líquido

const salario = 1500
let desconto = 1500*0.12
let salarioLiquido = salario - desconto

console.log(`O valor do salário liquido é de R$ ${salarioLiquido.toFixed(2)}`)