import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlunosComponent } from './lista-alunos/lista-alunos.component';
import { ListaTurmasComponent } from './lista-turmas/lista-turmas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlunosComponent,
    ListaTurmasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
