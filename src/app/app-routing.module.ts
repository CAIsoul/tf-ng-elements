import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoadingIndicatorDemoComponent } from './playground/ng/loading-indicator-demo/loading-indicator-demo.component';

const routes: Routes = [
    {
        path: '*',
        redirectTo: '',
    },
    {
        path: 'loading-indicator-playground',
        component: LoadingIndicatorDemoComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})

export class AppRoutingModule { }