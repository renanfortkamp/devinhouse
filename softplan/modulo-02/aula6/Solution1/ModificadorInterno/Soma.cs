using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModificadorInterno
{
    public class Soma
    {
        public int ValorA { get; private set; }
        public int ValorB { get; private set; }
        public int ResultadoSoma { get; private set; }
        public Soma(int valorA, int valorB)
        {
            valorB = valorB;
            ValorA = valorA;

            Calculadora calculadora = new Calculadora();


            ResultadoSoma = calculadora.CalcularSoma(valorA, valorB);
        }
    }
}
