import { ChangeDetectorRef, Component, ContentChild, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BenchmarkAdditionalSettingsDirective } from '../../directives/benchmark-additional-settings.directive';
import { BenchmarkComponentBase } from '../abstract/benchmark-component-base';

@Component({
  selector: 'benchmark-base',
  templateUrl: './benchmark-base.component.html',
  styleUrls: ['./benchmark-base.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BenchmarkBaseComponent implements OnInit {
  @Input() name: string = '';
  @Input() component: BenchmarkComponentBase | undefined;

  public repeatCountControl = new FormControl(10);
  public progress: number = 0;

  public results: number[] = [];
  public averageRunTime: number = 0;
  public totalRunTime: number = 0;

  @ContentChild(BenchmarkAdditionalSettingsDirective, { static: false }) additionalSettingsDirective: BenchmarkAdditionalSettingsDirective | undefined;

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    
  }

  public isValidRepeatCount(): boolean {
    return this.repeatCountControl.value > 0;
  }

  public runBenchmark(): void {
    this.averageRunTime = 0;
    this.totalRunTime = 0;
    this.results = [];
    this.progress = 1;
    const repeats = this.repeatCountControl.value;
    for (let i = 0; i < repeats; i++) {
      const startTime = new Date().getTime();
      this.component?.runTest();
      const endTime = new Date().getTime();
      const runTime = endTime - startTime;
      console.log(runTime)
      this.results.push(runTime);
      this.cdRef.detectChanges();
      this.progress = (i + 1) / repeats * 100;
    }
    this.totalRunTime = this.results.reduce((a, b) => a + b);
    this.averageRunTime = this.totalRunTime / repeats;
  }

}
