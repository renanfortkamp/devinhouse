using System;
using System.IO;


class Lista
{
    static void Main(string[] args)
    {
        bool controle = false;
        List<string> nomes = new List<string>();

        string path = @"C:\\aula\\devinhouse\\modulo-02\\aula04\\file2.txt";

        if (File.Exists(path))
        {
            using (StreamReader sr = File.OpenText(path))
            {
                string s;
                while ((s = sr.ReadLine()) != null)
                {
                    Console.WriteLine(s);
                    nomes.Add(s);
                }

            }
        }
        do
        {
            Console.WriteLine("Digite um nome: ");
            var cond = Console.ReadLine();

            if (cond == "fim")
                controle = true;
            else
                nomes.Add(cond);

        } while (!controle);

        using (StreamWriter sw = File.CreateText(path))
        {
            for (int i = 0; i < nomes.Count; i++)
            {
                sw.WriteLine(nomes[i]);
            }
        }
        for (int i = 0; i < nomes.Count; i++)
        {
            Console.WriteLine(nomes[i]);
        }
    }
}

