using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Blazor.Models.Dtos;
using Blazor.Services.Interfaces;

namespace Blazor.Services.Implementation
{
    public class HttpBenchmarkService : IHttpBenchmarkService
    {
        private HttpClient _httpClient;
        public HttpBenchmarkService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task Post()
        {
            object body = new { Param = "test" };
            await _httpClient.PostAsJsonAsync("/Test/post", body);
        }

        public async Task Get()
        {
            var data = await _httpClient.GetAsync("/Test/get");
            var movies = await data.Content.ReadFromJsonAsync<Movie[]>();
            var test = 123;
        }
    }
}