import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/home.component'

export const appRoutes: Routes = [
    //{ path: 'contact', component: ContactComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' }
];