using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExemploModificadorProtect
{
    public class ContaCorrente: ContaBancaria
    {
        public string ContaNumero
        {
            get { return contaNumero; }
            set { contaNumero = value; }
        }

        public string ContaDigito
        {
            get { return contaDgito; }
            set { contaDgito = value; }

        }

        public string NomeTitular
        {
            get { return nomeTitular; }
            set { nomeTitular = value; }
        }
    }
}
