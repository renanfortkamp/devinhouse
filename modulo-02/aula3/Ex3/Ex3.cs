// See https://aka.ms/new-console-template for more information

// Faça um Programa que peça as quatro notas de 10 alunos,
// calcule e armazene num vetor a média de cada aluno,
// imprima o número de alunos com média maior ou igual a 7.0.

List<int> notas = new List<int>();

int countAluno = 1;
int quantidade = 0;

do
{
    int somaNotas = 0;
    int count = 1;
    do
    {
        Console.Write($"Digite a nota {count} do aluno {countAluno}: ");
        var num = Console.ReadLine();
        somaNotas += Convert.ToInt32(num);

        count++;
    } while (count < 5);
    notas.Add(somaNotas / 4);
    countAluno++;
} while (countAluno < 11);

foreach (int num in notas)
{
    if (num >= 7)
    {
        quantidade++;
    }
}

Console.WriteLine($"A quantidade de alunos com nota maior que 7 é: {quantidade}");