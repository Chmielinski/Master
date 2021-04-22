import { Component, OnInit } from '@angular/core';
import { BenchmarkComponentBase } from '../abstract/benchmark-component-base';

@Component({
  selector: 'dom-benchmark',
  templateUrl: './dom-benchmark.component.html',
  styleUrls: ['./dom-benchmark.component.scss']
})
export class DomBenchmarkComponent extends BenchmarkComponentBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  
  public runTest(): void {

  }
}
