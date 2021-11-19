/* Crie uma nova classe para representar as informações de um endereço. A classe Endereco possui os seguintes atributos: logradouro, numero, cidade, estado, pais, cep. No constructor() desta classe, verifique se todos os valores recebidos por parâmetro são do tipo 'string' (utilize typeof). Caso algum não seja do tipo 'string', lance (throw) uma exceção com a seguinte mensagem: "Endereço inválido!". Ex.: throw 'Endereço inválido!' */

class Endereco {
    #logradouro
    #numero
    #cidade
    #estado
    #pais
    #cep
    constructor(logradouro,numero,cidade,estado,pais,cep){
        try {
            if( 
            typeof logradouro !== 'string' ||
            typeof numero !== 'string' || 
            typeof cidade !== 'string' || 
            typeof estado !== 'string' || 
            typeof pais !== 'string' || 
            typeof cep !== 'string'){
                throw 'Endereço inválido!'
                  
            }            
            else{
            this.#logradouro = logradouro
            this.#numero = numero
            this.#cidade = cidade
            this.#estado = estado
            this.#pais = pais
            this.#cep = cep
            }
        }
        catch(err){
            console.log(err)
        }

    }
}

const meuEndereco = new Endereco("Alabama", "194","Palhoça","Santa Catarina","Brasil","8866451")

console.log(meuEndereco)