import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BenchmarkModule } from 'src/feature/benchmark/benchmark.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BenchmarkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
