import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'load-benchmark',
  templateUrl: './load-benchmark.component.html',
  styleUrls: ['./load-benchmark.component.scss']
})
export class LoadBenchmarkComponent implements OnInit {
  public movies: Movie[] = [
    new Movie(2019, "The Gentlemen", 7.8, "https://i.imgur.com/w5cnnuW.jpg"),
    new Movie(2008, "Rock'N'Rolla", 7.3, "http://1.bp.blogspot.com/_IkxGemjxhiQ/TNrelWeTxpI/AAAAAAAAHik/xo_2a3vn9Ww/s1600/rocknrolla-poster.jpg"),
    new Movie(2005, "Revolver", 6.4, "https://dvd-shoppen.com/6099-large_default/revolver-blu-ray.jpg"),
    new Movie(2003, "The Hire", 7.6, "https://www.madonnashop.com/wp-content/uploads/images/products/p-752-Madonna_-_DVD_BMW_movie_The_Hire-400x400.jpg"),
    new Movie(2000, "Snatch", 8.3, "https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg"),
    new Movie(1998, "Lock, Stock and Two Smoking Barrels", 8.2, "https://m.media-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg"),
    new Movie(2011, "Sherlock Holmes: A Game of Shadows", 7.5, "https://m.media-amazon.com/images/M/MV5BMTQwMzQ5Njk1MF5BMl5BanBnXkFtZTcwNjIxNzIxNw@@._V1_.jpg"),
    new Movie(2009, "Sherlock Holmes", 7.6, "https://fwcdn.pl/fpo/60/62/426062/7423630.3.jpg"),
    new Movie(2015, "The Man from U.N.C.L.E.", 7.3, "https://marudzenie.pl/wp-content/uploads/2015/09/7698502.3.jpg"),
    new Movie(2001, "Star", 7.7, "https://m.media-amazon.com/images/M/MV5BM2ZhMjBiMjItNmIyOC00MjVkLWJiOTItODA2MmI5YTc1NDE4XkEyXkFqcGdeQXVyMjA4MjYzMjk@._V1_.jpg"),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
