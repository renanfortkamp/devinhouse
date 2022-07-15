
namespace Ex02
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite a temperadutra em celcius para convertela para fahrenheit!");
            var celciusString = Console.ReadLine();
            int celciusInt = Convert.ToInt32(celciusString);
            var fahrenheit = ((celciusInt * 1.8) + 32);
            Console.WriteLine($"Sua temperatura em Fahrenheit é {fahrenheit}F");
        }
    }
}