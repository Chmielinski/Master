import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataStructureBenchmarkComponent } from './components/data-structure-benchmark/data-structure-benchmark.component';
import { DomBenchmarkComponent } from './components/dom-benchmark/dom-benchmark.component';
import { LoadBenchmarkComponent } from './components/load-benchmark/load-benchmark.component';
import { HttpBenchmarkComponent } from './components/http-benchmark/http-benchmark.component';
import { BenchmarkBaseComponent } from './components/benchmark-base/benchmark-base.component';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { BenchmarkAdditionalSettingsDirective } from './directives/benchmark-additional-settings.directive';

@NgModule({
  declarations: [
    DataStructureBenchmarkComponent, 
    DomBenchmarkComponent, 
    LoadBenchmarkComponent, 
    HttpBenchmarkComponent, 
    BenchmarkBaseComponent, BenchmarkAdditionalSettingsDirective
  ],
  imports: [
    ReactiveFormsModule,
    MatProgressBarModule,
    CommonModule,
    RouterModule.forRoot([
      { path: 'data-structure', component: DataStructureBenchmarkComponent },
      { path: 'dom', component: DomBenchmarkComponent },
      { path: 'http', component: HttpBenchmarkComponent },
      { path: 'load', component: LoadBenchmarkComponent }
    ])
  ]
})
export class BenchmarkModule { }
