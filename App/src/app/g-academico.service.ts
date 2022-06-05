import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from './aluno.model';

@Injectable({
  providedIn: 'root'
})
export class GAcademicoService {

  baseUrl = "https://localhost:7122/api/Alunos";

  constructor(private http: HttpClient) { }

  //Get All Alunos
  getAllAlunos(): Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.baseUrl);
  }
  addAluno(aluno:Aluno){
    
  }
}
