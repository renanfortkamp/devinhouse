// [M2S02] Ex 1 - Calcular o raio de um círculo

namespace Ex01{

    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite a área do circulo para calcular seu raio!");
            var areaString = Console.ReadLine();
            var areaInteiro = Convert.ToInt32(areaString);
            var raio = Math.PI * (areaInteiro * 2);
            Console.WriteLine($"O Raio do circulo é {raio}²");

        }
    }
}