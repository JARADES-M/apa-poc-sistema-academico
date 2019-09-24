import { Injectable } from '@angular/core';
import { Aluno } from '../models/aluno.model';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Configuration } from '../config/configuration';


@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  constructor(
    private http: HttpClient, 
    private config: Configuration
    ) { }

  matricularAluno(aluno: Aluno): Observable<any> {
    return this.http.post(this.config.disciplinaUri, aluno);
  }

  cancelarMatriculaAluno(aluno: Aluno): Observable<any> {
    return this.http.put(this.config.disciplinaUri, aluno);
  }

}
