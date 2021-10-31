using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpeedTyping.Model;
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
    public class AdminPanelController : ControllerBase
    {
        private readonly DataManager _dataManager;

        public AdminPanelController(DataManager dataManager)
        {
            _dataManager = dataManager;
        }

        [HttpPost]
        [Authorize(Roles = "admin")]
        [Route("CreateText")]
        public IActionResult CreateText(TextEditViewModel model)
        {
            var isInvalid = model?.Content == null || model?.Title == null;
            if (isInvalid)
                return BadRequest(new { message = "Все поля должны быть заполнены" });
            var text = new Text
            {
                TextContent = model.Content,
                Title = model.Title,
                Id = model?.Id ?? default
            };
            _dataManager.Texts.SaveText(text);
            return Ok();
        }
        [HttpPost]
        [Authorize(Roles = "admin")]
        [Route("DeleteText")]
        public IActionResult DeleteText(DeleteTextViewModel model)
        {
            _dataManager.Texts.DeleteTextById(model.Id);
            return Ok();
        }
    }
}
