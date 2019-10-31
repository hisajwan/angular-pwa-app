import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../modules/unauthorized/unauthorized.module').then(module => module.UnauthorizedModule) },
  { path: 'authorized', loadChildren: () => import('../modules/authorized/authorized.module').then(module => module.AuthorizedModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
