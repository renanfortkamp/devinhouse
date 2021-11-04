
const calcularIdade = ()=>{
    let dataAtual = new Date();
    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1;
    let ano = dataAtual.getFullYear();
    let dataNascimento = document.getElementById('dataNascimento').value;
    console.log(dataNascimento)
    let anoNascimento = parseInt(dataNascimento.slice(0,4));
    let mesNascimento = parseInt(dataNascimento.slice(5,7));
    let diaNascimento = parseInt(dataNascimento.slice(8,10));
    if(dia > diaNascimento && mes >= mesNascimento || dia < diaNascimento && mes > mesNascimento){
        let idade = ano - anoNascimento;
        document.querySelector("h2").innerText = idade;
    } else{
        let idade = ano - anoNascimento - 1;
        document.querySelector("h2").innerText = idade;
    }
}
