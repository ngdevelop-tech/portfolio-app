import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GHRepo } from 'src/app/models/github.model';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-projects',
  templateUrl: './github-projects.component.html',
  styleUrls: ['./github-projects.component.scss']
})
export class GithubProjectsComponent implements OnInit {

  userName: string = 'ngdevelop-tech';

  repos$ = this.githubService.getRepos(this.userName);

  constructor(private githubService: GithubService,
              private router: Router) { }

  ngOnInit(): void {
  }

}
