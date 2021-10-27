var data = new Date();
var hora    = data.getHours();         
var min     = data.getMinutes();
var horaAtual = `${hora}:${min}`;

const showHours = ()=>{
    alert(`Hora Atual é ${horaAtual}`);
}
showHours()