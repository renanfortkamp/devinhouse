/* Sua página deve possibilitar ao usuário inserir itens em uma lista e exibir a lista atualizada à medida que forem sendo adicionados novos itens.

A página deve conter um rótulo (<label>) “Item a adicionar:” seguido de um campo de texto onde o usuário possa digitar o item. Deve conter também um botão “Adicionar”, que no momento do clique do usuário deve inserir o item digitado na lista. Se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto.

A página também deve conter uma lista (<select>), que exibirá os itens adicionados pelo usuário. */

var lista = [];


const valid = ()=>{
    let item = document.querySelector('input').value;
    if( item.length == 0){
        alert("Digite o item a ser adicionado na lista!")
    } else{
        addItem()
    }


}
const addItem = ()=>{
    let item = document.querySelector('input').value;
    let opt = document.createElement('option');
    opt.innerHTML = item;
    document.querySelector('select').appendChild(opt);
    item = document.querySelector('input').value = "";
}


const cleanList= ()=>{
    document.querySelector("select").innerHTML = ""

}