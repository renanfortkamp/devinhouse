/* Na página HTML devem existir 2 campos de texto (dica: input type number): um com rótulo (label) “valor inicial”, e outro com rótulo “raíz”. Também deve ter 2 botões: um rotulado “Calcular P.A.” e outro rotulado “Calcular P.G.”. O evento click de cada botão deve chamar uma função que: verifica se os campos estão preenchidos (dica: length) e, se estiverem vazios, deve mostrar uma mensagem ao usuário pedindo para inserir os valores; caso os campos estejam preenchidos, deve calcular os 10 primeiros valores da sequência e exibir na tela.

Relembrando: P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz. Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28. P.G. (Progressão Geométrica) é como uma P.A., mas em vez de somar, multiplica-se a raiz.

Exemplo: Valor inicial = 1; raiz = 3; P.G. = 1, 3, 9, 27, 81... */

calculaPA.onclick = () =>{
    let valorInicial = parseInt(document.querySelector('#valorInicial').value)
    let valorRaiz = parseInt(document.querySelector('#raiz').value)
    let pa = [valorInicial]
    if(valorInicial.length == 0 || valorRaiz.length == 0){
        alert("Digite um valor no campo Valor Inicial e Raiz")
        
    } else{ 
        for(i = 0;i < 9; i++){
            valorInicial += valorRaiz;
            pa.push(valorInicial);
        }
    
    }
    alert(pa)
    valorInicial = document.querySelector('#valorInicial').value = ""
    valorRaiz = document.querySelector('#raiz').value = ""
}

calculaPG.onclick = () =>{
    let valorInicial = parseInt(document.querySelector('#valorInicial').value)
    let valorRaiz = parseInt(document.querySelector('#raiz').value)
    let pa = [valorInicial]
    if(valorInicial.length == 0 || valorRaiz.length == 0){
        alert("Digite um valor no campo Valor Inicial e Raiz")
        
    } else{ 
        for(i = 0;i < 9; i++){
            valorInicial *= valorRaiz;
            pa.push(valorInicial);
        }
    
    }
    alert(pa)
    valorInicial = document.querySelector('#valorInicial').value = ""
    valorRaiz = document.querySelector('#raiz').value = ""
}