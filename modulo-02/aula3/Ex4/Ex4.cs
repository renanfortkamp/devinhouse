// See https://aka.ms/new-console-template for more information

// Faça um programa que leia um vetor de 5 números inteiros,
// mostre a soma, a multiplicação e os números.

int[] arrayNum = new int[5] { 1, 2, 3, 4, 5};

int soma = 0;
int multi = 1;

foreach (int item in arrayNum)
{
    soma += item;
    multi *= item;
}

Console.WriteLine($"O resultado da soma: {String.Join(" + ", arrayNum)} = {soma}");
Console.WriteLine($"O resultado da multiplicação: {String.Join(" * ", arrayNum)} = {multi}");