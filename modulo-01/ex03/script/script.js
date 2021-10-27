var click = 1;

const confirm = function(){
    switch(click){
        case 0: 
            document.querySelector('.box-item').textContent = 'Não vou desistir!!';
            alert("Voce denovo?");
            click++
        break;
        case 1: 
            alert("Voce deseja realmente realizar essa ação?");
            document.querySelector('.box-item').textContent = 'Sim';
            click++
        break;
        case 2: 
            alert("Voce deseja realmente mesmo realizar essa ação?");            
            document.querySelector('.box-item').textContent = 'Sim';
            click++
        break;
        case 3: 
            alert("Voce tem certeza absoluta que deseja realizar essa ação?");
            document.querySelector('.box-item').textContent = 'Sim';
            click++
        break;
        case 4: 
            alert("Voce não vai se arrepender de realizar essa ação?");
            document.querySelector('.box-item').textContent = 'Não vou!';
            click++
        break;
        case 5: 
            alert("Voce jura de pés juntos?");
            document.querySelector('.box-item').textContent = 'Juro';
            click++
        break;
        case 6: 
            alert("Voce não sabe oque esta fazendo!");
            document.querySelector('.box-item').textContent = 'Sei sim';
            click++
        break;
        default:
            alert("Voce é insistente, vai ter que tentar mais para me convencer!");
            document.querySelector('.box-item').textContent = '❤️';
            click = 0;
        break;       
    }
}