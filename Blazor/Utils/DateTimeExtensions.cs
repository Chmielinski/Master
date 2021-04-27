using System;

namespace Blazor.Utils
{
    public static class DateTimeExtensions
    {
        public static long ToUnixTimestamp(this DateTime value)
        {
            var timespan = value - new DateTime(1970, 1, 1, 0, 0, 0);
            return (long)timespan.TotalMilliseconds;
        }
    }
}