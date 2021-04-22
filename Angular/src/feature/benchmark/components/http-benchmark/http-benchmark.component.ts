import { Component, OnInit } from '@angular/core';
import { BenchmarkComponentBase } from '../abstract/benchmark-component-base';

@Component({
  selector: 'http-benchmark',
  templateUrl: './http-benchmark.component.html',
  styleUrls: ['./http-benchmark.component.scss']
})
export class HttpBenchmarkComponent extends BenchmarkComponentBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  
  public runTest(): void {

  }
}
