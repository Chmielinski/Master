import { Component, OnInit } from '@angular/core';
import { BenchmarkComponentBase } from '../abstract/benchmark-component-base';

@Component({
  selector: 'load-benchmark',
  templateUrl: './load-benchmark.component.html',
  styleUrls: ['./load-benchmark.component.scss']
})
export class LoadBenchmarkComponent extends BenchmarkComponentBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  
  public runTest(): void {

  }
}
