using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExemploModificadorPrivate
{
    public class Funcionario
    {
        private int numeroRegistro { get; set; }

        private string nome { get; set; }

        private decimal salario { get; set; }

        public int NumeroRegistro
        {
            get { return numeroRegistro; }
            set { numeroRegistro = value; }
        }

        public string Nome
        {
            get { return nome; }
            set { nome = value; }
        }
        public decimal Salario
        {
            get { return salario; }
            set { salario = value; }
        }
    }
}
