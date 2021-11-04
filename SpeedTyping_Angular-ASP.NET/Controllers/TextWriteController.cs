using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpeedTyping.Helper;
using SpeedTyping.Model.Data;
using SpeedTyping.Model.ViewModel;
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
        public IActionResult UpdateResult(TextWriteInfo model)
        {
            var userId = User.Claims.First(x => x.Type == "UserID").ToString()[8..];
            model.UserId = userId;
            var bestResult = _dataManager.TextWriteTypeInfos.SaveAndGetBest(model);
            return Ok(bestResult);
        }
        [HttpPost]
        [Authorize]
        [Route("Remove")]
        public void RemoveResult(RemoveTextWriteResultViewModel model)
        {
                var userId = User.Claims.First(x => x.Type == "UserID").GetUserIdFromClaim();
                var textResult = _dataManager.TextWriteTypeInfos.GetById(model.Id);
                if (textResult != null && textResult.UserId == userId)
                    _dataManager.TextWriteTypeInfos.Remove(textResult);
        }
    }
}
