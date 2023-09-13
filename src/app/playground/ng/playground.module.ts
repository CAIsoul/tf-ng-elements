import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingIndicatorDemoComponent } from './loading-indicator-demo/loading-indicator-demo.component';
import { LoadingIndicatorComponent } from 'src/app/components/loading-indicator/loading-indicator.component';
import { AppModule } from 'src/app/app.module';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  declarations: [
    LoadingIndicatorDemoComponent,
  ],
  imports: [
    CommonModule,
    ComponentModule,
  ],
  providers: [],
})
export class PlaygroundModule { }
