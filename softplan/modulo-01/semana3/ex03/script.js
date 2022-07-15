const verificar = () =>{
	let valor = document.getElementById("numero").value;
  if(valor == 0){
  	alert("Você precisar digitar algum valor!")
  }else{
  	 if( valor % 2 == 0){
  	document.querySelector("h2").innerText = "PAR";
  }else{
  	document.querySelector("h2").innerText = "IMPAR";
  }}

}