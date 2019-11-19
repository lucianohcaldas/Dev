import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColaboradorAddComponent } from './colaborador-add/colaborador-add.component';
import { ColaboradorDetailComponent } from './colaborador-detail/colaborador-detail.component';
import { ColaboradorListComponent } from './colaborador-list/colaborador-list.component';
import { ColaboradorUpdateComponent } from './colaborador-update/colaborador-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ColaboradorAddComponent,
    ColaboradorDetailComponent,
    ColaboradorListComponent,
    ColaboradorUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
