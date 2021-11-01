using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpeedTyping.Model.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpeedTyping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TextWriteController : ControllerBase
    {
        private readonly AccountManager _accountManager;
        private readonly DataManager _dataManager;

        public TextWriteController(AccountManager accountManager, DataManager dataManager)
        {
            _accountManager = accountManager;
            _dataManager = dataManager;
        }

        [HttpPost]
        [Authorize]
        [Route("UpdateResult")]
        public async Task<IActionResult> UpdateResult(TextWriteInfo model)
        {
            var userId = User.Claims.First(x => x.Type == "UserID").ToString()[8..];
            var user = await _accountManager.UserManager.FindByIdAsync(userId);
            model.UserId = userId;
            var bestResult = _dataManager.TextWriteTypeInfos.SaveAndGetBest(model);
            return Ok(bestResult);
        }
    }
}
