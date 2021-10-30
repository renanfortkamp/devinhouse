/* Faça 3 prompts ao usuário:
1. no primeiro, pergunte qual o tipo de cálculo ele deseja fazer (“+”, “-”, “*” ou “/”);
2. no segundo, pergunte o primeiro valor que deseja calcular;
3. no terceiro, o segundo valor que deseja calcular.

Em seguida, realize o cálculo e exiba na tela um “alert” contendo o texto “O resultado do seu cálculo é: X”, onde X é o resultado final do cálculo solicitado pelo usuário. */

var operador = prompt("Qual o tipo de cálculo deseja fazer ? (Exemplo: “+”, “-”, “*” ou “/”)");
var primeiroValor = parseInt(prompt("Digite o primeiro valor que deseja calcular! (Exemplo: 20, 10)"));
var segundoValor = parseInt(prompt("Digite o segundo valor que deseja calcular! (Exemplo: 5, 30)"));

const calcular =()=>{
    switch(operador){
        case "+":
            calculo = primeiroValor + segundoValor; 
            alert(`${primeiroValor}+${segundoValor}=${calculo} `)
        break;
        case "-":
            calculo = primeiroValor - segundoValor; 
            alert(`${primeiroValor}-${segundoValor}=${calculo} `)
        break;
        case "*":
            calculo = primeiroValor * segundoValor; 
            alert(`${primeiroValor}*${segundoValor}=${calculo} `)
        break;
        case "/":
            calculo = primeiroValor / segundoValor; 
            alert(`${primeiroValor}/${segundoValor}=${calculo} `)
        break;
        default:
            alert("Operador digitado incorretamente, recarregar pagina e digitar novamente!(Ex: + e -)");
    }

}
calcular()
