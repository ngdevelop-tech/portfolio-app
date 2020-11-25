import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GHRepo } from '../models/github.model';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  BASE_URL = 'https://api.github.com';
  
  constructor(private httpClient: HttpClient) { }
  
  getProjects(userName: string){
    return this.httpClient.get(this.BASE_URL + `/users/${userName}/projects`)
  }
  
  getRepos(userName: string){
    return this.httpClient.get<GHRepo[]>(this.BASE_URL + `/users/${userName}/repos`)
  }
}
