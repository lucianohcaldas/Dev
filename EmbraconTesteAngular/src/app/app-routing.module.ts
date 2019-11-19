import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColaboradorListComponent } from './colaborador-list/colaborador-list.component';
import { ColaboradorAddComponent } from './colaborador-add/colaborador-add.component';
import { ColaboradorUpdateComponent } from './colaborador-update/colaborador-update.component';
import { ColaboradorDetailComponent } from './colaborador-detail/colaborador-detail.component';


const routes: Routes = [

  { path: '', redirectTo: 'colaborador', pathMatch: 'full' },
  { path: 'colaborador', component: ColaboradorListComponent },
  { path: 'add', component: ColaboradorAddComponent },
  { path: 'update/:id', component: ColaboradorUpdateComponent },
  { path: 'details/:id', component: ColaboradorDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
