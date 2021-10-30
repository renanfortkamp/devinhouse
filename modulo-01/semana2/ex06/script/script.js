/* Faça 2 prompts ao usuário:
1. no primeiro, pergunte o seu sobrenome;
2. no segundo, pergunte o seu nome.

Em seguida, exiba na tela um “alert”, contendo o nome completo do usuário, na ordem correta (ou seja: Nome Sobrenome). */

var sobrenome = prompt("Digite seu Sobrenome!");
var nome = prompt("Digite seu Nome!");
var nomeSobrenome = `${nome} ${sobrenome}`;

alert(nomeSobrenome);

/* const nomeSobrenome = ()=>{
    alert(`Seu nome é ${nome} ${sobrenome}`)
}

nomeSobrenome() */