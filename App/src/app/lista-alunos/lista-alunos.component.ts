import { Component, OnInit } from '@angular/core';
import { Aluno } from '../aluno.model';
import { GAcademicoService } from '../g-academico.service';

@Component({
  selector: 'app-lista-alunos',
  templateUrl: './lista-alunos.component.html',
  styleUrls: ['./lista-alunos.component.css']
})
export class ListaAlunosComponent implements OnInit {

  alunos: Aluno[] = []; 
  
  constructor(private alunoServico: GAcademicoService) { }

  

  ngOnInit(): void {
    //this.getAllAlunos();
  }
  getAllAlunos(){
    this.alunoServico.getAllAlunos().subscribe(
      response => {
        this.alunos = response;
        console.log(response);
      }
    );
  }  
}
