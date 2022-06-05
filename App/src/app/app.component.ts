import { Component, OnInit } from '@angular/core';
import { Aluno } from './aluno.model';
import { GAcademicoService } from './g-academico.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AppGa';

  alunos: Aluno[] = [];

  constructor(private alunoServico: GAcademicoService){

  }
  ngOnInit(): void {
    //this.getAllAlunos();
    throw new Error('Method not implemented.');
  }

  /*getAllAlunos(){
    this.alunoServico.getAllAlunos().subscribe(
      response => {
        this.alunos = response;
        console.log(response);
      }
    );
  }*/
}
