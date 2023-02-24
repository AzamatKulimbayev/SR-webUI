import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/zdrav' },
  { path: 'zdrav', loadChildren: () => import('./pages/./zdrav/zdrav.module').then(m => m.ZdravModule) },
  { path: 'education', loadChildren: () => import('./pages/./education/education.module').then(m => m.EducationModule) },
  { path: 'agro', loadChildren: () => import('./pages/./agro/agro.module').then(m => m.AgroModule) },
  { path: 'users', loadChildren: () => import('./pages/./users/users.module').then(m => m.UsersModule) },
  { path: 'integStatus', loadChildren: () => import('./pages/./integStatus/integStatus.module').then(m => m.IntegStatusModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
