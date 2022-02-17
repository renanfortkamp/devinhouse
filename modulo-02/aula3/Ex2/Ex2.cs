// See https://aka.ms/new-console-template for more information

List<int> normalList = new List<int>();

normalList.Add(1);
normalList.Add(2);
normalList.Add(3);

normalList.Reverse();

foreach (int item in normalList)
{
    Console.WriteLine(item);
}