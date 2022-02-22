// [M2S02] Ex 8 - Ler arquivo
// Faça um programa que leia o arquivo notas.
//
//json na raiz do projeto e retorne o nome dos usuários que tiveram a média menor que 5.

using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Ex08;

public class Program
{
        static void Main(string[] args)
        {
            string path = "file.json";
            
            using (StreamReader readtext = new StreamReader(path))
            {
                var readText = readtext.ReadLine();
                Console.WriteLine(readText);
            }
            Console.ReadKey();
        }
    }