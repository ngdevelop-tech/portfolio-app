import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { GHRepo, GHUser } from 'src/app/models/github.model';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-repo-details',
  templateUrl: './github-repo-details.component.html',
  styleUrls: ['./github-repo-details.component.scss']
})
export class GithubRepoDetailsComponent implements OnInit {

  repo$: Observable<GHRepo>;
  readmeContent$ : Observable<string>;
  stargazers$: Observable<GHUser[]>;
  
  constructor(private activatedRoute: ActivatedRoute,
              private ghService: GithubService) {
    this.readmeContent$ = this.activatedRoute.paramMap.pipe(
      switchMap(params=> this.ghService.getRepoReadmeContent(params.get('repo')))
    )
    this.repo$ = this.activatedRoute.paramMap.pipe(
      tap(params=> {
        this.readmeContent$ = this.ghService.getRepoReadmeContent(params.get('repo'));
        this.stargazers$ = this.ghService.getRepoStargazers(params.get('repo'));
      }),
      switchMap(params=> this.ghService.getRepoDetails(params.get('repo')))
    )
   }

  ngOnInit(): void {
  }

}
