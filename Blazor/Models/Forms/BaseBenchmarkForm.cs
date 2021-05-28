using System;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;

namespace Blazor.Models.Forms
{
    public class BaseBenchmarkForm
    {
        [Required]
        [Range(1, Int32.MaxValue)]
        public int RepeatCount { get; set; } = 10;
    }
}