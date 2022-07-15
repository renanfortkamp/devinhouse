const calcula = (op) =>{
    let valorA = Number(document.getElementById("valorA").value);
    let valorB = Number(document.getElementById("valorB").value);
    switch(op){
        case "+":
        soma = valorA + valorB;
        document.querySelector('h2').innerText = soma;
        break;
        case "-":
        soma = valorA - valorB;
        document.querySelector('h2').innerText = soma;
        break;
        case "*":
        soma = valorA * valorB;
        document.querySelector('h2').innerText = soma;
        break;
        case "/":
        soma = valorA / valorB;
        document.querySelector('h2').innerText = soma;
        break;
    }
}