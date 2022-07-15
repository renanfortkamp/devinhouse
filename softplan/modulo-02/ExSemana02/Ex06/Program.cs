// [M2S02] Ex 6 - Equilátero, isósceles ou escaleno
// Faça um Programa que peça os 3 lados de um triângulo.
// O programa deverá informar se os valores podem ser um triângulo.
// Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.
//
// Dicas:
// Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
// Triângulo Equilátero: três lados iguais;
// Triângulo Isósceles: quaisquer dois lados iguais;
// Triângulo Escaleno: três lados diferentes;

namespace Ex06
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite o lado esquerdo do triangulo");
            int lado1 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Digite o lado direito do triangulo");
            int lado2 = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Digite a base do triangulo");
            int lado3 = Convert.ToInt32(Console.ReadLine());
            
            if (lado1 + lado2 < lado3 || lado1 + lado3 < lado2 || lado2 + lado3 < lado1)
            {
                Console.WriteLine("Triângulo inválido!");
            }
            else if (lado1 == lado2 && lado2 == lado3)
            {
                Console.WriteLine("O triângulo é equilátero!");
            }
            else if (lado1 != lado2 && lado1 != lado3 && lado2 != lado3)
            {
                Console.WriteLine("O triângulo é escaleno!");
            }
            else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3)
            {
                Console.WriteLine("O triângulo é Isósceles!");
            }
            
            
        }
    }
}

