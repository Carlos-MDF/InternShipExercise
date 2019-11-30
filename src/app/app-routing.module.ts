import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RepositoriesComponent } from './repositories/repositories.component'

import { IndexComponent } from './index/index.component'


const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full', canActivate: []},
  { path: 'index', component: IndexComponent, canActivate: [] },
  { path: 'repositories', component: RepositoriesComponent, canActivate: [] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
