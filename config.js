window.alert ("olan")

console.log("BRAÇO CURTO")

let preco = parseFloat (prompt("Digite o preço do produto: "))
let desconto = parseFloat (prompt("Digite o desconto do produto: "))
let novoValor = preco - (desconto/100*preco)





if (novoValor>90) {
    alert ("Compra pode ser dividida em 3 vezes")
} else if (novoValor<90) {
    alert ("O novo preço correspondente a R$ " + novoValor)
}


let idade = parseInt (prompt("Digite a sua idade: "))
let paraCem = 100 - idade
if (idade < 100){
alert ("Você tem " + idade + ", e faltam "+ paraCem + " para cem!")
} else if (idade > 100) {
    alert ("Você tem mais de cem anos.")
}


let dia = parseFloat (prompt("Insira uma quantidade de dias: "))
let conversaoHoras = dia * 24
let conversaoMinutos = conversaoHoras * 60
let conversaoSegundos = conversaoMinutos * 60
alert ("A quantidade de dias em horas são: " + conversaoHoras + "hrs, " + conversaoMinutos + "min, " + conversaoSegundos + "s.")



let numero1 = parseInt (prompt("Digite um valor: "))
let numero2 = parseInt (prompt("Digite um segundo valor: "))
if (numero1 > numero2) {
    alert ("O maior numero é: " + numero1 + " o menor número é: " + numero2)
} else if (numero2 > numero1) {
    alert("O maior numero é: " + numero2 + " o menor número é: " + numero1)
} else { 
    alert("Os numeros são iguais")
}



let contadora=0
while (contadora<11){
    console.log (contadora)
    contadora++
}
