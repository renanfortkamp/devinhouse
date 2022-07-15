using BankSystem.Core.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BankAdministration.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheckingAccountController : ControllerBase
    {
        // GET: api/<CheckingAccountController>
        [HttpGet]
        public CheckingAccount Get()
        {
            Client clientA = new Client("Renan", "087838383838", "3232323", "rua oloco");

            CheckingAccount checkingAccount = new CheckingAccount(client: clientA, limit: 200.14M);

            checkingAccount.OpenAccount("123");

            checkingAccount.WithdrawCheckingAccount(10M, "123");

            return checkingAccount;
        }




        // GET api/<CheckingAccountController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CheckingAccountController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CheckingAccountController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CheckingAccountController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
