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

  public removeAllFromScratchpad(): void {
    while (this.scratchpad?.nativeElement.firstChild) {
      this.scratchpad.nativeElement.removeChild(this.scratchpad.nativeElement.firstChild);
    }
  }

  public addToScratchpad(): void {
    for (let i = 0; i < this.numberOfElementsControl.value; i++) {
      let node = document.createElement("div");
      this.scratchpad?.nativeElement.appendChild(node);
    }
  }

  public setupTest(): void {
    switch(this.activeTest) {
      case DomTest.Append:
        this.removeAllFromScratchpad();
        break;
      case DomTest.Remove:
        this.addToScratchpad();
        break;
    }
  }
  
  public runTest(): void {
    switch(this.activeTest) {
      case DomTest.Remove:
        this.removeAllFromScratchpad();
        break;
      case DomTest.Append:
        this.addToScratchpad();
        break;
    }
  }
}
