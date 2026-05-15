// Verificador de Triângulo: Receba três valores (A, B, C) que representam os lados de um triângulo. Verifique se eles podem formar um triângulo (a soma de dois lados deve ser sempre maior que o terceiro). Se sim, diga se é:

// - Equilátero: Todos os lados iguais.

// - Isósceles: Dois lados iguais.

// - Escaleno: Todos os lados diferentes.

const triângulos = [
    {
        nome:"triângulo01",
        ladoA:20,
        ladoB:30,
        ladoC:25
    },

    {
        nome:"triângulo02",
        ladoA:30,
        ladoB:30,
        ladoC:45
    },

    {
        nome:"triângulo03",
        ladoA:30,
        ladoB:30,
        ladoC:30
    }
];


if (triângulos[0].ladoA + triângulos[0].ladoB > triângulos[0].ladoC && triângulos[0].ladoA + triângulos[0].ladoC > triângulos[0].ladoB && triângulos[0].ladoB + triângulos[0].ladoC > triângulos[0].ladoA) { 
    
    //triângulo escaleno
    if (triângulos[0].ladoA == triângulos[0].ladoB && triângulos[0].ladoB == triângulos[0].ladoC) {
        console.log(`O ${triângulos[0].nome} é equilátero, pois todos os lados são iguais possuindo valor ${triângulos[0].ladoA}`);
    } else if (triângulos[0].ladoA == triângulos[0].ladoB && triângulos[0].ladoA != triângulos[0].ladoC || triângulos[0].ladoA == triângulos[0].ladoC && triângulos[0].ladoA != triângulos[0].ladoB) {
        console.log(`O ${triângulos[0].nome} é isósceles, pois dois lados são iguais e um diferente`);
    } else {
        console.log(`O ${triângulos[0].nome} é escaleno, pois todos os lados são diferentes possuindo valores ${triângulos[0].ladoA}, ${triângulos[0].ladoB}, ${triângulos[0].ladoC}`);
    }
} else {
    console.log("Não é possivel criar um triângulo");
}


if (triângulos[1].ladoA + triângulos[1].ladoB > triângulos[1].ladoC && triângulos[1].ladoA + triângulos[1].ladoC > triângulos[1].ladoB && triângulos[1].ladoB + triângulos[1].ladoC > triângulos[1].ladoA) {

    //triângulo isósceles
    if (triângulos[1].ladoA == triângulos[1].ladoB && triângulos[1].ladoB == triângulos[1].ladoC) {
        console.log(`O ${triângulos[1].nome} é equilátero, pois todos os lados são iguais possuindo valor ${triângulos[1].ladoA}`);
    } else if (triângulos[1].ladoA == triângulos[1].ladoB && triângulos[1].ladoA != triângulos[1].ladoC || triângulos[1].ladoA == triângulos[1].ladoC && triângulos[1].ladoA != triângulos[1].ladoB) {
        console.log(`O ${triângulos[1].nome} é isósceles, pois dois lados são iguais e um diferente`);
    } else {
        console.log(`O ${triângulos[1].nome} é escaleno, pois todos os lados são diferentes possuindo valores ${triângulos[1].ladoA}, ${triângulos[1].ladoB}, ${triângulos[1].ladoC}`); 
    }
} else {
    console.log("Não é possivel criar um triângulo");
}


if (triângulos[2].ladoA + triângulos[2].ladoB > triângulos[2].ladoC && triângulos[2].ladoA + triângulos[2].ladoC > triângulos[2].ladoB && triângulos[2].ladoB + triângulos[2].ladoC > triângulos[2].ladoA) {
    
    //triângulo equilátero
    if (triângulos[2].ladoA == triângulos[2].ladoB && triângulos[2].ladoB == triângulos[2].ladoC) {
        console.log(`O ${triângulos[2].nome} é equilátero, pois todos os lados são iguais possuindo valor ${triângulos[2].ladoA}`);
    } else if (triângulos[2].ladoA == triângulos[2].ladoB && triângulos[2].ladoA != triângulos[2].ladoC || triângulos[2].ladoA == triângulos[2].ladoC && triângulos[2].ladoA != triângulos[2].ladoB) {
        console.log(`O ${triângulos[2].nome} é isósceles, pois dois lados são iguais e um diferente`);
    } else {
        console.log(`O ${triângulos[2].nome} é escaleno, pois todos os lados são diferentes possuindo valores ${triângulos[2].ladoA}, ${triângulos[2].ladoB}, ${triângulos[2].ladoC}`); 
    }
} else {
    console.log("Não é possivel criar um triângulo");
}