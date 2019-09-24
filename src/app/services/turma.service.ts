import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration } from '../config/configuration';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(
    private config: Configuration,
    private http: HttpClient
    ) { }

  recuperarTurmaPorId(id: number): Observable<any> {
    return this.http.get(this.config.turmaUri + id);
  }
  
}
