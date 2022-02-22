using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAdministration.Core.Entities
{
    public class Client
    {
        public string Name { get; private set; }
        public string CPF { get; private set; }
        public string RG { get; private set; }
        public string Address { get; private set; }
        public Client(string name, string cpf, string rg, string adress)
        {
            Name = name;
            CPF = cpf;
            RG = rg;
            Address = adress;
        }
    }
}
