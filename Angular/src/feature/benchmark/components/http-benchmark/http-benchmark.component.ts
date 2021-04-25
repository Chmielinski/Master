import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  
  public async runTest(): Promise<void> {
    let data;
    switch(this.activeTest) {
      case HttpTest.Get:
        data = await this.httpBenchmarkService.get();
        break;
      case HttpTest.Post:
        data = await this.httpBenchmarkService.post();
        break;
    }
    console.log(data)
  }
}
