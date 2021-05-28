import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomTest } from '../../models/dom-test.enum';
import { BenchmarkComponentBase } from '../abstract/benchmark-component-base';

@Component({
  selector: 'dom-benchmark',
  templateUrl: './dom-benchmark.component.html',
  styleUrls: ['./dom-benchmark.component.scss']
})
export class DomBenchmarkComponent extends BenchmarkComponentBase implements OnInit {
  public numberOfElementsControl = new FormControl(10000);
  public activeTest: DomTest = DomTest.Append;
  public domTest = DomTest;
  @ViewChild('scratchpad', { static: false }) public scratchpad: ElementRef<HTMLElement> | undefined;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }
  
  public selectTest(test: DomTest): void {
    this.activeTest = test;
  }

  public removeAllFromScratchpad(): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const startTime = window.performance.now();
        while (this.scratchpad?.nativeElement.firstChild) {
          this.scratchpad.nativeElement.removeChild(this.scratchpad.nativeElement.firstChild);
        }
        const endTime = window.performance.now();
        resolve(endTime - startTime);
      }, 0);
    });
  }

  public addToScratchpad(): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const startTime = window.performance.now();
        for (let i = 0; i < this.numberOfElementsControl.value; i++) {
          let node = document.createElement("div");
          this.scratchpad?.nativeElement.appendChild(node);
        }
        const endTime = window.performance.now();
        resolve(endTime - startTime);
      }, 0);
    });
  }

  public async setupTest(): Promise<void> {
    switch(this.activeTest) {
      case DomTest.Append:
        await this.removeAllFromScratchpad();
        debugger;
        break;
      case DomTest.Remove:
        await this.addToScratchpad();
        debugger;
        break;
    }
  }
  
  public async runTest(): Promise<number> {
    switch(this.activeTest) {
      case DomTest.Remove:
        return await this.removeAllFromScratchpad();
      case DomTest.Append:
        return await this.addToScratchpad();
    }
  }
}
