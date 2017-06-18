import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';

import { HomeComponent } from './Home/home.component'

import { JQ_TOKEN } from './Global/jQuery.service';

declare let jQuery: Object;

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    providers: [
        { provide: JQ_TOKEN, useValue: jQuery }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }