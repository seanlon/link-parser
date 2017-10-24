import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoundComponent } from '../component/found';
import { NotFoundComponent } from '../component/not-found';
const appRoutes: Routes = [
    {
        path: '', redirectTo: '/Found',
        pathMatch: 'full'
    },
    { path: 'Found', component: FoundComponent },
    { path: 'Not Found', component: NotFoundComponent },
    { path: '**', component: NotFoundComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
