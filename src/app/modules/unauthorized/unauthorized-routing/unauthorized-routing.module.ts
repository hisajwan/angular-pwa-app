import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnauthorizedMainComponent } from '../screens/unauthorized-main/unauthorized-main.component';

const routes: Routes = [
    { path: '', component: UnauthorizedMainComponent, children: [] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UnauthorizedRoutingModule { }
