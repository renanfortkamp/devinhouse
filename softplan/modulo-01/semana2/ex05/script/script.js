/* 1. nome (prompt);
2. idade (prompt);
3. gosta de praticar algum esporte? (confirm)

Crie 3 variáveis para guardar as respostas do usuário:
1. deve receber um valor textual (string);
2. deve receber um valor numérico (number);
3. deve receber um valor de verdadeiro ou falso (boolean).

Faça com que esses 3 valores sejam exibidos no console do navegador. */

var name = prompt("Qual seu nome ?"); 
var idade = Number(prompt("Qual sua idade ?"));
var ifLikeSport = window.confirm("Gosta de praticar algum esporte? Ok = Sim, Cancelar = Não" );


const validacao = () => {
    if(isNaN(idade)){
        alert("Dados invalidos, Recarregue a pagina e digita corretamente!");
    } else {
    console.log(`Nome = ${name}`);
    console.log(`Idade = ${idade}`);
    console.log(`Gosta de esportes = ${ifLikeSport}`);
}
}

validacao()