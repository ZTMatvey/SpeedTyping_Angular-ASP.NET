using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SpeedTyping.Domain;
using SpeedTyping.Model;

namespace SpeedTyping.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TextsController : ControllerBase
    {
        private readonly DataManager _dataManager;

        public TextsController(DataManager dataManager)
        {
            _dataManager = dataManager;
        }

        [HttpGet]
        [Route("all")]
        public IEnumerable<Text> Get()//getall
        {
            var texts = _dataManager.Texts.GetTexts();
            return texts;
        }
    }
}
