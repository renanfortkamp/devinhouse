// [M2S02] Ex 3 - Busca número menor


namespace Ex03
{
    class Program
    {
        static void Main(string[] args)
        {
            int  numeroMenor= 0;
            for (int i = 0; i < 7; i++)
            {
                Console.WriteLine("Digite um numero");
                var numString = Console.ReadLine();
                if (numString == "")
                {
                    Console.WriteLine("Voce não digitou um numero valido!");
                }
                else
                {
                    int num = Convert.ToInt32(numString);
                    if (num < numeroMenor)
                    {
                        numeroMenor = num;
                    }
                }
            }
            Console.WriteLine($"O Menor numero digitado é {numeroMenor}");
        }
    }
}