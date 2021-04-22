import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BenchmarkComponentBase as BenchmarkComponentBase } from '../abstract/benchmark-component-base';

@Component({
  selector: 'data-structure-benchmark',
  templateUrl: './data-structure-benchmark.component.html',
  styleUrls: ['./data-structure-benchmark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataStructureBenchmarkComponent extends BenchmarkComponentBase implements OnInit {
  public numberOfElementsControl = new FormControl(10000);

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  public runTest(): void {
    console.log(this.numberOfElementsControl)
    const array: number[] = new Array(this.numberOfElementsControl.value);
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.round(Math.random() * 100);
    }
    console.log(array);
  }

}
