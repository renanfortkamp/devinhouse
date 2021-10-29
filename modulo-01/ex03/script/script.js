const confirm = function(){
    var click = Math.floor(Math.random() * 8);
    switch(click){
        case 0: 
            alert(`“Antes do software poder ser reutilizável ele primeiro tem de ser utilizável.”
            Ralph Johnson`);
            document.querySelector('.box-item').textContent = 'Mensagem Aleatória';
        break;
        case 1: 
            alert(`“Medir o progresso da programação por linhas de código é como medir o progresso da construção de aeronaves em termos de peso.”
            Bill Gates`);
            document.querySelector('.box-item').textContent = 'Mensagem Aleatória';
        break;
        case 2: 
            alert(`“Se depurar é o processo de remoção de bugs do software, então programação deve ser o processo de colocação deles.”
            Edsger Dijkstra`);            
            document.querySelector('.box-item').textContent = 'Mensagem Aleatória';
        break;
        case 3: 
            alert(`“O espaço entre a teoria e a prática não é tão grande como é, a teoria na prática.”
            Autor desconhecido`);
            document.querySelector('.box-item').textContent = 'Mensagem Aleatória';
        break;
        case 4: 
            alert(`“Um computador permite que você faça mais erros mais rapidamente do que qualquer outra invenção da história da humanidade, com exceção das mãos e da tequila.”
            Mitch Ratcliffe`);
            document.querySelector('.box-item').textContent = 'Mensagem Aleatória';
        break;
        case 5: 
            alert(`” A arte de programar consiste em organizar e dominar a complexidade. ”
            Edsger W. Dijkstra`);
            document.querySelector('.box-item').textContent = 'Mensagem Aleatória';
        break;
        case 6: 
            alert(`Ninguém na breve história da computação jamais escreveu um software perfeito. É improvável que você seja o primeiro. - Andy Hunt`);
            document.querySelector('.box-item').textContent = 'Mensagem Aleatória';
        break;
        case 7:
            alert(`Todos neste país deveriam aprender a programar um computador porque ele ensina a pensar. - Steve Jobs`);
            document.querySelector('.box-item').textContent = 'Mensagem Aleatória';
        break;       
    }
}