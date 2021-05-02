namespace Blazor.Models.Dtos
{
    public class Movie
    {
        public int ReleaseYear { get; set; }
        public string Title { get; set; }
        public decimal Rating { get; set; }
        public string Url { get; set; }

        public Movie()
        {
            
        }

        public Movie(int releaseYear, string title, decimal rating, string url)
        {
            ReleaseYear = releaseYear;
            Title = title;
            Rating = rating;
            Url = url;
        }
    }
}