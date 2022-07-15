using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExemploModificadorPrivate
{
    public class Empresa
    {
        public string RazaoSocial { get; private set; }
        public string Cnpj { get; private set; }
        public string Endereco { get; private set; }

        public Empresa(string razaoSocial, string cnpj, String endereco)
        {
            RazaoSocial = razaoSocial;
            Cnpj = cnpj;
            Endereco = endereco;

        }
    }
}
