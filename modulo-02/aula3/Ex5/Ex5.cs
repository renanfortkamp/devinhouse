// See https://aka.ms/new-console-template for more information

//Faça um programa que leia N notas, mostre as notas e a média na tela.

//Não terminado

List<int> notas = new List<int>();

int control = 0;
int somaNotas = 0;
int count = 1;

do
{
    Console.Write($"Digite a nota {count}: ");
    var num = Console.ReadLine();
    if (string.IsNullOrEmpty(num))
    {
        control = 1;
    }
    else
    {
        notas.Add(Convert.ToInt32(num));
        somaNotas += Convert.ToInt32(num);
        Console.WriteLine($"Média Atual: {somaNotas / count}");
        count++;
    }
} while (control == 0);

Console.WriteLine($"Média Final: {somaNotas / notas.Count()}");