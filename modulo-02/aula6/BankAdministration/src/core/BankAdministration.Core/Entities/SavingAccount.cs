using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAdministration.Core.Entities
{
    public class SavingAccount: BankAccount
    {
        // referente a conta poupança
        public decimal SavingIncomePercentage { get; private set; } // porcentagem de rendimento
        public SavingAccount(Client client) : base(client)
        {
            SavingIncomePercentage = 0.04M;
        }
    }
}
