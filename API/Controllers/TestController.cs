using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TestController : ControllerBase
    {
        private readonly List<Movie> _movies = new()
        {
            new(2000, "Snatch", 8.3m),
            new(1998, "Lock, Stock and Two Smoking Barrels", 8.2m),
            new(2009, "Sherlock Holmes", 7.6m),
            new(2019, "The Gentlemen", 7.8m),
            new(2008, "RocknRolla", 7.3m)
        };
        private readonly ILogger<TestController> _logger;

        public TestController(ILogger<TestController> logger)
        {
            _logger = logger;
        }

        [HttpGet("get")]
        public IEnumerable<Movie> Get()
        {
            return _movies;
        }

        [HttpPost("post")]
        public void Post([FromBody] PostParameter param)
        {

        }
    }
}
