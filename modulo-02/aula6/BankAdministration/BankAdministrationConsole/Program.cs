using System;
using BankSystem.Core.Entities;

namespace BankAdministrationConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            Client client = new Client("Romeu return", "088.348.238-89", "076.993.43", "Rua blue 44");
            Console.WriteLine($"------- Dados do Cliente -------");
            Console.WriteLine($"Client:{client.Name}");
            Console.WriteLine($"CPF:{client.CPF}");
            Console.WriteLine($"RG:{client.RG}");
            Console.WriteLine($"Address:{client.Address}");
            Console.ReadKey();

        }
        
    }
}