import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[benchmarkAdditionalSettings]'
})
export class BenchmarkAdditionalSettingsDirective {

  constructor(public content: TemplateRef<void>) { }

}
