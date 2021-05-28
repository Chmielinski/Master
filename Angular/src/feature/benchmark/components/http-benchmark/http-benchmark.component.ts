import { Component, OnInit } from '@angular/core';
import { HttpTest } from '../../models/http-test.enum';
import { HttpBenchmarkService } from '../../models/services/http-benchmark.service';
import { BenchmarkComponentBase } from '../abstract/benchmark-component-base';

@Component({
  selector: 'http-benchmark',
  templateUrl: './http-benchmark.component.html',
  styleUrls: ['./http-benchmark.component.scss']
})
export class HttpBenchmarkComponent extends BenchmarkComponentBase implements OnInit {
  public activeTest: HttpTest = HttpTest.Get;
  public httpBenchmarkTest = HttpTest;

  constructor(private readonly httpBenchmarkService: HttpBenchmarkService) {
    super();
  }

  ngOnInit(): void {
  }
  
  public selectTest(test: HttpTest): void {
    this.activeTest = test;
  }

  public setupTest(): void {
    
  }
  
  public async runTest(): Promise<number> {
    return new Promise(async (resolve, reject) => {
      let data;
      let startTime;
      let endTime;
      switch(this.activeTest) {
        case HttpTest.Get:
          startTime = window.performance.now();
          data = await this.httpBenchmarkService.get();
          endTime = window.performance.now();
          resolve(endTime - startTime);
          break;
        case HttpTest.Post:
          startTime = window.performance.now();
          data = await this.httpBenchmarkService.post();
          endTime = window.performance.now();
          resolve(endTime - startTime);
          break;
      }
    });
  }
}
