import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomCardComponent } from './custom-card/custom-card.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    CustomCardComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomCardComponent,
    LoadingIndicatorComponent,
  ]
})
export class ComponentModule { }
