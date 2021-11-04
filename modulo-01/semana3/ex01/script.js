
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
    if(isNaN(anoNascimento) || isNaN(mesNascimento) || isNaN(diaNascimento)){
        alert("Você não inseriu sua data de nascimento, insira para obter sua idade");
    }else{
        if(dia > diaNascimento && mes >= mesNascimento && ano >= anoNascimento || dia < diaNascimento && mes > mesNascimento && ano >= anoNascimento){
            let idade = ano - anoNascimento;
            document.querySelector("h2").innerText = idade;
        } else if(diaNascimento >= dia && mesNascimento >= mes && anoNascimento >= anoNascimento || diaNascimento < dia && mesNascimento > mes && anoNascimento >= ano){
            alert("Insira a data corretamente!")
        } else{
            let idade = ano - anoNascimento - 1;
            document.querySelector("h2").innerText = idade;
        }
    }
}
