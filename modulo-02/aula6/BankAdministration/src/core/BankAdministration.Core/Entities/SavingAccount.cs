using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankSystem.Core.Entities
{
    public class SavingAccount : BankAccount
    {
        public decimal SavingIncomePercentage { get; private set; } //porcentagem de rendimento poupança
        public SavingAccount(Client client) : base(client)
        {
            SavingIncomePercentage = 0.003M;

        }

    }
}