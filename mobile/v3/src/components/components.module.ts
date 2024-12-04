import { NgModule } from '@angular/core';
import { LiquidGaugeComponent } from './liquid-gauge/liquid-gauge';
import { TestComponent } from './test/test';
@NgModule({
	declarations: [LiquidGaugeComponent,
    TestComponent],
	imports: [],
	exports: [LiquidGaugeComponent,
    TestComponent]
})
export class ComponentsModule {}
