using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;

namespace Blazor.Abstract
{
    public interface IBenchmarkComponentBase
    {
        string Name { get; }
        Task SetupTest();
        Task RunTest();
    }
}