using System.Threading.Tasks;

namespace Blazor.Services.Interfaces
{
    public interface IHttpBenchmarkService
    {
        Task Post();
        Task Get();
    }
}