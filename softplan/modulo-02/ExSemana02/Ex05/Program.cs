using System.Collections;

namespace Ex05
{
    class Program
    {
        public static void Main()
        {
            ArrayList arr = new ArrayList(10);
            arr = new ArrayList { };
            do
            {
                Console.WriteLine("Digite um numero");
                var numString = Console.ReadLine();
                if (numString == "")
                {
                    Console.WriteLine("Você não digitou um numero valido!");
                }
                else
                {
                    int num = Convert.ToInt32(numString);
                    arr.Add(num);

                }


            } while (arr.Count < 10);
            Console.WriteLine("Lista dos numeros digitados antes do filtro decrescente");
            foreach (var item in arr)
            {
                Console.WriteLine(item);
            }
            arr.Sort();
            arr.Reverse();
            Console.WriteLine("Lista dos numeros digitados apos filtro decrescente");
            foreach (var item in arr)
            {
                Console.WriteLine(item);
            }
            
        }
    }
}