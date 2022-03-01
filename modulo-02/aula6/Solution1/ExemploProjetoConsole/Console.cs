using ExemploModificadorAcesso;
using ExemploModificadorPrivate;
using ExemploModificadorProtect;
using System;

namespace ExemploProjetoConsole
{
    class Console
    {
        static void Main(string[] args)
        {
            Pessoa pessoa = new Pessoa();

            pessoa.Endereco = "Alameda dos ipes,187";
            pessoa.Name = "Renan";
            pessoa.Rg = "83837.3939";

            System.Console.WriteLine($"Meu nomer {pessoa.Name} e meu rg é {pessoa.Rg}, e mora na rua {pessoa.Endereco}");

            Funcionario funcionario = new Funcionario();

            funcionario.Nome = "Joao";
            funcionario.NumeroRegistro = 23123123;
            funcionario.Salario = 1800.00M;

            System.Console.WriteLine($"Funcinario {funcionario.Nome}, registro {funcionario.NumeroRegistro} recebe salario no valor de {funcionario.Salario}");

            ContaCorrente contaCorrente = new ContaCorrente();
            contaCorrente.ContaNumero = "323233";
            contaCorrente.ContaDigito = "4";
            contaCorrente.NomeTitular = "Romeu";

            System.Console.WriteLine($"Conta titular {contaCorrente.NomeTitular} e conta corrente: {contaCorrente.ContaNumero}-{contaCorrente.ContaDigito}" );


        }   

    }
}
