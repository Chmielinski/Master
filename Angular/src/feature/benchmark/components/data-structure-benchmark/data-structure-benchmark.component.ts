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

  public generateArray(): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const startTime = window.performance.now();
        this._generateInternal();
        const endTime = window.performance.now();
        resolve(endTime - startTime);
      }, 0);
    });
  }

  private _generateInternal(): number[] {
    const array: number[] = new Array(this.numberOfElementsControl.value);
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.round(Math.random() * 100);
    }
    return array;
  }

  public iterateThroughArray(): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const startTime = window.performance.now();
        this.testArray.forEach(x => {
          this.dummy = x;
        });
        const endTime = window.performance.now();
        resolve(endTime - startTime);
      }, 0);
    });
  }

  public getUniqueFromArray(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const startTime = window.performance.now();
        this.testArray.filter((elem, pos, array) => array.indexOf(elem) === pos);
        const endTime = window.performance.now();
        resolve(endTime - startTime);
      });
    });
  }

  public setupTest(): void {
    if (this.activeTest !== DataStructureTest.Generate) {
      this.testArray = this._generateInternal();
    }
  }

  public async runTest(): Promise<number> {
    switch (this.activeTest) {
      case DataStructureTest.Generate:
        return await this.generateArray();
      case DataStructureTest.GetUnique:
        return await this.getUniqueFromArray();
      case DataStructureTest.Iterate:
        return await this.iterateThroughArray();
    }
  }

}
