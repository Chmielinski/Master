import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataStructureTest } from '../../models/data-structure-test.enum';
import { BenchmarkComponentBase as BenchmarkComponentBase } from '../abstract/benchmark-component-base';

@Component({
  selector: 'data-structure-benchmark',
  templateUrl: './data-structure-benchmark.component.html',
  styleUrls: ['./data-structure-benchmark.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DataStructureBenchmarkComponent extends BenchmarkComponentBase implements OnInit {
  public numberOfElementsControl = new FormControl(10000);
  public activeTest: DataStructureTest = DataStructureTest.Generate
  public dataStructureTest = DataStructureTest;
  public testArray: number[] = [];
  public dummy: number = 0;

  constructor() {
    super();
  }
  
  ngOnInit(): void {

  }
  
  public selectTest(test: DataStructureTest): void {
    this.activeTest = test;
  }

  public generateArray(): number[] {
    const array: number[] = new Array(this.numberOfElementsControl.value);
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.round(Math.random() * 100);
    }
    return array;
  }

  public iterateThroughArray(): void {
    for (let i = 0; i < this.testArray.length; i++) {
      this.dummy = this.testArray[i];
    }
  }

  public getUniqueFromArray(): void {
    this.testArray.filter((elem, pos, array) => array.indexOf(elem) === pos);
  }

  public setupTest(): void {
    if (this.activeTest !== DataStructureTest.Generate) {
      this.testArray = this.generateArray();
    }
  }

  public runTest(): void {
    switch (this.activeTest) {
      case DataStructureTest.Generate:
        this.generateArray();
        break;
      case DataStructureTest.GetUnique:
        this.getUniqueFromArray();
        break;
      case DataStructureTest.Iterate:
        this.iterateThroughArray();
        break;
    }
  }

}
