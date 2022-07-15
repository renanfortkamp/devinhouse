/* Pergunte ao usuário seu último sobrenome e em seguida exiba na tela um “alert” contendo o texto “Olá, X. Seu sobrenome contém y letras”, onde X é o sobrenome em letras maiúsculas, e y é a quantidade de letras desse sobrenome. */

var ultimoSobrenome = prompt("Digite seu ultimo sobrenome!");
var upperCaseSobrenome = ultimoSobrenome.toUpperCase();
var lengthSobrenome = ultimoSobrenome.length;

const alerta= ()=>{
    alert(`Olá, ${upperCaseSobrenome}. Seu sobrenome contém ${lengthSobrenome} letras`)
}
alerta()