import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GHRepo, GHUser } from '../models/github.model';
import { switchMap } from 'rxjs/operators';
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

  getRepoDetails(repo:string ){
    return this.httpClient.get<GHRepo>(this.BASE_URL+`/repos/`+decodeURIComponent(repo));
  }

  getRepoStargazers(repo:string ){
    return this.httpClient.get<GHUser[]>(this.BASE_URL+`/repos/`+decodeURIComponent(repo) + '/stargazers');
  }

  getRepoReadmeContent(repo:string){
    return this.httpClient.get<any>(this.BASE_URL + '/repos/'+ decodeURIComponent(repo) + '/contents/README.md').pipe(
      switchMap(response=> this.httpClient.get(response.download_url, {responseType: 'text'}))
    )
  }
}
