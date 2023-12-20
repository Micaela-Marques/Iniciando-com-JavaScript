//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert('Hello word')
alert("Proximo desafio")

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

alert('Iremos somar dois números')

let numberOne = prompt('digite o primeiro numero')
let numberTwo = prompt('Digite o segundo número')

let result = Number(numberOne) + Number(numberTwo)

alert("resultado final: " + result)

console.log(result)

alert("Proximo desafio")

/////////////////////////////////////////////
//Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número",
// caso contrário, exiba a mensagem "Não é um número".

let enterNumber = prompt('Digite um numero ou palavra')
if (!isNaN(enterNumber)) {
    alert("É um número")
} else {
    alert("Não é um número")
}
alert("Desafio string")


//////////////////////// 
//Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem 
//"É uma string", caso contrário, exiba a mensagem "Não é uma string".

let value = prompt('Digite algo')

if (typeof value === "string") {

    alert('É uma string')
} else {
    alert('Não é uma string ')
}

alert("Desafio de valor booleano")

/////////////////////////
//Crie um script que declare uma variável e verifique se o seu valor é um booleano. 
//Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

let inputUsuario = prompt("Digite um valor:");

let valorBooleano = !!JSON.parse(inputUsuario);


if (typeof valorBooleano === 'boolean') {
    alert("É um booleano");
} else {
    alert("Não é um booleano");
}

alert("Desafio de subtração")

//////////////////////////////
//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

alert('Iremos subtrair dois números')

let enterNumberOne = prompt('digite o primeiro numero')
let enterNumberTwo = prompt('Digite o segundo número')

let resultSub = Number(enterNumberOne) - Number(enterNumberTwo)

alert("resultado final: " + resultSub)

console.log(resultSub)

alert("Desafio de multiplicação")

///////////////////////////////

// Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
alert('Iremos multiplicar dois números')

let multNumberOne = prompt('digite o primeiro numero')
let multNumberTwo = prompt('Digite o segundo número')

let resultMult = Number(multNumberOne) * Number(multNumberTwo)

alert("resultado final: " + resultMult)

console.log(resultMult)

alert("Desafio de divisão")

////////////////

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let divNumberOne = prompt('digite o primeiro numero')
let divNumberTwo = prompt('Digite o segundo número')

let resultDiv = Number(divNumberOne) / Number(divNumberTwo)

alert("resultado final: " + resultDiv)

console.log(resultDiv)

alert("Desafio se é par ou impar")


// ////////////////////////////
// //Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", 
// //caso contrário, exiba a mensagem "Não é um número par".

// Declaração da variável
var numero = parseInt(prompt("Digite um número:")); // Solicita ao usuário que insira um número e converte para inteiro

// Verificação se o número é par ou ímpar
if (numero % 2 === 0) {
    console.log("É um número par");
} else {
    console.log("É um número ímpar");
}

alert("Desafio se é impar")

/////////////////////////
//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar.
// Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

// Declaração da variável
let numberValue = parseInt(prompt("Digite um número:")); // Solicita ao usuário que insira um número e converte para inteiro

// Verificação se o número é ímpar
if (numberValue % 2 !== 0) {
    alert("É um numero ímpar")
} else {
    alert("Não é um número impar")
   
}