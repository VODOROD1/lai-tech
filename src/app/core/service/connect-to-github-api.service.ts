import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectToGithubApiService {

  constructor(private http: HttpClient) { }

  getRepositories(): Observable<any> {
    debugger
    return this.http.get('https://api.github.com');
  }
}
