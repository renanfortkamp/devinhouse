/* 
[M1S05] - Ex 4 - Crie uma classe Cliente
na lista Acúmulo
Descrição
Editar
A nova classe Cliente possui os seguintes atributos: nome, cpf, endereco, numeroDoCelular. O parâmetro endereco deve ser uma instância da classe Endereco. No método constructor() da classe cliente, verifique se o parâmetro endereco é uma instância da classe Endereco (utilize instanceof), verifique também se os parâmetros restantes são todos do tipo 'string'. Caso algum parâmetro estiver incorreto, lance uma exceção (throw). */
class Endereco{
    #endereco
    constructor(endereco){
        this.#endereco = endereco
    }

}

const endereco = new Endereco()

class Cliente{
    #nome
    #cpf
    #numeroDoCelular
    #endereco = endereco

    constructor(nome,cpf,numeDoCelular){
        try{
            
            if(typeof nome === 'string' && typeof cpf === 'string' && typeof numeDoCelular === 'string' && this.#endereco instanceof Endereco){
                this.#nome = nome;
                this.#cpf = cpf;
                this.#numeroDoCelular = numeDoCelular;
                

            }else{
                throw "Endereço não é uma instancia de endereço ou algum dado não é do tipo String"
            }
        }
        catch(error){
            console.log(error)
        }

    }
}

const pessoa = new Cliente("Renan","087453834","48996642493")

console.log(pessoa)