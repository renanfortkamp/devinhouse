// See https://aka.ms/new-console-template for more information
var listaNomes = new List<string>();
listaNomes.Add("RST");
listaNomes.Add("RdST");
listaNomes.Add("RS2T");
listaNomes.Add("Ramon dos Santos Telles");

for (int i = 0; i < listaNomes.Count; i++)
{
    if (listaNomes[i].Length == 4)
    {
        Console.WriteLine($"Nome com 4 Letras: {listaNomes[i]}");
    }
}