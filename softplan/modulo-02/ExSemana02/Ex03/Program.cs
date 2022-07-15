// [M2S02] Ex 3 - Busca número maior


namespace Ex03
{
    class Program
    {
        static void Main(string[] args)
        {
            int numeroMaior = 0;
            for (int i = 0; i < 5; i++)
            {
                Console.WriteLine("Digite um numero");
                var numString = Console.ReadLine();
                if (numString == "")
                {
                    Console.WriteLine("Voce não digitou um numero!");
                }
                else
                {
                    int num = Convert.ToInt32(numString);
                    if (num > numeroMaior)
                    {
                        numeroMaior = num;
                    }
                }
            }
            Console.WriteLine($"O Maior numero digitado é {numeroMaior}");
        }
    }
}

