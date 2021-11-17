/* Sua página deve possibilitar ao usuário inserir itens em uma lista e exibir a lista atualizada à medida que forem sendo adicionados novos itens.

A página deve conter um rótulo (<label>) “Item a adicionar:” seguido de um campo de texto onde o usuário possa digitar o item. Deve conter também um botão “Adicionar”, que no momento do clique do usuário deve inserir o item digitado na lista. Se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto.

A página também deve conter uma lista (<select>), que exibirá os itens adicionados pelo usuário. */

var lista = new Array();


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
    lista.push(item);
    makeList()

}

const makeList = ()=>{
    item = document.querySelector('input').value = "";
    document.querySelector('select').innerHTML = ""
    for(i=0;i<lista.length;i++){
    let opt = document.createElement('option');
    opt.innerHTML = lista[i];
    document.querySelector('select').appendChild(opt);
    }
}

const saveList = () =>{
   localStorage.setItem('lista', "");
   localStorage.setItem('lista',  JSON.stringify(lista));
    
}

const loadList = () =>{
    _local_storage = JSON.parse(localStorage.getItem('lista'))
    if (_local_storage == null || _local_storage == ""){
        alert("Não há itens salvos")
    } else{
        for(i=0;i<_local_storage.length;i++){
        lista.push(_local_storage[i]);
    }}
    makeList()

}