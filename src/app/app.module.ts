import { NgModule, Injector, DoBootstrap } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomCardComponent } from './components/custom-card/custom-card.component';
import { createCustomElement } from '@angular/elements';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PlaygroundModule } from './playground/ng/playground.module';
import { ComponentModule } from './components/component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    PlaygroundModule,
    ComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule implements DoBootstrap {
  constructor(
    private injector: Injector
  ) { }

  ngDoBootstrap(): void {
    const customCardEle = createCustomElement(CustomCardComponent, { injector: this.injector });
    customElements.define('custom-card', customCardEle);

    const loadingIndicatroEle = createCustomElement(LoadingIndicatorComponent, { injector: this.injector });
    customElements.define('loading-indicator', loadingIndicatroEle);
  }
}
