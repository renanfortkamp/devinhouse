const calcula = (op) =>{
    let valorA = Number(document.getElementById("valorA").value);
    let valorB = Number(document.getElementById("valorB").value);
    switch(op){
        case "+":
        soma = valorA + valorB;
        document.querySelector('h1').innerText = soma;
        break;
        case "-":
        soma = valorA - valorB;
        document.querySelector('h1').innerText = soma;
        break;
        case "*":
        soma = valorA * valorB;
        document.querySelector('h1').innerText = soma;
        break;
        case "/":
        soma = valorA / valorB;
        document.querySelector('h1').innerText = soma;
        break;
    }
}