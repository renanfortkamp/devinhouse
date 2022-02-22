using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BankAdministration.Core.Entities
{
    // referente a conta-corrente
    public class CheckingAccount: BankAccount
    {
        public decimal Limit { get; private set; }
        public decimal CheckingAccountMaintenance { get; private set; } // taxa de manutenção
        public CheckingAccount(Client client, decimal limit): base(client)
        {
            CheckingAccountMaintenance = 0.08M;
            Limit = limit;

        }


    }
}
