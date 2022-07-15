/* Faça 2 prompts ao usuário:
1. no primeiro, pergunte o ano de nascimento;
2. no segundo, pergunte o ano atual.

Em seguida, exiba na tela um “alert” contendo o texto “Sua idade é x ou y”, onde x é a idade do usuário, caso ele já tenha feito aniversário neste ano, e y é a idade caso ele ainda não tenha aniversariado no ano corrente. */

var anoNascimento = Number(prompt("Digite o ano de seu nascimento!"));
var anoAtual = Number(prompt("Digite o ano atual!"));
var idadeAntes = anoAtual - anoNascimento -1;
var idadeDepois = anoAtual - anoNascimento;

const alerta = () => {
    if(anoNascimento >= 0 && anoNascimento < anoAtual && anoAtual > anoNascimento && anoAtual < 9999 ){
    alert(`Sua idade é ${idadeDepois} ou ${idadeAntes}`)
    } else {alert("Ano Atual ou Ano de Nascimento digitado incorretamente, recarregue a pagina e tenta novamente!")}

} 
alerta()



