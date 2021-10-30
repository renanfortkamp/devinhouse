/* Ao entrar na página, seu script deve realizar 2 prompts ao usuário:
1. um solicitando um “valor inicial”;
2. outro um valor para a “raíz”.

Após o usuário inserir esses valores, o seu script deve calcular os 10 primeiros valores da sequência e exibir na tela.
Relembrando: P.A. (Progressão Aritmética) é uma sequência numérica em que cada termo, a partir do segundo, é igual à soma do termo anterior com a raiz.

Exemplo: Valor inicial = 1; raiz = 3; P.A. = 1, 4, 7, 10, 13, 16, 19, 22, 25, 28. */

var valorInicial = parseInt(prompt("Digite um valor!(Exemplo: 1,5)"));
const Raiz = parseInt(prompt("Digite outro valor que será a raiz!(Exemplo: 10,5,2)"))

const calculoProgressao = () =>{
    if(!isNaN(valorInicial) && !isNaN(Raiz)){{
        var progressaoAritmetica = [valorInicial]
        for(i = 0;i < 9; i++){
            valorInicial += Raiz;
            progressaoAritmetica.push(valorInicial);
        }}
            alert(`Progressão Aritmética dos 10 primeiros valores da sequência é ${progressaoAritmetica}`);
    } else { 
            alert("Você não digitou numeros, recarrega a pagina e digite novamente")
    }
}

calculoProgressao()