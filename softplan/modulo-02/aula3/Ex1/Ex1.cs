// See https://aka.ms/new-console-template for more information

int[] arrayNum = new int[10] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

Array.Reverse(arrayNum);

foreach (var item in arrayNum)
{
    Console.WriteLine(item);
}