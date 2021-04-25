using System;

namespace API
{
    public class Movie
    {
        public int ReleaseYear { get; set; }
        public string Title { get; set; }
        public decimal Rating { get; set; }

        public Movie(int releaseYear, string title, decimal rating)
        {
            ReleaseYear = releaseYear;
            Title = title;
            Rating = rating;
        }
    }
}
