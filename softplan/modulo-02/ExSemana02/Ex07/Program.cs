namespace Ex07
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Digite um numero inteiro");
            var numString = Console.ReadLine();
            if (numString != null)
            {
                var numInvertido = new string(numString.Reverse().ToArray());
                int numInt = Convert.ToInt32(numInvertido);
                Console.WriteLine(numInt);
            }
            
        }
    }
}

